const express = require('express')
const app = express()
require('dotenv').config()
app.set('view engine','ejs')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/static',express.static('static'))
app.set('view engine','ejs')


let home = require('./routes/home')
app.use('/',home)


app.listen(process.env.PORT,()=>{
    console.log('u start serveri')
})