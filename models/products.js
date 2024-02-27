const pool = require("../databases/pgConnection")

const getProducts = async () => {
    const response = await pool.query('SELECT p.id, p.name, c.name AS name_category, p.description, p.price, p.stock FROM "Products" p JOIN "Category" c ON p."categoryId" = c.id;')
    return response.rows
}

const getProductsByCategory = async (category) => {
    const values = [category]
    const query = 'SELECT p.id, p.name, c.name AS name_category, p.description, p.price, p.stock FROM "Products" AS p JOIN "Category" AS c ON p."categoryId" = c.id WHERE  c.name = $1;'
    const response = await pool.query(query, values)
    return response.rows
}
 
module.exports = {
    getProducts: getProducts,
    getProductsByCategory: getProductsByCategory
}