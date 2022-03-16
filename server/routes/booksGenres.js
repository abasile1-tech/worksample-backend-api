const express = require('express');
const db = require('../db/booksGenresDB');
const genresDB = require('../db/genresDB');

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
		let genres = [];
		for (item in results) {
			genres.push(results[item].genre_id);
		}
		let genresResults = [];
		for (item in genres) {
			let genreResult = await genresDB.id(genres[item]);
			genresResults.push(genreResult);
		}
		res.json(genresResults);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

module.exports = router;