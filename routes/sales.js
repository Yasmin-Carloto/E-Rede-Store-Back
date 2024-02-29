const express = require('express')
const salesController = require("../controllers/sales")
const router = express.Router()
const authentication = require("../controllers/auth")

router.post("/placeOrder", salesController.placeOrder)
router.get("/", salesController.getOrders)

module.exports = router