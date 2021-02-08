const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'beter-test-db.cj1xvqwlwiwo.ap-northeast-2.rds.amazonaws.com',
    user:'admin',
    password:'server12321',
    database:'student',
    port:'3306'
});

module.exports = pool;


