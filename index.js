const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require('./database/database')

//importing routers
const cathegoriesController = require("./cathegories/cathegoriesController")
const articlesController = require("./articles/articlesController")

//view engine 
app.set('view engine', 'ejs')

// body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//static
app.use(express.static('public'))

//database 
connection
    .authenticate()
    .then(()=> {
        console.log("conexão realizada com sucesso");
    }).catch((error) => {
        console.log(error);
    })

app.use("/",cathegoriesController)
app.use("/",articlesController)

app.get("/",(req,res) => {
    res.render('index');
})

app.listen(8000, () => {
    console.log("Funcionando....!")
})