const express = require('express')

const routes = express.Router()

const seatController = require('../controllers/seatController')

routes.get('/:id', seatController.readUserSeats)
routes.post('/', seatController.create)

module.exports = routes