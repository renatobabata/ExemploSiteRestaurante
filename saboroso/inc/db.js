// to import 'mysql2' module
const mysql = require('mysql2');

// to create the connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'saboroso'
});

// to export connection information in order to let it available to other classes
module.exports = connection;