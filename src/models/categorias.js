const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorias = new Schema({
    nombre: { type: String },
    imagen: { type: String },
}, {
    timestamps: true
});

module.exports = mongoose.model("categorias", categorias, "categorias");
