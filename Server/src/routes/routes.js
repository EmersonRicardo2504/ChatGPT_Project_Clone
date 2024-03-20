// relizando importações e definindo arquivos pra leitura

const express = require('express')
const promptController = require('../controllers/prompt-controller')
const routes = express.Router()

routes.post('/api/prompt', promptController.sendText)

module.exports = routes