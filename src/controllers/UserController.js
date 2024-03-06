const knex  = require('../database/knex');

class UserController {
    async createUsers(req, res) {
        const { name, email, password } = req.body;

        const isAdmin = false

        await knex("users").insert({
            name,
            email,
            password,
            isAdmin
            
        })
        res.status(201).json('Usuário criado com sucesso');
    }

    async listUsersById(req, res) {
        const { id } = req.params;
        const user = await knex("users").where({ id })
        res.status(200).json(user);
    }

    async updateUsers(req, res) {

        const { id } = req.params;
        const { name, email, password } = req.body;
        await knex("users").where({ id }).update({
            name,
            email,
            password
        })
        res.status(200).json('Usuário atualizado com sucesso');
    }

    async deleteUsers(req, res) {
        const { id } = req.params;

        await knex('users').where({ id }).delete()
        res.status(200).json('Usuário deletado com sucesso!')
    }
    
}


module.exports = new UserController();