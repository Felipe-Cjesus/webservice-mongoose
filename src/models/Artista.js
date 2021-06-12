const mongoose = require('../data')

let artistaSchema = new mongoose.Schema({
    nome: String,
    pais: String,
    inicioAtividade: Number,
    fimAtividade: Number    
}, {timestamps: true})

module.exports = mongoose.model('Artista', artistaSchema)
