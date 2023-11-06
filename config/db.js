const mongoose = require('mongoose');
let connectionString=process.env.MONGO_CONNECTION_STRING||'mongodb://127.0.0.1:27017/ecommerce_Api'
mongoose.connect(`${connectionString}`)
  .then(() => console.log('MongoDB Connected!'));