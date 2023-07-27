const Product=require('../models/product')

module.exports.createProduct=async (req, res)=>{
    try{
        let name=req.body.name;
        let quantity=req.body.quantity;

        let newProduct=await Product.create({
            name: name,
            quantity: quantity
        })

        return res.status(200).json({
            message: 'Product created successfully',
            data:{
                product:{
                    name: newProduct.name,
                    quantity: newProduct.quantity
                }
            }
        })
    }
    catch(err){
        console.log('Error:', err)
        return res.status(401).json({
            message: 'Product creation failed'
        })
    }
}

module.exports.deleteProduct=async (req, res)=>{
    try{

        let id=req.params.id

        //check if product exists
        let product=await Product.findById({
            _id: id
        })

        if(product){
            product=await Product.findByIdAndDelete(id)
            return res.status(200).json({
                data:{
                    message: 'Product deleted'
                }
            })
        }
        else{
            return res.status(200).json({
                message: 'Product does not exist'
            })
        }

    }
    catch(err){
        console.log('Error:', err)
        return res.status(401).json({
            message: 'Product deletion failed'
        })
    }
}

module.exports.allProducts=async (req, res)=>{
    try{


        let allProducts=await Product.find({})
        let arr=[]
        allProducts.forEach(product => {
            arr.push({
                id: product.id,
                name: product.name,
                quantity: product.quantity
            })
        });
        return res.status(200).json({
            message: 'All Products',
            data:{
                products: arr
            }
        })
    }
    catch(err){
        console.log('Error:', err)
        return res.status(401).json({
            message: 'Products listing failed'
        })
    }
}


module.exports.updateProduct=async (req, res)=>{
    try{
        let id=req.params.id
        let quantity=req.query.number
        //check if product exists
        let product=await Product.findById({_id: id})
        
        if(product){
            product=await Product.findByIdAndUpdate(id, {quantity: quantity})
            product=await Product.findById({
                _id: id
            })
            return res.status(200).json({
                message: 'updated successfully',
                data:{
                    product:{
                        id: product.id,
                        name: product.name,
                        quantity: product.quantity
                    }
                }
            })
        }
        else{
            return res.status(200).json({
                message: 'Product does not exist'
            })
        }
    }
    catch(err){
        console.log('Error:', err)
        return res.status(401).json({
            message: 'Product updation failed'
        })
    }
}
