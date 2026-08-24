const mysql = require('mysql2')

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "hello@06",
  database: 'airbnb'
})

module.exports = pool.promise();