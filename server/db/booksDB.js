const mysql = require('mysql');

const pool = mysql.createPool({
	connectionLimit: 10,
	password: '',
	user: 'root',
	host: 'localhost',
	port: '3306'
})

let booksDB = {};

booksDB.all = () => {
	return new Promise((resolve,reject) => {
		pool.query(`SELECT * FROM oddhillschema.books`, (err, results) => {
			if(err) {
				return reject(err);
			}
			return resolve(results);
		});
	});
};

booksDB.one = (id) => {
	return new Promise((resolve,reject) => {
		pool.query(`SELECT * FROM oddhillschema.books where id = ?`, [id], (err, results) => {
			if(err) {
				return reject(err);
			}
			return resolve(results[0]);
		});
	});
};

module.exports = booksDB;