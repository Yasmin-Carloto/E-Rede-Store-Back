const express = require('express')
const { productsController } = require("../../controllers/index")
const router = express.Router()

router.get("/", productsController.getProducts)
router.get("/categories", productsController.getProductsByCategory)

module.exports = {
    routerProducts: router
}