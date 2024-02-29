const jwt = require('jsonwebtoken')

const authentication = (req, res, next) => {
    const secret_key = process.env.SECRET_KEY
    if (!req.headers.authorization){
        res.status(404).json({message: 'Authentication failed'})
    }
    else if (jwt.verify(req.headers.authorization, secret_key)){
        next()
    }
    else{
        res.status(404).json({message: 'Authentication failed'})
    }
}

module.exports = {
    authentication: authentication
}