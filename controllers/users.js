const usersService = require("../services/users")
const jwt = require("jsonwebtoken")

const getUsers = async (req, res) => {
    try{
        const users = await usersService.getUsers()
        res.status(200).json(users)
    }catch(error){
        console.log(res)
        res.status(200).json({
            message: "Something wrong happend",
            error: error.message
        })
    }
}

// CREATE NEW USER -> SIGN UP
const createUser = async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const secret_key = process.env.SECRET_KEY

    try{
        const user = await usersService.createUser(name, email, password)
        res.status(200).json({
            message: "User sign up susscesfully!",
            token: jwt.sign(user, secret_key)
        })
    }catch(error){
        res.status(500).json({
            message: "Something wrong happend",
            error: error.message
        })
    }
}

module.exports = {
    getUsers: getUsers,
    createUser, createUser,
}