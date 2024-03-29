const { loginService, authService } = require("../../services/index")

const login = async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    try{
        const user = await loginService.login(email, password)
        res.status(200).json({
            sucess: true,
            token: authService.createToken(user)
        })
       

    }catch(error){
        res.status(500).json({
            sucess: false,
            error: error.message
        })
    }
}

module.exports = {
    login: login
}