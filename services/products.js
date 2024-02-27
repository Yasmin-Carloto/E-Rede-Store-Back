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

module.exports = {
    getProducts: getProducts,
    getProductsByCategory: getProductsByCategory,
}