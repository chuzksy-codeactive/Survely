const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const mongoose = require('mongoose');

const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id)
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    });
});

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    })
);

passport.use(
  new FacebookStrategy({
    clientID: keys.facebookAppID,
    clientSecret: keys.facebookAppSecret,
    callbackURL: '/auth/facebook/callback',
    proxy: true
  },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ facebookId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ facebookId: profile.id }).save();
      done(null, user);
    }
  )
);

passport.use(
  new TwitterStrategy({
    consumerKey: keys.twitterKey,
    consumerSecret: keys.twitterSecret,
    callbackURL: "/auth/twitter/callback"
  },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ twitterId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ twitterId: profile.id }).save();
      done(null, user);
    }
  ));

  passport.use(
    new GitHubStrategy({
      clientID: keys.githubId,
      clientSecret: keys.githubSecret,
      callbackURL: "https://vast-reaches-83331.herokuapp.com/auth/github/callback",
    },
      async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ githubId: profile.id });
  
        if (existingUser) {
          return done(null, existingUser);
        }
  
        const user = await new User({ githubId: profile.id }).save();
        done(null, user);
      }
    ));
