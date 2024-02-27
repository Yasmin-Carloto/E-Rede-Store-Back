const usersModel = require("../models/users")

const getUsers = async () => {
    const users = usersModel.getUsers()
    return users
}

const createUser = async (name, email, password) => {
    if(existingEmail(email)){
        if(validateEmail(email)){
            if(validatePassword(password)){
                await usersModel.createUser(name, email, password)
            }else{
                throw Error("This password does not follow these protocols: at leaste onde uppercase letter, at least one number and, at leaste, 8 digits.")
            }
        }else{
            throw Error("This is not an email.")
        }
    }else{
        throw Error("This email is already sign up.")
    }
}

const existingEmail = async (email) => {
    const users = await getUsers()
    let userEmailExist = false
    for(let i = 0; i<users.lenght; i++){
        if(users[i].email === email){
            userEmailExist = true
        }
    }
    return userEmailExist
}

const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    return regex.test(email)
}

const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
}

module.exports = {
    getUsers: getUsers,
    createUser: createUser,
}