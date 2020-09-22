const { Router } = require('express');
const router = new Router();
const axios = require('axios');
const instance = axios.create({
	baseURL: 'https://ec2-54-229-6-244.eu-west-1.compute.amazonaws.com/api/auth',
});

router.get('/checkforuser', async (req, res, next) => {
	console.log('Router Checkforuser');
	if (req.session.user !== undefined) {
		res.json(req.session.user);
	} else {
		res.json();
	}
});

router.post('/login', async (req, res, next) => {
	console.log('Router Login');
	const result = await instance.post('/login', req.body);
	req.session.token = result.data.token;
	req.session.user = result.data.user;
	res.json(result.data);
});

router.post('/register', async (req, res, next) => {
	console.log('Router Sign Up');
	const result = await instance.post('/register', req.body);
	res.json(result.data);
});

router.post('/forgot-password', async (req, res, next) => {
	console.log('Router forget Password');
	const result = await instance.post('/register', req.body);
	res.json(result.data);
});

router.delete('/destroyCookies', async (req, res, next) => {
	console.log('Router destroyCookies');
	req.session.destroy();
	res.json({});
});

module.exports = router;
