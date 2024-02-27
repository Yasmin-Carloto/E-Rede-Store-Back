const pool = require("../databases/pgConnection")

const getUsers = async () => {
    const response = await pool.query('SELECT * from "Users";')
    return response.rows
}

const createUser =  async(name, email, password) => {
    const values = [name, email, password]
    const query = 'INSERT INTO "Users" (name, email, password) VALUES ($1, $2, $3);'
    await pool.query(query, values)
}

const getUserByEmail = async (email) => {
    const values = [email]
    const query = 'SELECT * FROM "Users" WHERE "email" = $1'
    const response = await pool.query(query, values)
    return response.rows[0]
}

module.exports = {
    getUsers: getUsers,
    createUser: createUser,
    getUserByEmail: getUserByEmail,
}