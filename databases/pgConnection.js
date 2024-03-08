const { Pool } = require("pg")
 
const pool = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USERDEFAULT,
  port: process.env.PG_PORT,
  database: process.env.PG_DB,
  password: process.env.PG_PASSWD,
  ssl: {
    require: true,
    rejectUnauthorized: false
  }
})

module.exports = pool