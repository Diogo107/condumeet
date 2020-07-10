'use strict';

const express = require('express');
const { Router } = express;
const axios = require('axios');

const router = new Router();

router.post('/email-validation', async (req, res, next) => {
	console.log(req.body);
	const result = await axios.get(
		`http://api.quickemailverification.com/v1/verify?email=${req.body.data}&apikey=af3051f51d614ef5f001a530a3f667278825e26a2a9d412b79a6f33a48a6`
	);
	console.log(result.data.result);
	const response = result.data.result;
	res.json({ response });
	//return result;
});

module.exports = router;
