const { productsModel } = require("../../models/index")
const { validIntegers } = require("./validations/validNumbers")

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

                                throw Error(`There is no enough stock for the ${products[i].name} in index ${products[i].id}. Try to buy again later.`)
                                
                            }
                        }

                    }

                }

                let newProducts = await productsModel.getProductsById(productsIndexes)
                newProducts = newProducts.map(product => {
                    const amount = orders.find(order => product.id === order.indexProduct).productQuantity
                    product.amount = amount
                    return product
                })
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

module.exports = {
    getProducts: getProducts,
    getProductsByCategory: getProductsByCategory,
    getUpdatedProductsById: getUpdatedProductsById,
}