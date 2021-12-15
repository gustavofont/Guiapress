const Sequelize = require("sequelize")
const connection = require("../database/database")

const Cathegory = connection.define('cathegory',{
    title:{
        type : Sequelize.STRING,
        allowNull: false
    },slug:{
        type : Sequelize.STRING,
        allowNull : false
    }
})


module.exports = Cathegory