const jwt = require("jsonwebtoken")
const secret_key = process.env.SECRET_KEY

const createToken = (user) => {
    const token = jwt.sign(user, secret_key)
    return token
}

const verifyToken = (token) => {
    if(!token){
        throw Error("Authentication failed.")
    }else if(token){
        return jwt.verify(token, secret_key)
    }else{
        throw Error("Authentication failed.")
    }
} 

module.exports = {
    createToken: createToken,
    verifyToken: verifyToken
}