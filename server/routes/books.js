const express = require('express');
const db = require('../db/booksDB');

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

router.get('/isbn/:isbn', async (req, res, next) => {
	try {
		let results = await db.isbn(req.params.isbn);
		res.json(results);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

router.get('/title/:title', async (req, res, next) => {
	try {
		let results = await db.title(req.params.title);
		res.json(results);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

router.post('/:title/:isbn/:description', async (req, res, next) => {
	try {
		let results = await db.postBook(req.params.title,req.params.isbn,req.params.description);
		res.json(results);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

router.put('/:id/:title/:isbn/:description', async (req, res, next) => {
	try {
		let results = await db.putBook(req.params.id,req.params.title,req.params.isbn,req.params.description);
		res.json(results);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		let results = await db.deleteBook(req.params.id);
		res.json(results);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

module.exports = router;