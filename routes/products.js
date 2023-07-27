const express=require('express')
const router=express.Router()
const {allProducts, createProduct, deleteProduct, updateProduct}=require('../controller/productsController')

router.get('/', allProducts)
router.post('/create', createProduct)
router.delete('/:id', deleteProduct)
router.post('/:id/update_quantity', updateProduct)

module.exports=router