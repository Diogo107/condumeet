const { Router } = require('express');
const router = new Router();
const axios = require('axios');
const instance = axios.create({
	baseURL:
		'http://ec2-54-229-6-244.eu-west-1.compute.amazonaws.com/api/v1/profiles',
});

router.get('/self', async (req, res, next) => {
	const result = await instance.post('/self', {
		headers: {
			Authorization: `Bearer ${req.session.token}`,
		},
	});
	res.json(result.data);
});

module.exports = router;
