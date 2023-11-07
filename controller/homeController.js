module.exports.home=(req, res)=>{
    try{
        return res.status(200).json({
            message: 'Welcome to the Ecommerce API'
        })
    }
    catch(err){
        return res.status(500).json(err);
    }
}