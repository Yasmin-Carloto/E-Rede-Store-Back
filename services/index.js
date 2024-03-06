const categoriesService = require('./Categories/categories')
const productsService = require("./Products/products")
const salesService = require("./Sales/sales")
const usersService = require("./Users/users")
const loginService = require("./Login/login")
const authService = require("./Auth/auth")

module.exports = {
    productsService,
    salesService,
    usersService,
    loginService, 
    authService,
    categoriesService
}