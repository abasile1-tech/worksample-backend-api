var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
	port: "3306",
  user: "root",
  password: ""
});

connection.connect(function(error) {
  if (error) throw error;
  console.log("Connected!");
});

connection.query('SELECT * FROM oddhillschema.authors;', function (error, result) {
  if (error) throw error;
  console.log('The result is:\n', result);
});

connection.end();