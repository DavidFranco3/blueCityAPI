const mongoose = require("mongoose");
const { Schema } = mongoose;

const ventas = new Schema({
    fecha: { type: Date },
    totalVendido: { type: String },
}, {
    timestamps: true
});

module.exports = mongoose.model("historialVentas", ventas, "historialVentas");
