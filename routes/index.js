const productsRouter = require("./Products/products")
const salesRouter = require("./Sales/sales")
const usersRouter = require("./Users/users")
const loginRouter = require("./Login/login")

module.exports = {
    productsRouter,
    salesRouter, 
    usersRouter,
    loginRouter
}