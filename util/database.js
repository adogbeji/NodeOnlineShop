const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node_course_1',
    password: 'mysqlroot_1993'
});

module.exports = pool.promise();