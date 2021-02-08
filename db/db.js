const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'115.93.255.203',
    user:'root',
    password:'Coc@690312',
    database:'student',
    port:'3306'
});

module.exports = pool;


