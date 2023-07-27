const mongoose = require('mongoose');

const productSchemea=mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    }
},{
    timestamps: true
})

const Product=mongoose.model('Product', productSchemea)

module.exports=Product