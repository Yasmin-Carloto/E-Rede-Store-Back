const format = require("pg-format")
const pool = require("../../databases/pgConnection")

const setDate = async (date) => {
    const values = [date]
    const query = 'INSERT INTO "sales" (date) VALUES ($1);'
    await pool.query(query, values)
}

const getDate = async (date) => {
    const values = [date]
    const query = 'SELECT * FROM "sales" WHERE date = $1;'
    const response = await pool.query(query, values)
    return response.rows[0]
}

const getDateByValue = async (date) => {
    const values = [date]
    const query = 'SELECT * FROM "sales" WHERE date = $1;'
    const response = await pool.query(query, values)
    return response.rows[0]
}

const setSale = async (userId, productId, amount, dateId) => {
    const values = [userId, productId, amount, dateId]
    const query = 'INSERT INTO "items_sales" (user_id, product_id, amount, sale_id) VALUES ($1, $2, $3, $4);'
    await pool.query(query, values)
}

const getSales = async (id) => {
    const values = [id]
    const query = 'SELECT "items_sales".id, "items_sales".product_id, "items_sales".amount, "items_sales".sale_id, "items_sales".user_id AS "user_id", "users".email AS "user_email", "users".name AS "user_name", "products".image AS "product_image","products".name AS "product_name", "products"."category_id" AS "product_category", "products".price AS "product_price", "categories".name AS "product_category_name", "sales".date as "sale_date" FROM "items_sales" LEFT OUTER JOIN  "users" on "items_sales".user_id = "users".id LEFT OUTER JOIN "sales" on "items_sales".sale_id = "sales".id LEFT OUTER JOIN "products" on "items_sales".product_id = "products".id LEFT JOIN  "categories" on "products"."category_id" = "categories".id WHERE "items_sales".user_id = $1;'
    const response = await pool.query(query, values)
    return response.rows
}

module.exports = {
    setDate: setDate,
    setSale: setSale,
    getDate: getDate,
    getSales: getSales,
    getDateByValue: getDateByValue
}