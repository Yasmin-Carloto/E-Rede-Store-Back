const {authService} = require("../../services/index")
const jwt = require('jsonwebtoken')

const authentication = async (req, res, next) => {
    try{
        const token = await authService.verifyToken(req.headers.authorization)
        next()
    }catch(error){
        res.status(404).json({message: 'Authentication failed'})
    }
}

module.exports = {
    authentication: authentication
}