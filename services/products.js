const productsModel = require("../models/products")

const getProducts = async () => {
    const products = await productsModel.getProducts()
    return products
}

const getProductsByCategory = async (category) => { 
    const categoryAsNumber = Number(category)
    if(!isNaN(categoryAsNumber)){
        throw Error("The query category should not receive a number")
    }else{
        const products = await productsModel.getProductsByCategory(category)
        return products        
    }
}

const getUpdatedProductsById = async (orders) => {
    const productsIndexes = orders.map(productsOrders => productsOrders.indexProduct)
    const productsQuantityOrder = orders.map(productsOrders => productsOrders.productQuantity)
    const products = await productsModel.getProductsById(productsIndexes)

    const validIds = validIntegers(productsIndexes)
    const validQuantities = validIntegers(productsQuantityOrder)

    if(validIds){
        if(validQuantities){
            if(products.length === orders.length){

                for(let i = 0; i<products.length; i++){
                    for(let order of orders) {
                        if(products[i].id === order.indexProduct){
                            if(products[i].stock >= order.productQuantity){
                                const stock = products[i].stock
                                const newStock = stock - order.productQuantity
                                await productsModel.updateQuantityInProduct(products[i].id, newStock)
                            }else{
                                throw Error(`There is no enough stock for the ${products[i].name}. Try to buy again later.`)
                            }
                        }
                    }
                }

                const newProducts = await productsModel.getProductsById(productsIndexes)
                return newProducts

            }else{
                throw Error("One of the ids does not exist.")
            }
        }else{
            throw Error("One of these quantities is not an Integer.")
        }

    }else{
        throw Error("One of these Ids is not an Integer.")
    }
}

const validIntegers = (array) => {
    const isValid = array.every((element) => {
        return Number.isInteger(element)
    })

    return isValid
}

module.exports = {
    getProducts: getProducts,
    getProductsByCategory: getProductsByCategory,
    getUpdatedProductsById: getUpdatedProductsById,
}