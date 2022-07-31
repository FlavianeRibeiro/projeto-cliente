const mongoose = require('mongoose')

const User = mongoose.model('Users', {
    name:String,
    age: Number,
    gender: String,
    email: String,
    cpe: String,
    address: String,
    number: Number,
    district: String,
    city: String,
    state: String,
    complement: String,
})

module.exports = User

