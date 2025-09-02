const { Router } = require('express')
const moviesController = require('../controllers/movies')

moviesRouter = Router()

//routes
moviesRouter.get('/', moviesController.index)

module.exports = moviesRouter