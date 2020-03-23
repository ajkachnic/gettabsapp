import nextConnect from 'next-connect';
import middleware from '../../middleware/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.get((req, res) => {
  if(req.user) {
    const {
      name, lists, bookmarks
    } = req.user;
    return res.json({
      data: {
        isLoggedIn: true,
        user: {
          name,
          lists,
          bookmarks
        },
      },
    });
  }

  return res.json({
    data: {
      isLoggedIn: false,
      user: {},
    },
  })
})

handler.delete((req, res) => {
  req.logOut();
  res.json({
    ok: true,
    message: 'You have been logged out.'
  });
});

export default handler;