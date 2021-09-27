var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductoSchema = new Schema({
    codigo: { type: String, required: true },
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    existencias: { type: Number, required: true }
});

module.exports = mongoose.model('Producto', ProductoSchema);