const express = require('express')
const router = express.Router()
const Album = require('../models/Album')

//Middleware que converte o body em objeto
router.use(express.json())

router.get('/albuns', async (req, res) => {
    try{
        let albuns = []
        albuns = await Album.find().populate('artista')
        res.json(albuns)
    }catch(err) {
        console.error(err.message)
        res.status(500).json({error: "Erro ao pesquisar albuns"})
    }
})

router.get('/albuns/:id', async (req, res) => {
    
    try{
        const id = req.params.id
        let album = await Album.findById(id).populate('artista')
        res.json(album)
    } catch(err) {
        console.error(err.message)
        res.status(500).json({error: "Erro ao pesquisar album"})
    }
})

router.post('/albuns', async (req, res) => {
    try{
        const album = new Album (req.body)
        const resultado = await album.save()
        res.json(resultado)
    }catch(err){
        console.error(err.message)
        res.status(500).json({error: "Erro ao salvar album"})
    }    
})

router.put('/albuns/:id', async (req, res) => {
    try{
        const id = req.params.id
        const alBody = req.body
        const resultado = await Album.findByIdAndUpdate(id, alBody)
        res.json(resultado)
    }catch(err){
        console.log(err.message)
        res.status(500).json({error: "Erro ao atualizar o album"})
    }   
})

router.delete('/albuns/:id', async (req, res) => {
    try{
        const id = req.params.id
        const resultado = await Album.findByIdAndDelete(id)
        res.json(resultado)
    }catch(err){
        console.log(err.message)
        res.status(500).json({error: "Erro ao deletar o album"})
    }
})

module.exports = router