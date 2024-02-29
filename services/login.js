const usersModel = require("../models/users")

const login = async (email, password) => {

    if(email && password){
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
    }else{
        throw Error("Try to type email and password")
    }
}

module.exports = {
    login: login
}