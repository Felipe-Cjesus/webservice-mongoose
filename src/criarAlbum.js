const Album = require('./models/Album')

const alb = new Album({
    nome: "Album 55",
    artista: "Artista 01",
    ano: 2000,
    generos: ["Sertanejo", "Sertanejo Universitario"],
    faixas: ["Faixa 1", "Faixa 2", "Faixa 3", "Faixa 4"],
    lancamento: 2000
})

alb.save().then(function(){
    console.log("Album Salvo")
})
