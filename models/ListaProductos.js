
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListaProductoSchema = new Schema ({
    usuario:{
        type: Schema.ObjectId,
        ref: "Users"
    },
    productos:[{
        type: Schema.ObjectId,ref: "Productos"
    }]
});

module.exports = mongoose.model('Listas',ListaProductoSchema);
