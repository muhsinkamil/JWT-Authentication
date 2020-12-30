const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

// Define a model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
})

// on save, encrypt password
// Before saving, a) generate salt    b) hash the password with salt and save. 
userSchema.pre('save', function(next){
    // get access to the user model
    const user = this

    bcrypt.genSalt(10, function(err, salt){
        if (err) { return next(err) }

        bcrypt.hash(user.password, salt, null, function(err, hash){
            if (err) { return next(err) }

            // save the hashed password
            user.password = hash
            next()
        })
    })
})

// Create the model class
const ModelClass = mongoose.model('user', userSchema)

// export the model class
module.exports = ModelClass
