const User = require('../models/Users');
const bcrypt = require('bcrypt-nodejs');

//agregar un nuevo cliente
exports.nuevoCliente = async (req,res,next) => {
    const usuario = new User(req.body);
    try {
        if(usuario.password){
            bcrypt.hash(usuario.password, null, null, (err, hash) =>{
                usuario.password = hash;
            });
            await usuario.save();
            res.json({mensaje:'Se Creo un Nuevo usuario'});
        }else{ res.json({mensaje:'Faltan datos por llenar'}); }

        

    } catch (error) {
        console.log(error);
        next();
    }
}

exports.verClientes = async (req,res,netx) => {
    try {
        const usuarios = await User.find({});
        res.json(usuarios);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.clienteId = async (req,res,next) => {
    
    try {
        const usuario = await User.findById(req.params.id);
        if(usuario){
            res.json(usuario);
        }else{
            res.json({mensaje:'El cliente no existe'});
        }
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.actualizarCliente = async (req,res,next) =>{
    try {
        const usuario = await User.findByIdAndUpdate({_id: req.params.id},
        req.body, {
            new: true
        });
        res.json(usuario);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.borrarCliente = async (req,res,next) => {
    try {
        await User.findOneAndDelete({_id : req.params.id});
        res.json({mensage:'El cliente se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}