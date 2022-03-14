const express = require('express');

const router = express.Router();

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
	port: "3306",
  user: "root",
  password: ""
});

connection.connect(function(error) {
  if (error) throw error;
  console.log("Connected!");
});

// Get Authors
router.get('/', async (request, response) => {
	connection.query('SELECT * FROM oddhillschema.authors;', function (error, result) {
		if (error) throw error;
		response.json(result);
	});
	
});

//connection.end();

module.exports = router;