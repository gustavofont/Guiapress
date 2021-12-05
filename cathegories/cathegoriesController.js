const express = require("express")
const router = express.Router();

router.get("/cathegories",(req,res)=>{
    res.send("Rota cathegories")
})


router.get("/cathegories/create",(req,res) => {
    res.send("rota de criação de categorias")
})

module.exports = router;