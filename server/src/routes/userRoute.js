const express = require('express')

const routes = express.Router()

const UserController = require('../controllers/userController')

routes.get('/', UserController.readAll)
routes.get('/:id', UserController.readOne)
routes.post('/', UserController.create)
routes.put('/:id', UserController.update)
routes.delete('/:id', UserController.delete)

module.exports = routes