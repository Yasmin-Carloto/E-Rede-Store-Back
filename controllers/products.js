const productsService = require("../services/products")

const getProducts = async (req, res) => {
    try{
        const products = await productsService.getProducts()
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({
            message: "Something wrong happend",
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
            message: "Something wrong happend",
            error: error.message
        })
    }
}

// const getUpdatedProductsById = async (req, res) => {
//     try{
//         const {orders} = req.body
//         const products = await productsService.getUpdatedProductsById(orders)
//         res.status(200).json(products)
//     }catch(error){
//         res.status(500).json({
//             message: "Something wrong happend",
//             error: error.message,
//         })
//     }
// }

module.exports = {
    getProducts: getProducts,
    getProductsByCategory: getProductsByCategory,
}