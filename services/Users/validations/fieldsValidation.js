const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    return regex.test(email)
}

const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,15}$/
    return regex.test(password)
}

module.exports = {
    validateEmail: validateEmail,
    validatePassword: validatePassword
}