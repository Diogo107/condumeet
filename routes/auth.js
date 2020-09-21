const { Router } = require('express');
const router = new Router();
const axios = require('axios');
const instance = axios.create({
	baseURL: 'http://ec2-54-229-6-244.eu-west-1.compute.amazonaws.com/api/auth',
});

router.post('/login', async (req, res, next) => {
	console.log('hello from the router', req.body);
	const result = await instance.post('/login', req.body);
	console.log('This is result', result.data);
	res.json(result.data);
});

router.post('/register', async (req, res, next) => {
	console.log('hello from the router', req.body);
	const result = await instance.post('/register', req.body);
	console.log('This is result', result.data);
	res.json(result.data);
});

router.post('/forgot-password', async (req, res, next) => {
	console.log('hello from the router', req.body);
	const result = await instance.post('/register', req.body);
	console.log('This is result', result.data);
	res.json(result.data);
});

module.exports = router;
