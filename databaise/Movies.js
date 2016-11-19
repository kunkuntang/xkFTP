var mysql = require('mysql');
var connection = require('../util/connetDB');



function selectAll(cb) {
    connection.connect();
    var sql = 'SELECT * FROM movies';

    console.log(sql)

    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        console.log('--------------------------SELECT----------------------------');
        console.log(result);
        console.log('-------------------------------------------------------------');
        cb(result);
    });
}

function selectOne(id, cb) {
    var sql = 'SELECT * FROM movies WHERE _id = ' + id;

    console.log(sql)

    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        console.log('--------------------------SELECT----------------------------');
        console.log(result);
        console.log('-------------------------------------------------------------');
        cb(result[0]);
    });
}

function addMovie(movie,cb) {
   var  sql = 'INSERT INTO movies(title,doctor,city,year,language,summary,poster,video) VALUES(?,?,?,?,?,?,?,?)';
    //增
    connection.query(sql,movie,function (err, result) {
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
            return;
        }

        console.log('--------------------------INSERT----------------------------');

        //console.log('INSERT ID:',result.insertId);
        console.log('INSERT ID:',result);
        cb(result.insertId);
        console.log('------------------------------------------------------------');
    });
}

function updateMovie(id ,movie, cb) {
    var sql = 'UPDATE movies SET title = ?,doctor = ?,city = ?,year = ?,language = ?,summary = ?,poster = ?,video = ? WHERE _id = ' + id;

    connection.query(sql,movie,function (err, result) {
        if(err){
            console.log('[UPDATE ERROR] - ',err.message);
            return;
        }
        console.log('--------------------------UPDATE----------------------------');
        console.log('UPDATE affectedRows',result);
        console.log('------------------------------------------------------------');
        cb(id);
    });
}

function deletMovie(id, cb) {
    var  sql = 'DELETE FROM movies where _id = ' + id;

    connection.query(sql,function (err, result) {
        if(err){
            console.log('[DELETE ERROR] - ',err.message);
            return;
        }

        console.log('--------------------------DELETE----------------------------');
        console.log('DELETE affectedRows',result.affectedRows);
        console.log('------------------------------------------------------------');
        cb();
    });
}


module.exports = {
    selectAll: selectAll,
    selectOne: selectOne,
    addMovie: addMovie,
    updateMovie: updateMovie,
    deletMovie: deletMovie
}