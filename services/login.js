const usersModel = require("../models/users")

const login = async (email, password) => {
    const user = await usersModel.getUserByEmail(email)
    if(user){
        if (user.password === password){
            return {
                id: user.id,
                email: user.email,
                name: user.name
            }
        }else{
            return {error: 'Invalid password.'}
        }
    }else{
        return {
            error: 'Invalid user.'
        }
    }
}

module.exports = {
    login: login
}