const db = require('../db/connection');
const User = require('../models/User');

exports.getAll = async (req,res) =>{
    try{
        var users = await User.find();
        res.status(201).json(users)
    }catch(error){
        res.status(500).json({error: error})
    }
}

exports.getId = async (req, res) =>{
    var id = req.params.id;
    try{
        var users = await User.findOne({_id: id});
        if(!users)
            res.status(422).json({message: 'Cliente não achado'})
        res.status(201).json(users)
    }catch(error){
        res.status(500).json({error: error})
    }
}

exports.creat = async (req, res) =>{
    const {name, age,  gender, email, cpe, address, number, district, city, state, complement} = req.body;
    const user = { name, age,  gender, email, cpe, address, number, district, city, state, complement };
    if(!user.name)
        res.status(422).json({message: 'Falta inserir o nome'})
    try{
        await User.create(user);
        res.status(201).json({ message: 'Dado inserido' })
    }catch(error){
        res.status(500).json({error: error})
    }
}

exports.delete = async (req, res) =>{
    var id = req.params.id;
    var users = await User.findOne({_id: id});
    if(!users)
    res.status(422).json({message: 'Cliente não achado'})
    try{
        await User.deleteOne({_id: id});
        res.status(201).json({message: 'Cliente removido com sucesso'})
    }catch(error){
        res.status(500).json({error: error})
    }   
}

exports.update = async (req, res)=>{
    const id = req.params.id;
    const {name, age,  gender, email, cpe, address, number, district, city, state, complement} = req.body;
    const user = { name, age,  gender, email, cpe, address, number, district, city, state, complement };
    console.log(user)
    
    try{
        var updateCliente = await User.updateOne({_id: id}, user);
    console.log(updateCliente)

        if(updateCliente.matchedCount === 0)
            res.status(422).json({message: 'O usuário não encontrado'})
        res.status(201).json(user)
    }catch(error){
        res.status(500).json({error: error})
    }
}