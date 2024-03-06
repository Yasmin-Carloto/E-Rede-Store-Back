const { usersService, authService } = require("../../services/index")
const jwt = require("jsonwebtoken")

const getUsers = async (req, res) => {
    try{
        const users = await usersService.getUsers()
        res.status(200).json(users)
    }catch(error){
        console.log(res)
        res.status(200).json({
            sucess: false,
            error: error.message
        })
    }
}

const createUser = async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    try{
        const user = await usersService.createUser(name, email, password)
        res.status(200).json({
            sucess: true,
            token: authService.createToken(user),
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            sucess: false,
            error: error.message
        })
    }
}

module.exports = {
    getUsers: getUsers,
    createUser, createUser,
}