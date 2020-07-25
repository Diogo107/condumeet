'use strict';

const { Router } = require('express');
const router = new Router();

router.post('/sign-up', async (req, res, next) => {
	console.log('this is the authentication');
	const result = await instance.post('/register', req.body.data);
	const final = result.status;
	res.json({ final });
});

router.get('/', (req, res, next) => {
	res.json({ type: 'success', data: { title: 'Hello World' } });
});

module.exports = router;
