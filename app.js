const express = require("express")

const {productsRouter, 
    usersRouter,
    loginRouter,
    salesRouter} = require("./routes/index")

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/products', productsRouter.routerProducts)
app.use('/users', usersRouter.routerUsers)
app.use('/login', loginRouter.routerLogin)
app.use("/orders", salesRouter.routerSales)


app.listen(PORT, '0.0.0.0')