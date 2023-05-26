const mongoose = require("mongoose");

const clientesSchema = mongoose.Schema({
    id: { type: String, unique: true },
    nome: { type: String, required: true },
    telefone: { type: String, unique: true, required: true },
    enderecos: { type: Array, required: true }
});

const Clientes = mongoose.model("clientes", clientesSchema);

module.exports = Clientes;