const express = require('express');
const db = require('../db/authorsDB');

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

router.get('/name/:name', async (req, res, next) => {
	try {
		let results = await db.name(req.params.name);
		res.json(results);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

router.post('/:name/:biography', async (req, res, next) => {
	try {
		let results = await db.postAuthor(req.params.name,req.params.biography);
		res.json(results);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

router.put('/:id/:name/:biography', async (req, res, next) => {
	try {
		let results = await db.putAuthor(req.params.id,req.params.name,req.params.biography);
		res.json(results);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		let results = await db.deleteAuthor(req.params.id);
		res.json(results);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

module.exports = router;