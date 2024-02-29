const { salesModel, usersModel } = require("../../models/index")
const jwt = require("jsonwebtoken")

const placeOrder = async (date, products, token) => {
    const existingDate = await salesModel.getDateByValue(date)

    if(existingDate){
        await getInfoThroughJWT(existingDate.id, products, token)
    }else{
        await salesModel.setDate(date)
        const getDateId = await salesModel.getDate(date)

        await getInfoThroughJWT(getDateId.id, products, token)
    }
}

const getOrders = async () => {
    const orders = await salesModel.getSales()
    return orders
}

const getInfoThroughJWT = async (date, products, token) => {
    jwt.verify(token, process.env.SECRET_KEY, async (error, decoded) => {
        if(error){
            throw Error("Your token is invalid!")
        }else{
            const email = decoded.email
            const user = await usersModel.getUserByEmail(email)
            for(let product of products){
                await salesModel.setSale(user.id, product.id, date)
            }
        }
    })
}

module.exports = {
    placeOrder: placeOrder,
    getOrders: getOrders
}