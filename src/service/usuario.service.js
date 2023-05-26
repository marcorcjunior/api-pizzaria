const mongoose = require("mongoose");
const Usuarios = require("../model/usuario.model");

const find = () => Usuarios.find();

const findById = (value) => Usuarios.findById(value);

const findFromKeyAndValue = (key, value) => Usuarios.find({ [key]: value });

const create = (usuario) =>
    Usuarios.create(usuario);

const findByIdAndUpdate = (id, usuario) =>
    Usuarios.findByIdAndUpdate(id, usuario, { returnDocument: "after" });

const findByIdAndRemove = (id) =>
    Usuarios.findByIdAndRemove(id);

module.exports = {
    find,
    findById,
    findFromKeyAndValue,
    create,
    findByIdAndUpdate,
    findByIdAndRemove
}