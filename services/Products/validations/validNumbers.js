const validIntegers = (array) => {
    const isValid = array.every((element) => {
        return Number.isInteger(element)
    })

    return isValid
}

module.exports = {
    validIntegers: validIntegers
}