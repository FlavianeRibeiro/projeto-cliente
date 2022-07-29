const mongoose = require('mongoose');

mongoose.connect(
    `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@cluster0.n3cc2.mongodb.net/?retryWrites=true&w=majority`
).then(()=>{
    console.log('Banco connectado');
}).catch((err) => console.log(err))
