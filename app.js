const cors = require("cors")
const express = require("express")


const {productsRouter, 
    usersRouter,
    loginRouter,
    salesRouter,
    categoriesRouter
} = require("./routes/index")

const app = express()
const PORT = 3666

app.use(express.json())
app.use(cors({
    origin: "*"
}))
app.use('/products', productsRouter.routerProducts)
app.use('/users', usersRouter.routerUsers)
app.use('/login', loginRouter.routerLogin)
app.use("/orders", salesRouter.routerSales)
app.use('/categories', categoriesRouter.routerCategories)
app.use('/media', express.static('./media'))

app.listen(PORT, '0.0.0.0')