const { salesModel, usersModel } = require("../../models/index")
const productsService = require('../Products/products')
const authService = require("../Auth/auth")
const jwt = require("jsonwebtoken")

const placeOrder = async (date, products, token) => { 
    const uniqueProducts = joinRepeatedProducts(products)
    
    const updatedProducts = await productsService.getUpdatedProductsById(uniqueProducts)
    const existingDate = await salesModel.getDateByValue(date)

    if(existingDate){
        await getInfoThroughJWT(existingDate.id, updatedProducts, token)
    }else{
        await salesModel.setDate(date)
        const getDateId = await salesModel.getDate(date)

        await getInfoThroughJWT(getDateId.id, updatedProducts, token)
    }
}

const getOrders = async (token) => {
    const getPayloadToken = await authService.verifyToken(token)
    const user = await usersModel.getUserByEmail(getPayloadToken.email)
    if(user){
        const orders = await salesModel.getSales(user.id)
        return orders
    }else{
        throw Error("Token invalid.")
    }
}

const getInfoThroughJWT = async (date, products, token) => {
    jwt.verify(token, process.env.SECRET_KEY, async (error, decoded) => {
        if(error){
            throw Error("Your token is invalid!")
        }else{
            email = decoded.email
            const user = await usersModel.getUserByEmail(email)
            for(let product of products){
                
                await salesModel.setSale(user.id, product.id, product.amount, date)
            }
        }
    })
}

const joinRepeatedProducts = (products) => {
    return products.reduce((accumulator, currentValue) => {
        let productsList = [...accumulator]
      
        let index = productsList.findIndex(value =>       
        value.indexProduct===currentValue.indexProduct)
        if (index !== -1){
          productsList[index].productQuantity += currentValue.productQuantity
        } else {
          productsList.push(currentValue)
  
        }
      return productsList
    }, [])

}

module.exports = {
    placeOrder: placeOrder,
    getOrders: getOrders
}