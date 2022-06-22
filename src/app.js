

const express = require('express')
const cors = require('cors')
const mongoose = require ('./dataBase/mongooseConnect')
const coachRoutes = require ('./routes/coachRoutes')
const pokedexRoutes = require ('./routes/pokedexRouter')

const app = express()

// 1. body parser
// 2. deixar api publication
// 3. conectar o banco

app.use(express.json())
app.use(cors())
db.connect()

mongoose.connect()

app.use(coachRoutes)

module.exports = app

