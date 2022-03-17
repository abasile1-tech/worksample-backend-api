const mysql = require('mysql');

const pool = mysql.createPool({
	connectionLimit: 10,
	password: '',
	user: 'root',
	host: 'localhost',
	port: '3306'
})

let authorsBooksDB = {};

authorsBooksDB.all = () => {
	return new Promise((resolve,reject) => {
		pool.query(`SELECT * FROM oddhillschema.authors_books`, (err, results) => {
			if(err) {
				return reject(err);
			}
			return resolve(results);
		});
	});
};

authorsBooksDB.id = (id) => {
	return new Promise((resolve,reject) => {
		pool.query(`SELECT * FROM oddhillschema.authors_books where id = ?`, [id], (err, results) => {
			if(err) {
				return reject(err);
			}
			return resolve(results[0]);
		});
	});
};

authorsBooksDB.book_id = (book_id) => {
	return new Promise((resolve,reject) => {
		pool.query(`SELECT * FROM oddhillschema.authors_books where book_id = ?`, [book_id], (err, results) => {
			if(err) {
				return reject(err);
			}
			return resolve(results);
		});
	});
};

authorsBooksDB.author_id = (author_id) => {
	return new Promise((resolve,reject) => {
		pool.query(`SELECT * FROM oddhillschema.authors_books where author_id = ?`, [author_id], (err, results) => {
			if(err) {
				return reject(err);
			}
			return resolve(results);
		});
	});
};

module.exports = authorsBooksDB;