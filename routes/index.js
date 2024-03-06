const productsRouter = require("./Products/products")
const salesRouter = require("./Sales/sales")
const usersRouter = require("./Users/users")
const loginRouter = require("./Login/login")
const categoriesRouter = require("./Categories/categories")


module.exports = {
    productsRouter,
    salesRouter, 
    usersRouter,
    loginRouter,
    categoriesRouter
}