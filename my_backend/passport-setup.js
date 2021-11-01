const passport = require('passport')
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    

      done(null, user);
  
    
  });

passport.use(new GoogleStrategy({
    clientID:     "358885207408-jumqr99thkj4qo939cn88f66kvcu8km8.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
      return done(null  , profile);
    
  }
));