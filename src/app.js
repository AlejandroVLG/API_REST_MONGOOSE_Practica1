const express = require('express')
const cors = require('cors')
const app = express()

//configuraciones

app.set('port', process.env.PORT || 4000)

//middlewares

app.use(cors())
app.use(express.json())

//routes

app.get('/', (req, res) => {
    res.send('Bienvenido a mi API REST')
});

//ruta para la coleccion de datos

app.use('/api/cafe', require('./routes/cafes'))
app.use('/api/videos', require('./routes/videos'))

module.exports = app