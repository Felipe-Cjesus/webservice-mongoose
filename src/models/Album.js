const mongoose = require('../data')
const Artista = require('../models/Artista')

let albumSchema = new mongoose.Schema({
    nome: String,
    artista: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Artista'
    },
    ano: Number,
    generos: Array,
    faixas: Array,
    lancamento: Number
}, {timestamps: true})

const Album = mongoose.model('Album', albumSchema)
 
module.exports = Album