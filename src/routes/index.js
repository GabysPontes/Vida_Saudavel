const {Router} = require('express');

const usersRouter = require('./users.routes')
const contatosRouter = require('./contatos.routes')

const router = Router()

router.use('/users', usersRouter)
router.use('/contatos', contatosRouter)

module.exports = router;