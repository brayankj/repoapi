const Product = require('../models/Producto');
const Lista = require('../models/ListaProductos');
const ObjectID = require('mongoose').mongo.ObjectID

//agregar un nuevo cliente
exports.nuevoProducto = async (req,res,next) => {

    const producto = new Product(req.body);
    try {
        if(producto){
            await producto.save();
            res.json({mensaje:'Se Creo un Nuevo producto'});
        }else{ res.json({mensaje:'Faltan datos por llenar'}); }

    } catch (error) {
        console.log(error);
        next();
    }
}

exports.verProductos = async (req,res,netx) => {

    const user = req.params.id;
    const producto = await Product.find({});
    const lista = await Lista.find({"usuario":user});

    const result = producto.filter(pro => {
        for(let a of lista){
            console.log(db.ObjectId(a._id));
        }
    });

    try {
        
        res.status(200).json({producto,lista});
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.ProductoId = async (req,res,next) => {
    
    try {
        const producto = await Product.findById(req.params.id);
        if(producto){
            res.json(producto);
        }else{
            res.json({mensaje:'El producto no existe'});
        }
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.actualizarProducto = async (req,res,next) =>{
    try {
        const producto = await Product.findByIdAndUpdate({_id: req.params.id},
        req.body, {
            new: true
        });
        res.json(producto);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.borrarProducto = async (req,res,next) => {
    try {
        await Product.findOneAndDelete({_id : req.params.id});
        res.json({mensage:'El producto se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}