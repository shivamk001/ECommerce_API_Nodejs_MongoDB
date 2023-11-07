const express=require('express')
const bodyParser = require('body-parser');


//node_env=PRODUCTION use the environment variable file
if (process.env.NODE_ENV == 'production') {
    require('dotenv').config();
}

require('./config/db')


const app=express()

//to parse incoming requests with url-encoded payloads
app.use(bodyParser.urlencoded())
//to read the “body” of an incoming JSON object
app.use(bodyParser.json())

//to routes middleware
app.use('/', require('./routes'))

app.use((err, req, res, next)=>{
    console.log(err)
    return res.status(404).json("message:", err)
})

//setting port according to the environment
let PORT=process.env.PORT||8765
app.listen(PORT, (err)=>{
    console.log('Server is up and running on port:', PORT)
})