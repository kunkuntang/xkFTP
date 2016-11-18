var mysql  = require('mysql'); 

var connection = mysql.createConnection({    
    host     : 'localhost',      
    user     : 'root',             
    password : 'root',      
    port: '3306',                  
    database: 'nodesample',
});

connection.connect();

var  userDelSql = 'DELETE FROM userinfo';

//删
connection.query(userDelSql,function (err, result) {
    if(err){
        console.log('[DELETE ERROR] - ',err.message);
    return;
}       
 
    console.log('--------------------------DELETE----------------------------');
    console.log('DELETE affectedRows',result.affectedRows);
    console.log('------------------------------------------------------------'); 
});
 
connection.end();