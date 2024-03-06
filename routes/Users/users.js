const express = require('express')
const { usersController } = require("../../controllers/index")
const router = express.Router()

router.post("/", usersController.createUser)
router.get("/", usersController.getUsers)

module.exports = {
    routerUsers: router
}