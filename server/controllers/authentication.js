const User = require('../models/user')
const jwt = require('jwt-simple')
const config = require('../config')

function tokenForUser(user){
    const timeStamp = new Date().getTime()
    return jwt.encode({ sub: user.id, iat: timeStamp }, config.secret )
}

exports.signup = function(req, res, next){
    const email = req.body.email
    const password = req.body.password

    if(!email || !password){
        res.status(422).send({ error: "You must enter a email and password"})
    }

    // See if a user with given email exists
    User.findOne({ email: email }, function(err, existingUser){

        if(err){ return next(err) }

        if(existingUser){
            // If a user with email does exist, return an error
            // status 422 - unprocessable entity
            return res.status(422).send({ error: 'Email is already registerd. Try signing in'})
        }

        // If a user with email does not exist, create and save user record
        const user = new User({ email: email, password: password })
        // saving user takes some time, hence sending callback once it is finished
        user.save(function(err){
            // if there is any error in saving the user to database, return error
            if(err){ return next(err)}

            res.json({ token: tokenForUser(user) })
        })
    })
    

    // Respond to request indicating the user was created

}