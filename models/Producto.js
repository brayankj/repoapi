const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductoSchema = new Schema ({
    nombre : { type: String, trim: true },
    precio : { type: Number, trim: true },
    status : { type: Boolean, default: false }
});

module.exports = mongoose.model('Productos',ProductoSchema);