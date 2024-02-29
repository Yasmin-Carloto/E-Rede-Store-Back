const express = require('express')
const salesController = require("../controllers/sales")
const router = express.Router()
const authentication = require("../controllers/auth")

router.post("/", authentication, salesController.placeOrder)
router.get("/", authentication, salesController.getOrders)

module.exports = router