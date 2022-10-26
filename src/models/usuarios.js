const mongoose = require("mongoose");
const { Schema } = mongoose;

const usuarios = new Schema({
    nombre: { type: String },
    apellidos: { type: String },
    usuario: { type: String },
    admin: { type: String },
    password: { type: String },
    estadoUsuario: { type: String }
}, {
    timestamps: true
});

module.exports = mongoose.model("usuarios", usuarios, "usuarios");
