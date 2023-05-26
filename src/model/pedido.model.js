const mongoose = require("mongoose");

const Produtos = require("./produto.model");

const pedidosSchema = mongoose.Schema({
    id: { type: String, unique: true },
    clienteId: { type: String, required: true },
    items: { type: Array, required: true },
});

const Pedidos = mongoose.model("pedidos", pedidosSchema);

module.exports = Pedidos;