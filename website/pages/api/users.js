import zxcvbn from 'zxcvbn';
import nextConnect from 'next-connect';
import isEmail from 'validator/lib/isEmail';
import normalizeEmail from 'validator/lib/normalizeEmail';
import bcrypt from 'bcryptjs';
import middleware from '../../middleware/middleware';
import expressip from 'express-ip'

const handler = nextConnect();

handler.use(middleware);
handler.use(expressip().getIpInfoMiddleware);

handler.post(async (req, res) => {
  //if(process.env.USER_LIMITING) {
    
  //}

  const { name, password } = req.body;
  try {
    if(await req.db
      .collection('logs')
      .countDocuments({
        logType: "Registration attempt",
        ip: req.ipInfo.ip,
        ok: true
      }) >= 2) {
        throw new Error('Attempted registration too many times')
      }
    const email = normalizeEmail(req.body.email);
    if (!isEmail(email)) {
      throw new Error('The email you entered is invalid.');
    };
    if (!password || !name) {
      throw new Error('Missing field(s)');
    };
    if ((await req.db.collection('users').countDocuments({ email })) > 0) {
      throw new Error('The email has already been used.');
    };

    let passwordStats = zxcvbn(password)
    if(passwordStats.score < 3) {
      throw new Error("Password too weak " +  passwordStats.feedback.suggestions[0])
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await req.db
      .collection('users')
      .insertOne({ email, password: hashedPassword, name })
      .then(({ ops }) => ops[0]);
    req.logIn(user, async (err) => {
      if (err) throw err;
      await req.db.collection('logs').insertOne({
          createdAt: new Date(),
          logType: 'Registration attempt',
          ip: req.ipInfo.ip,
          ok: true
        })
      res.status(201).json({
        ok: true,
        message: 'User signed up successfully'
      });
    });
  } catch (err) {
    await req.db
    .collection('logs')
    .insertOne({
      createdAt: new Date(),
      logType: 'Registration attempt',
      ip: req.ipInfo.ip,
      ok: false
    })
    res.json({
      ok: false,
      message: err.toString(),
    });
  }

});

export default handler;
