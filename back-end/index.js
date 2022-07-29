const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


app.use(cors());
app.use(bodyparser.json());


// Rotas
const routerCliente = require('./router/index')
app.use(routerCliente);

app.listen(3000, () =>{
    console.log('Servidor rodando')
})