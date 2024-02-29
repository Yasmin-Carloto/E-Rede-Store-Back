const { loginService, authService } = require("../../services/index")

const login = async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    try{
        const user = await loginService.login(email, password)
        res.status(200).json({
            message: "You are now logged in",
            token: authService.createToken(user)
        })
       

    }catch(error){
        res.status(500).json({
            message: "Something wrong happend",
            error: error.message
        })
    }
}

// authService: create token com jwt.sign(user, secret_key)

module.exports = {
    login: login
}