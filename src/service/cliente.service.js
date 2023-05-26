const Clientes = require("../model/cliente.model");

const find = () => Clientes.find();

const findById = (value) => Clientes.findById(value);

const findFromKeyAndValue = (key, value) => Clientes.find({ [key]: value });

const create = (cliente) =>
    Clientes.create(cliente);

const findByIdAndUpdate = (id, cliente) =>
    Clientes.findByIdAndUpdate(id, cliente, { returnDocument: "after" });

const findByIdAndRemove = (id) =>
    Clientes.findByIdAndRemove(id);

module.exports = {
    find,
    findById,
    findFromKeyAndValue,
    create,
    findByIdAndUpdate,
    findByIdAndRemove
}