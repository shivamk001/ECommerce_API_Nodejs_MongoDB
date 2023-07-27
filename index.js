const express=require('express')
const bodyParser = require('body-parser');
require('./config/db')


const app=express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', require('./routes'))

app.listen(8800, (err)=>{
    console.log('Server is up and running on port 8800')
})