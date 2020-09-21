const { Router } = require('express');
const router = new Router();

router.get('/checkforuser', async (req, res, next) => {
	console.log('Router Checkforuser');
	req.session.token = result.data.token;
	req.session.user = result.data.user;
	if (req.session.user !== undefined) {
		res.json(req.session.user);
	} else {
		res.json({ empty });
	}
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

module.exports = router;
