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

router.post('/', async (req, res, next) => {
	try {
		let results = await db.postAuthor(req.body.name,req.body.biography);
		res.json(results);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

router.put('/', async (req, res, next) => {
	try {
		let results = await db.putAuthor(req.body.id,req.body.name,req.body.biography);
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