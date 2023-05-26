const Usuario = require("../model/usuario.model");
const jwt = require("jsonwebtoken");

const segredo = "564dsf65dhg4f65dfg4";

const loginService = (email) => Usuario.findOne({ email });

const gerarTokenJWT = (user) =>
    jwt.sign({ user }, segredo, {
        expiresIn: 86400
    });

const validarTokenJWT = (token) =>
    jwt.verify(token, segredo);


module.exports = {
    loginService,
    gerarTokenJWT,
    validarTokenJWT
};