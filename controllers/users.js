const usersService = require("../services/users")

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

const createUser = async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    try{
        await usersService.createUser(name, email, password)
        res.status(200).json({
            message: "User sign up susscesfully!"
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