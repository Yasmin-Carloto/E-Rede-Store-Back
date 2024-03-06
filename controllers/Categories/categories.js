const { categoriesService } = require("../../services");

const getCategories = async (req, res) => {
    try{
        const categories = await categoriesService.getCategories()
        res.status(200).json({
            success: true,
            result: categories
        })
    }catch(error){
        res.status(500).json({
            success: false,
            result: error.message
        })
    }
}


module.exports = {
    getCategories
}