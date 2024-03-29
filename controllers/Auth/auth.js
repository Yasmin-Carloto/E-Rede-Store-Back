const {authService} = require("../../services/index")

const authentication = async (req, res, next) => {
    try{
        const token = await authService.verifyToken(req.headers.authorization)
        next()
    }catch(error){
        res.status(404).json({
            sucess: false,
            error: error.message
        })
    }
}

module.exports = {
    authentication: authentication
}