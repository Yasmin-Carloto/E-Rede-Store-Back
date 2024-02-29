const format = require("pg-format")
const pool = require("../databases/pgConnection")

const setDate = async (date) => {
    const values = [date]
    const query = 'INSERT INTO "Sales" (date) VALUES ($1);'
    await pool.query(query, values)
}

const getDate = async (date) => {
    const values = [date]
    const query = 'SELECT * FROM "Sales" WHERE date = $1;'
    const response = await pool.query(query, values)
    return response.rows[0]
}

const setSale = async (userId, productId, dateId) => {
    const values = [userId, productId, dateId]
    const query = 'INSERT INTO "Items_Sales" (user_id, product_id, sale_id) VALUES ($1, $2, $3);'
    await pool.query(query, values)
}

const getSales = async () => {
    const response = await pool.query('SELECT * FROM "Items_Sales"')
    return response.rows
}

module.exports = {
    setDate: setDate,
    setSale: setSale,
    getDate: getDate,
    getSales: getSales
}