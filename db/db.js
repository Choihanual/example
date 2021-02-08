const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Coc@690312',
    database:'student',
    port:'3306'
});

module.exports = pool;


