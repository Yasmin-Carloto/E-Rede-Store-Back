const pool = require("../../databases/pgConnection")



const getCategories = async () => {
    const query = 'SELECT * FROM "categories";'
    const categories = await pool.query(query)
    return categories.rows
}

module.exports = {
    getCategories
}