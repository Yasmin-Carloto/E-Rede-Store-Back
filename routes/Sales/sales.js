const express = require('express')
const { salesController, authController } = require("../../controllers/index")
const router = express.Router()

router.post("/", authController.authentication, salesController.placeOrder)
router.get("/", authController.authentication, salesController.getOrders)

module.exports = {
    routerSales: router
}