const express = require("express")
const router = express.Router();
const Category = require("./cathegory")
const Slugify = require("slugify")

router.get("/cathegories",(req,res)=>{
    res.send("Rota cathegories")
})


router.get("/admin/cathegories/new",(req,res) => {
    res.render("admin/cathegories/new")
})

router.post("/admin/cathegories/save",(req,res)=>{
    var title = req.body.title;
    if(title != undefined){
        Category.create({
            title : title,
            slug : Slugify(title)
        }).then(()=>{
            res.redirect("/")
        })
    }else{
        res.redirect("/admin/cathegories/new")
    }
})


module.exports = router;