const pool = require("../../databases/pgConnection")
const format = require('pg-format')

// GET PRODUCTS BY ID
const getProducts = async () => {
    const response = await pool.query('SELECT p.id, p.name, c.name AS name_category, c.id as category_id, p.description, p.price, p.stock, p.image FROM "products" p LEFT OUTER JOIN "categories" c ON p."category_id" = c.id;')
    return response.rows
}

const getProductsByCategory = async (category) => {
    const values = [category]
    const query = 'SELECT p.id, p.name, p.image, c.name AS name_category, p.description, p.price, p.stock FROM "products" AS p JOIN "categories" AS c ON p."category_id" = c.id WHERE  c.name = $1;'
    const response = await pool.query(query, values)
    return response.rows
}

const getProductsById = async (ids) => {
    const query = format('SELECT p.id, p.name, c.name AS name_category, p.description, p.price, p.stock FROM "products" p JOIN "categories" c ON p."category_id" = c.id WHERE p.id IN (%L);', ids)
    const response = await pool.query(query)
    return response.rows
}

const updateQuantityInProduct = async (id, quantity) => {
    const values = [quantity, id]
    const query = 'UPDATE "products" SET stock = $1 WHERE id = $2;'
    await pool.query(query, values)
}
 
module.exports = {
    getProducts: getProducts,
    getProductsByCategory: getProductsByCategory,
    getProductsById: getProductsById,
    updateQuantityInProduct: updateQuantityInProduct
}