const express = require("express")

const productsRouter = require("./routes/products")
const usersRouter = require("./routes/users")
const loginRouter = require("./routes/login")

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/products', productsRouter)
app.use('/users', usersRouter)
app.use('/login', loginRouter)

app.listen(PORT, '0.0.0.0')