const mongoose = require("mongoose");
const { Schema } = mongoose;

const productos = new Schema({
    nombre: { type: String },
    categoria: { type: String },
    precio: { type: String },
    imagen: { type: String },
}, {
    timestamps: true
});

module.exports = mongoose.model("productos", productos, "productos");
