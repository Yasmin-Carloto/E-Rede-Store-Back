const { usersModel } = require("../../models/index")

const login = async (email, password) => {

    if(email && password){
        const user = await usersModel.getUserByEmail(email)

        if(user){

            if (user.password === password){

                return {
                    email: user.email,
                    name: user.name
                }

            }else{
                throw Error("Invalid password.")
            }
        }else{
            throw Error("Invalid user.")

        }
    }else{
        throw Error("Try to type email and password")
    }
}

module.exports = {
    login: login
}