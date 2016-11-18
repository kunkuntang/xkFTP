var mysql  = require('mysql'); 

var connection = mysql.createConnection({    
    host     : 'localhost',      
    user     : 'root',             
    password : 'root',      
    port: '3306',                  
    database: 'nodesample',
});

 
connection.connect();
 
var userModSql = 'UPDATE userinfo SET UserName = ?,UserPass = ? WHERE Id = ?';
var userModSql_Params = ['钟慰', '5678',1];
//改
connection.query(userModSql,userModSql_Params,function (err, result) {
    if(err){
      console.log('[UPDATE ERROR] - ',err.message);
      return;
    }       
    console.log('--------------------------UPDATE----------------------------');
    console.log('UPDATE affectedRows',result.affectedRows);
    console.log('------------------------------------------------------------');
});
 
connection.end();