const passport = require("passport")
const User = require("../models/user")
const config = require("../config")
const JwtStrategy = require("passport-jwt").Strategy
const ExtractJwt = require("passport-jwt").ExtractJwt
const LocalStrategy = require("passport-local")

const localOptions = { usernameField: "email" }
const localLogin = new LocalStrategy(
  localOptions,
  function (email, password, done) {
    // verfiy the username and password and call done
    User.findOne({ email: email }, function (err, user) {
      if (err) {
        return done(err)
      }

      if (!user) {
        return done(null, false, { message: "Incorrect username" })
      }

      user.comparePassword(password, function (err, isMatch) {
        if (err) {
          return done(err)
        }
        if (!isMatch) {
          return done(null, false)
        }
        return done(null, user)
      })
    })
  }
)

// set up options for JWT strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authtoken"),
  secretOrKey: config.secret,
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
    } else {
      return done(null, false)
    }
  })
})

// Tell passport to use this strategy
passport.use(jwtLogin)
passport.use(localLogin)
