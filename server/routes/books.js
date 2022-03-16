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

router.get('/:id', async (req, res, next) => {
	try {
		let results = await db.one(req.params.id);
		res.json(results);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

router.get('/isbn/:isbn', async (req, res, next) => {
	try {
		let results = await db.one(req.params.isbn);
		res.json(results);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

router.get('/title/:title', async (req, res, next) => {
	try {
		let results = await db.one(req.params.title);
		res.json(results);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

module.exports = router;