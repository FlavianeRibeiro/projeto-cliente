const mongoose = require('mongoose')

const User = mongoose.model('Users', {
    name:String,
    cpf: Number,
    date: Date,
    salary:Number,
    email:String,
})

module.exports = User