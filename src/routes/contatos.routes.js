const { Router} = require('express') 
const ContatosController = require('../controllers/ContatosController.js');
const checkIsAdmin = require('../middlewares/checkIsAdmin.js');

const contatosRouter = Router()
const contatosController = ContatosController

contatosRouter.post('/', contatosController.createContacts);
contatosRouter.get('/:user_id', checkIsAdmin, contatosController.listContacts);

module.exports = contatosRouter