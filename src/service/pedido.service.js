const Pedidos = require("../model/pedido.model");

const find = () => Pedidos.find();

const findById = (value) => Pedidos.findById(value);

const findFromKeyAndValue = (key, value) => Pedidos.find({ [key]: value });

const create = (pedido) =>
    Pedidos.create(pedido);

const findByIdAndUpdate = (id, pedido) =>
    Pedidos.findByIdAndUpdate(id, pedido, { returnDocument: "after" });

const findByIdAndRemove = (id) =>
    Pedidos.findByIdAndRemove(id);

module.exports = {
    find,
    findById,
    findFromKeyAndValue,
    create,
    findByIdAndUpdate,
    findByIdAndRemove
}