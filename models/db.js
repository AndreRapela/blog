const Sequelize = require('sequelize')

//Conexão com banco de dados MySql
const sequelize = new Sequelize('test','root','123456',{
    host:"localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}