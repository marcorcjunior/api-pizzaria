const Produtos = require("../model/produto.model");

const find = () => Produtos.find();

const findById = (value) => Produtos.findById(value);

const findFromKeyAndValue = (key, value) => Produtos.find({ [key]: value });

const create = (produto) =>
    Produtos.create(produto);

const findByIdAndUpdate = (id, produto) =>
    Produtos.findByIdAndUpdate(id, produto, { returnDocument: "after" });

const findByIdAndRemove = (id) =>
    Produtos.findByIdAndRemove(id);

module.exports = {
    find,
    findById,
    findFromKeyAndValue,
    create,
    findByIdAndUpdate,
    findByIdAndRemove
}