const mysql = require('promise-mysql');

const dbConfig = {
    host: 'jiyooninstance.c5dekpilfikd.ap-northeast-2.rds.amazonaws.com',
    port: 3306,
    user: 'jean1042',
    password: 'sm34986713',
    database: 'swumurf'
}

module.exports = mysql.createPool(dbConfig);