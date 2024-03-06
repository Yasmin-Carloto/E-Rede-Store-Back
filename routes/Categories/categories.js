const { categoriesController } = require("../../controllers");
const express = require("express")
const router = express.Router()

router.get("/", categoriesController.getCategories)

module.exports = {
    routerCategories: router
}