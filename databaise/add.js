var mysql  = require('mysql');
var connection = require('../util/connetDB');

/*var connection = mysql.createConnection({
    host     : 'localhost',      
    user     : 'root',             
    password : 'root',      
    port: '3306',                  
    database: 'nodesample',
});

connection.connect();*/

function addMovie(movies, cb) {
    var  sql = 'INSERT INTO movies(doctor,title,language,summary,video) VALUES(?,?,?,?,?)';
    //增
    connection.query(sql,movies,function (err, result) {
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
            return;
        }

        console.log('--------------------------INSERT----------------------------');

        //console.log('INSERT ID:',result.insertId);
        console.log('INSERT ID:',result);
        cb(result);
        console.log('------------------------------------------------------------');
    });

}

connection.end();