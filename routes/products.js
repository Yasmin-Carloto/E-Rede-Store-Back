const express = require('express')
const productsController = require("../controllers/products")
const router = express.Router()
const authentication = require("../controllers/auth")

router.get("/", authentication, productsController.getProducts)
router.get("/categories", authentication, productsController.getProductsByCategory)
module.exports = router