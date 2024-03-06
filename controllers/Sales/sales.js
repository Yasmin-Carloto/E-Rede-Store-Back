const { salesService } = require("../../services/index")

const placeOrder = async (req, res) => {
    try{
        const products = req.body.orders

        const [currentDate, time] = (new Date()).toISOString().split('T')

        const token = req.headers.authorization

        await salesService.placeOrder(currentDate, products, token)
        res.status(200).json({
            sucess: true
        })
        
    }catch(error){
        res.status(500).json({
            sucess: false,
            error: error.message
        })
    }
}

const getOrders = async (req, res) => {
    try{
        const token = req.headers.authorization
        const orders = await salesService.getOrders(token)
        res.status(200).json(orders)
    }catch(error){
        res.status(500).json({
            sucess: false,
            error: error.message
        })
    }
}

module.exports = {
    placeOrder: placeOrder,
    getOrders: getOrders
}