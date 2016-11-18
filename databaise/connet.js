var mysql = require('mysql'); //call the mySql module


var connection = mysql.createConnection({
  host    : 'localhost',
  user    : 'root',
  password: 'root',
  port    : '3306'
});

//create a mysql connection
connection.connect(function (err) {
  if(err){
    console.log('[query] - :' + err);
    return;
  }

  console.log('[connection connect] success!');
});

//excuse the sql 
connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if(err){
    console.log('[query] - :' + err);
    return;
  }
  console.log('The solution is: ', rows[0].solution);
});

//close the sql connection
connection.end(function (err) {
  if(err){
    console.log('[query] - :' + err);
    return;
  }
  console.log('[connection end] success!');
})