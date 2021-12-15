const express = require('express')
const { REPL_MODE_SLOPPY } = require('repl')
const router = express.Router()

router.get('/articles',(req,res)=>{
    res.send("Rota de atigos")
})

router.get('/articles/create',(req,res)=>{
    res.send("rota de criação de artigos")
})

module.exports = router