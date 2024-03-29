const { productsService } = require("../../services/index")

const getProducts = async (req, res) => {
    try{
        const products = await productsService.getProducts()
        res.status(200).json(products)
    }catch(error){
        console.log(error);
        res.status(500).json({
            sucess: false,
            error: error.message
        })
    }
}

const getProductsByCategory = async (req, res) => {
    try{
        const category = req.query.q
        const products = await productsService.getProductsByCategory(category)
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({
            sucess: false,
            error: error.message
        })
    }
}

module.exports = {
    getProducts: getProducts,
    getProductsByCategory: getProductsByCategory,
}