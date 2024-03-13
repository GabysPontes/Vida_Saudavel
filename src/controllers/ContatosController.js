const knex  = require('../database/knex');

class ContatosController {

    async createContacts(req, res) {
        const { name, email, message } = req.body;
        await knex("contatos").insert({
           name,
           email,
           message,
        })
        res.status(201).json('Contato cadastrado com sucesso!');
    }

    async listContacts(req, res) {
        const allContacts = await knex('contatos')
        res.status(200).json(allContacts)
    }
}

module.exports = new ContatosController();

