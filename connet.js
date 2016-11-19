var mysql  = require('mysql');
var connection = require('../util/connetDB');
var movieModel = require('../models/movie');
/*
 var connection = mysql.createConnection({
 host     : 'localhost',
 user     : 'root',
 password : 'root',
 port: '3306',
 database: 'nodesample',
 });
 */


connection.connect();

var  userGetSql = 'SELECT * FROM movies';

//查
connection.query(userGetSql,function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('-------------------------------------------------------------');
});

connection.end();