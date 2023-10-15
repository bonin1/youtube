const Sequelize = require('sequelize');
require('dotenv').config()


const db = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD,{
    host: process.env.DATABASE_HOST,
    dialect:"mysql",
    dialectModule: require('mysql2'),
    loggin: false
})

db.authenticate()
    .then(()=>console.log('connection is stable'))
    .catch(()=> console.log('connection failed'))

module.exports = db

