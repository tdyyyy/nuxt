var mysql   = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'tdy',
  password : '666666',
  database : 'enn'
});

connection.connect();

var sql = 'select * from user where name= "1111" and password=666666';

connection.query(sql, function (err, result, fields) {
  // if (error) throw error;
  if(err){
    console.log('[SELECT ERROR] - ',err.message);
    return;
  }
  console.log(result);
});
