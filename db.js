const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10, // Adjust based on your needs
  host: 'localhost',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database-name'
});

pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log('Connected to MySQL!');
  connection.release(); // Return the connection to the pool
});

module.exports = pool;
