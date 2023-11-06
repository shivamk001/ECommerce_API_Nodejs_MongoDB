const express=require('express')
const router=express.Router()
const {allProducts, createProduct, deleteProduct, updateProduct}=require('../controller/productsController')

//list all products
router.get('/', allProducts)

//create a product
router.post('/create', createProduct)

//delete a product
router.delete('/:id', deleteProduct)

//update a product
router.post('/:id/update_quantity', updateProduct)

module.exports=router