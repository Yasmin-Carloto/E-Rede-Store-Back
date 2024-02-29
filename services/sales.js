const salesModel = require("../models/sales")
const usersModel = require("../models/users")
const jwt = require("jsonwebtoken")

// Fazer checagem de data já cadatrada
const placeOrder = async (date, products, token) => {
    await salesModel.setDate(date)
    const getDateId = await salesModel.getDate(date)
    jwt.verify(token, process.env.SECRET_KEY, async (error, decoded) => {
        if(error){
            throw Error("Your token is invalid!")
        }else{
            const email = decoded.email
            const user = await usersModel.getUserByEmail(email)
            for(let product of products){
                await salesModel.setSale(user.id, product.id, getDateId.id)
            }
        }
    })
}

const getOrders = async () => {
    const orders = await salesModel.getSales()
    return orders
}

module.exports = {
    placeOrder: placeOrder,
    getOrders: getOrders
}