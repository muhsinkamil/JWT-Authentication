const passport = require("passport")
const User = require("../models/user")
const config = require("../config")
const JwtStrategy = require("passport-jwt").Strategy
const ExtractJwt = require("passport-jwt").ExtractJwt

// set up options for JWT strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authtoken'),
    secretOrKey: config.secret
}

// create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  // see if the user id in the payload exists in our database
  // if the user is present, call done with the user
  // otherwise, call done without the user object

  User.findById(payload.sub, function (err, user) {
    if (err) {
      return done(err, false)
    }

    if (user) {
        return done(null, user)
    }else{
        return done(null, false)
    }
  })
})

// Tell passport to use this strategy
passport.use(jwtLogin)
