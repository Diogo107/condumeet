'use strict';

const { Router } = require('express');
const router = new Router();
const axios = require('axios');
const instance = axios.create({
	baseURL: 'http://ec2-54-229-6-244.eu-west-1.compute.amazonaws.com/api/auth',
});

router.post('/sign-up', async (req, res, next) => {
	const result = await instance.post('/register', req.body.data);
	console.log('Registering..............', result);
	const final = result.status;
	res.json({ final });
});

router.post('/login', async (req, res, next) => {
	const data = {
		login: req.body.data.email,
		password: req.body.data.password,
	};

	console.log('Before post to api');
	const result = await instance.post('/login', data);
	console.log('After post to api', result.data);
	const user = result.data;
	req.session.user = user.user.id;
	res.json({ user });
});

module.exports = router;
