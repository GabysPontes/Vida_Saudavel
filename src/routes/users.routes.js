const { Router} = require('express') 
const UserController = require('../controllers/UserController')

const usersRouter = Router()
const userController = UserController

usersRouter.post('/', userController.createUsers);
usersRouter.get('/:id', userController.listUsersById);
usersRouter.put('/:id', userController.updateUsers);
usersRouter.delete('/:id', userController.deleteUsers);

module.exports = usersRouter