import passport from 'passport';
import bcrypt from 'bcryptjs';
import { Strategy } from 'passport-local';
import { ObjectId } from 'mongodb';

passport.serializeUser((user, done) => {
    done(null, user._id.toString());
})

passport.deserializeUser((req, id, done) => {
    req.db
        .collection('users')
        .fineOne(ObjectId(id))
        .then(user => done(null, user))
})

passport.use(
    new Strategy(
        { usernameField: 'email', passReqToCallback: true},
        async (req, email, password, done) => {
            const user = await req.db.collection('users').findOne({ email });
            if(user && (await bcrypt.compare(password, user.password))) done(null, user);
            else done(null, false, {
                message: 'Incorrect email or password'
            })
        }
    )
)

export default passport;