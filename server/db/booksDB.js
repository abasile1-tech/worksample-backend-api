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

booksDB.id = (id) => {
	return new Promise((resolve,reject) => {
		pool.query(`SELECT * FROM oddhillschema.books where id = ?`, [id], (err, results) => {
			if(err) {
				return reject(err);
			}
			return resolve(results[0]);
		});
	});
};

booksDB.isbn = (isbn) => {
	return new Promise((resolve,reject) => {
		pool.query(`SELECT * FROM oddhillschema.books where isbn = ?`, [isbn], (err, results) => {
			if(err) {
				return reject(err);
			}
			return resolve(results[0]);
		});
	});
};

booksDB.title = (title) => {
	return new Promise((resolve,reject) => {
		pool.query(`SELECT * FROM oddhillschema.books where title = ?`, [title], (err, results) => {
			if(err) {
				return reject(err);
			}
			return resolve(results[0]);
		});
	});
};

module.exports = booksDB;