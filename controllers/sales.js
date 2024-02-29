const salesService = require("../services/sales")
const productsService = require("../services/products")

const placeOrder = async (req, res) => {
    try{
        const products = await productsService.getUpdatedProductsById(req.body.orders)

        const today = new Date()
        const year = today.getFullYear()
        const month = today.getMonth() + 1
        const day = today.getDate()

        const currentDate = new Date(year, month - 1, day)

        const token = req.headers.authorization

        await salesService.placeOrder(currentDate, products, token)
        res.status(200).json({
            message: "Order placed susscesfully!"
        })
        
    }catch(error){
        res.status(500).json({
            message: "Something wrong happend",
            error: error.message
        })
    }
}

const getOrders = async (req, res) => {
    try{
        const orders = await salesService.getOrders()
        res.status(200).json(orders)
    }catch(error){
        res.status(500).json({
            message: "Something wrong happend",
            error: error.message
        })
    }
}

module.exports = {
    placeOrder: placeOrder,
    getOrders: getOrders
}