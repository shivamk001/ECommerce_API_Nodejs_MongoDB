const express=require('express')
const router=express.Router()
const homeController=require('../controller/homeController')

//route to home page
router.get('/', homeController.home)


//route to products creation, deletion, updation, get all products
router.use('/products', require('./products'))

module.exports=router