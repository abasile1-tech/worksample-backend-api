const express = require('express');

const router = express.Router();

router.post('/', async (req, res, next) => {
	let userName = req.body.userName;
	let userPassword = req.body.userPassword;

	if (userName === "admin" && userPassword === "password"){
		res.sendStatus(200);
	}
	else if (userName === "admin" && userPassword != "password") {
		res.sendStatus(205);
	}
	else {
		res.sendStatus(202);
	}
});

module.exports = router;