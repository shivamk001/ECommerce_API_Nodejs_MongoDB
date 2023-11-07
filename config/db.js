const mongoose = require('mongoose');
let connectionString=process.env.MONGO_CONNECTION_STRING||'mongodb://127.0.0.1:27017/ecommerce_Api'
mongoose.connect(`${connectionString}`).catch(error => console.error(error));

const db=mongoose.connection;
db.on('error', function(){console.error('Error connecting to db')});

db.once('open', function(){
    console.log('Successfully connected to db!');
})