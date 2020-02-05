const Lista = require('../models/ListaProductos');

//agregar un nuevo cliente
exports.crearLista = async (req,res,next) => {

    let list = new Lista();
    list.usuario = req.params.id;
    list.save((err,guardar) => {
        if(err){
            res.status(500).send({msg:'error 500'});
            console.log(err);
        }else{
            if(!guardar){
                res.status(400).send({msg:'error 400'});
            }else{
                res.status(200).send({guardar});
            }
        }
    });
}


exports.addProducto = async (req,res,next) => {
    
    const user = req.params.id;
    const idProduct = req.params.id_producto;
    
    let lista = await Lista.findOneAndUpdate({"usuario" : user},
        { $addToSet : {productos : idProduct  }  }, {new: true},
    ).populate({path: 'productos', model: 'Productos'}).exec((err,newData) => {
            if(err){
                res.status(500).json({msg:'Error 500'});
            }else{
                if(!newData){
                    res.status(400).send({msg:'Error 400'});
                }else{
                    res.status(200).send({newData});
                }
            }
    });

}

exports.removeProducto = async (req,res,netx) => {
    const user = req.params.id;
    const idProduct = req.params.id_producto;

    let lista = await Lista.findOneAndUpdate({"usuario" : user}, 
        { $pull : {productos : idProduct  }  }, {new: true}
    ).populate({path: 'productos', model: 'Productos'}).exec((err,newData) => {
        if(err){
            res.status(500).send({msg:'Error 500'})
        }else{
            if(!newData){
                res.status(400).send({msg:'Error 400'});
            }else{
                if(newData.productos.length == 0){
                    res.status(200).send({msg:'No existen elementos'});
                }else{
                    res.status(200).send({newData});
                }
            }
        }
    });
}



