const Sequelize = require("sequelize")
const connection = require("../database/database")
const Cathegory = require("../cathegories/cathegory")

const Article = connection.define('article',{
    title : {
        type : Sequelize.STRING,
        allowNull : false
    },slug:{
        type: Sequelize.STRING,
        allowNull: false 
    },body:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})
Article.belongsTo(Cathegory)

module.exports = Article