const mongoose = require("mongoose");

const produtosSchema = mongoose.Schema({
    id: { type: String, unique: true },
    nome: { type: String, required: true },
    descricao: { type: String, unique: true, required: true },
    preco: { type: Number, required: true }
});

const Produtos = mongoose.model("produtos", produtosSchema);

module.exports = Produtos;