const passport = require('passport');

module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  app.get('/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect("/surveys");
    });

  app.get('/auth/facebook', passport.authenticate('facebook', {
    scope: ['user_friends', 'manage_pages']
  }));

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook'),
    (req, res) => {
      res.redirect('/surveys')
    });

  app.get('/auth/twitter', passport.authenticate('twitter'));

  app.get('/auth/twitter/callback',
    passport.authenticate('twitter'),
    (req, res) => {
      res.redirect('/surveys');
    });

    app.get('/auth/github', passport.authenticate('github'));

    app.get('/auth/github/callback',
      passport.authenticate('github'),
      (req, res) => {
        res.redirect('/surveys');
      })

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect("/");
  });
}
