const mongoose = require("mongoose");
const service = require("../service/usuario.service");

//Pesquisa usuario pelo id
const find = (req, res) => {
    const { id } = req.params;

    service.findById(id)
        .then((response) => {
            if (response == null) {
                return res.status(404).send({ message: "Registro não encontrado!" });
            }

            return res.status(200).send(response);
        })
        .catch((error) => {
            console.log(`Erro: ${error}`);
            return res.status(500).send({ message: "Erro no servidor, tente novamente mais tarde!" });
        });
}

//Lista todos os usuarios
const findAll = (req, res) => {
    const { email } = req.query;

    if (email) {
        return service.findFromKeyAndValue('email', email)
            .then((response) => {
                if (response == null) {
                    return res.status(404).send({ message: "Registro não encontrado!" });
                }

                return res.status(200).send(response);
            })
            .catch((error) => {
                console.log(`Erro: ${error}`);
                return res.status(500).send({ message: "Erro no servidor, tente novamente mais tarde!" });
            });
    }

    service.find()
        .then((response) => {
            return res.send(response);
        })
        .catch((error) => {
            console.log(`Erro: ${error}`);
            return res.status(500).send({ message: "Erro no servidor, tente novamente mais tarde!" });
        })
}

// Validação do body para create e update
const validaBody = (body) => {
    if (Object.keys(body).length === 0) {
        return { message: "Corpo da requisição não possui dados!" };
    }

    if (body.nome == null) {
        return { message: "Nome não foi informado!" };
    }

    if (body.email == null) {
        return { message: "E-mail não foi informado!" };
    }

    if (body.senha == null) {
        return { message: "Senha não foi informada!" };
    }

    return null;
}

// Create de usuario a partir do body
const create = (req, res) => {
    const body = req.body;
    const validarBody = validaBody(body);

    if (validarBody != null) {
        return res.status(400).send(validarBody);
    }

    service.create(body)
        .then(() => {
            return res.status(201).send({ message: "Criação de registro efetuada com sucesso!" });
        })
        .catch((error) => {
            console.log(`Erro: ${error}`);
            return res.status(500).send({ message: "Criação de registro não efetuada!" })
        });
}

// Update de usuario a partir do body
const update = (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const validarBody = validaBody(body);

    if (validarBody != null) {
        return res.status(400).send(validarBody);
    }

    service.findByIdAndUpdate(id, body)
        .then((response) => {
            return res.status(201).send({ message: "Atualização de registro efetuada com sucesso!", response });
        })
        .catch((error) => {
            console.log(`Erro: ${error}`);
            return res.status(500).send({ message: "Atualização de registro não efetuada! Erro no servidor, tente novamente mais tarde!" });
        });
}

// Delete de usuario apartir do id
const remove = (req, res) => {
    const { id } = req.params;

    service.findByIdAndRemove(id)
        .then(() => {
            return res.status(201).send({ message: "Registro removido com sucesso!" });
        })
        .catch((error) => {
            console.log(`Erro: ${error}`);
            return res.status(500).send({ message: "Registro não removido!" })
        });
}

module.exports = {
    find,
    findAll,
    create,
    update,
    remove
}