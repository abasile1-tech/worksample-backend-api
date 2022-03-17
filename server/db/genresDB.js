const mysql = require('mysql');

const pool = mysql.createPool({
	connectionLimit: 10,
	password: '',
	user: 'root',
	host: 'localhost',
	port: '3306'
})

let genresDB = {};

genresDB.all = () => {
	return new Promise((resolve,reject) => {
		pool.query(`SELECT * FROM oddhillschema.genres`, (err, results) => {
			if(err) {
				return reject(err);
			}
			return resolve(results);
		});
	});
};

genresDB.id = (id) => {
	return new Promise((resolve,reject) => {
		pool.query(`SELECT * FROM oddhillschema.genres where id = ?`, [id], (err, results) => {
			if(err) {
				return reject(err);
			}
			return resolve(results[0]);
		});
	});
};

genresDB.name = (name) => {
	return new Promise((resolve,reject) => {
		pool.query(`SELECT * FROM oddhillschema.genres where name = ?`, [name], (err, results) => {
			if(err) {
				return reject(err);
			}
			return resolve(results);
		});
	});
};

module.exports = genresDB;