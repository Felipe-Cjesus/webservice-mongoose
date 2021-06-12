/*
const Album = require('./models/Album')

const alb = new Album({
    nome: "Album 2",
    artista: "Gustavo Lima",
    ano: 2000,
    generos: ["Sertanejo", "Sertanejo Universitario"],
    faixas: ["Faixa 1", "Faixa 2", "Faixa 3", "Faixa 4"],
    lancamento: 2000
})

alb.save().then(function(){
    console.log("Salvo")
})
*/

//Utilizando o Schema para criar o relacionamento de Artista com Album
const Artista = require('./models/Artista')

const a = new Artista({
    nome: "Artista 03",
    pais: "Portugal"

})

a.save().then(function(){
    console.log("Salvo")
})