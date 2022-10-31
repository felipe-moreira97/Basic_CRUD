const mysql = require('mysql')
const pool = mysql.createPool({
    "user":"root",
    "host":"localhost",
    "password":"12345678",
    "port":3306,
    "database":"api"
})

exports.pool = pool