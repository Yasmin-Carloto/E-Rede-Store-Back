const { categoriesModel } = require("../../models");

const getCategories = async () => {
    return await categoriesModel.getCategories()
}

module.exports = {
    getCategories
}