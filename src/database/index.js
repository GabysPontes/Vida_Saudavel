const mysql = require('mysql2')
require("dotenv/config")

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

async function connection() {
    await pool.connect((err) => {
        if(err) {
            throw err;
        }
        console.log('MySql Connected ...')
    })
    pool.destroy()
}

module.exports = {connection, pool}