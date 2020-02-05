const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientesSchema = new Schema({

    nombre : { type:String,trim: true },
    email : { type: String, unique: true, lowercase: true, trim: true },
    password :{ type: String, trim: true },
    fecha: { type: Date, default: Date.now() }

});

module.exports = mongoose.model('Users',clientesSchema);