const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const DataSchema = mongoose.Schema({
    email: {type: String, unique: true},
    fistName: {type: String},
    lastName: {type: String},
    password: {
        type: String,
        required: [true, "Please enter an Password!"],
        minLength: [6, "Minimum Password Length is 6 characters!"]
    },
    createdDate: {type: Date, default: Date.now()}

}, {versionKey: false});

//Fire a Function before doc saved for the hashing password


const UserModel = mongoose.model('Profile', DataSchema)
module.exports = UserModel
