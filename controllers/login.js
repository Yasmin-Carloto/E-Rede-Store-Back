const loginService = require("../services/login")
const jwt = require("jsonwebtoken")

const login = async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const secret_key = process.env.SECRET_KEY

    try{
        const user = await loginService.login(email, password)
        if (user.error){
            res.status(500).json({
                message: "Something wrong happend",
                error: user.error
        })
        }else{
            res.status(200).json({token: jwt.sign(user, secret_key)})
        }

    }catch(error){
        res.status(500).json({
            message: "Something wrong happend",
            error: error.message
        })
    }
}

module.exports = {
    login: login
}