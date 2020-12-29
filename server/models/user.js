const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

// Define a model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
})

// Create the model class
const ModelClass = mongoose.model('user', userSchema)

// export the model class
module.exports = ModelClass
