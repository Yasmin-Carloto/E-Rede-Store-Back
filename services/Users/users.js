const { usersModel } = require("../../models/index")
const {validateEmail, validatePassword} = require("./validations/fieldsValidation")

const getUsers = async () => {
    const users = usersModel.getUsers()
    return users
}

const createUser = async (name, email, password) => {
    const userExists = await usersModel.getUserByEmail(email)
    if(userExists === undefined){
        if(validateEmail(email)){
            if(validatePassword(password)){
                const user = await usersModel.createUser(name, email, password)
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

module.exports = {
    getUsers: getUsers,
    createUser: createUser,
}