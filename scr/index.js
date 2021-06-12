const express = require ('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 8080
const routes = require('./routes')

app.use('/api', routes)

app.get('/', (req, res) => {
    res.json("Aplicação de manipulação de album de musica. CRUD desenvolvido GET/ GETbyID / PUT / POST / DELETE. Endpoint:  /api/albuns")
})

app.listen(PORT, function(){
    console.log("Servidor iniciado na porta " + PORT)
})