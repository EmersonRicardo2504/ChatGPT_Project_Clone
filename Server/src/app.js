// realizando importação dos modulos cors e express
const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')

// arquivo de configuração
require("dotenv").config()

const app = express()

// passando formato de texto
app.use(express.json())
app.use(cors())
app.use(routes)

// exportando como modulo 
module.exports = app

