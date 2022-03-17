const express = require('express');
const db = require('../db/authorsBooksDB');
const authorsDB = require('../db/authorsDB');
const booksDB = require('../db/booksDB');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		let results = await db.all();
		res.json(results);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

router.get('/id/:id', async (req, res, next) => {
	try {
		let results = await db.id(req.params.id);
		res.json(results);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

router.get('/book_id/:book_id', async (req, res, next) => {
	try {
		let results = await db.book_id(req.params.book_id);
		let authors= [];
		for (item in results) {
			authors.push(results[item].author_id);
		}
		let authorsResults = [];
		for (item in authors) {
			let authorResult = await authorsDB.id(authors[item]);
			authorsResults.push(authorResult);
		}
		res.json(authorsResults);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

router.get('/author_id/:author_id', async (req, res, next) => {
	try {
		let results = await db.author_id(req.params.author_id);
		let books = [];
		for (item in results) {
			books.push(results[item].book_id);
		}
		let booksResults = [];
		for (item in books) {
			let bookResult = await booksDB.id(books[item]);
			booksResults.push(bookResult);
		}
		res.json(booksResults);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

module.exports = router;