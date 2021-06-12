
//Utilizando o Schema para criar o relacionamento de Artista com Album
const Artista = require('./models/Artista')

const a = new Artista({
    nome: "Felipe Costa",
    pais: "Brasil",
    inicioAtividade: 0,
    fimAtividade: 1
})

a.save().then(function(){
    console.log("Artista Salvo")
})