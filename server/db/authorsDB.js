const mysql = require('mysql');

const pool = mysql.createPool({
	connectionLimit: 10,
	password: '',
	user: 'root',
	host: 'localhost',
	port: '3306'
})

let authorsDB = {};

authorsDB.all = () => {
	return new Promise((resolve,reject) => {
		pool.query(`SELECT * FROM oddhillschema.authors`, (err, results) => {
			if(err) {
				return reject(err);
			}
			return resolve(results);
		});
	});
};

authorsDB.id = (id) => {
	return new Promise((resolve,reject) => {
		pool.query(`SELECT * FROM oddhillschema.authors where id = ?`, [id], (err, results) => {
			if(err) {
				return reject(err);
			}
			return resolve(results[0]);
		});
	});
};

authorsDB.name = (name) => {
	return new Promise((resolve,reject) => {
		pool.query(`SELECT * FROM oddhillschema.authors where name = ?`, [name], (err, results) => {
			if(err) {
				return reject(err);
			}
			return resolve(results);
		});
	});
};

authorsDB.postAuthor = (name,biography) => {
	return new Promise((resolve,reject) => {
		pool.query(`INSERT INTO oddhillschema.authors (name,biography) VALUES (?,?)`, [name,biography], (err, results) => {
			if(err) {
				return reject(err);
			}
			return resolve(results);
		});
	});
};

authorsDB.putAuthor = (id,name,biography) => {
	return new Promise((resolve,reject) => {
		pool.query(`UPDATE oddhillschema.authors SET name = ?, biography = ? WHERE id = ?;`, [name,biography,id], (err, results) => {
			if(err) {
				return reject(err);
			}
			return resolve(results);
		});
	});
};

authorsDB.deleteAuthor = (id) => {
	return new Promise((resolve,reject) => {
		pool.query(`DELETE FROM oddhillschema.authors WHERE id = ?;`, [id], (err, results) => {
			if(err) {
				return reject(err);
			}
			return resolve(results);
		});
	});
};

module.exports = authorsDB;