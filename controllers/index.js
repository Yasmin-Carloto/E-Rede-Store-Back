const productsController = require("./Products/products")
const salesController = require("./Sales/sales")
const usersController = require("./Users/users")
const loginController = require("./Login/login")
const authController = require("./Auth/auth")
const categoriesController = require("./Categories/categories")

module.exports = {
    productsController,
    salesController,
    usersController,
    loginController,
    authController,
    categoriesController
}