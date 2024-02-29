const { usersModel } = require("../../models/index")

const getUsers = async () => {
    const users = usersModel.getUsers()
    return users
}

const createUser = async (name, email, password) => {
    const userExists = usersModel.getUserByEmail(email)

    if(userExists){
        if(validateEmail(email)){
            if(validatePassword(password)){
                await usersModel.createUser(name, email, password)
                return {
                    name: name,
                    email: email
                }
            }else{
                throw Error("This password does not follow these protocols: at leaste one uppercase letter, at least one number and, at leaste, 8 digits and maximum 15 digits.")
            }
        }else{
            throw Error("This is not an email.")
        }
    }else{
        throw Error("This email is already sign up.")
    }
}

const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    return regex.test(email)
}

const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,15}$/
    return regex.test(password)
}

module.exports = {
    getUsers: getUsers,
    createUser: createUser,
}