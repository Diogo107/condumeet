const { Router } = require('express');
const router = new Router();
const axios = require('axios');
const instance = axios.create({
	baseURL: 'http://ec2-54-229-6-244.eu-west-1.compute.amazonaws.com/api/v1',
});

//This route is to create new Condominium
router.post('/createcondominiums', async (req, res, next) => {
	const result = await instance.post('/condominiums', req.body, {
		headers: {
			Authorization: `Bearer ${req.session.token}`,
		},
	});
	res.json(result.data);
});

//This route is to get specific condominium
router.post('/condominium', async (req, res, next) => {
	console.log('Specific condominium router...');
	const token = req.body.token;
	const result = await instance.get(`/condominiums/${req.body.data}`, {
		headers: {
			Authorization: `Bearer ${req.session.token}`,
		},
	});
	res.json(result.data);
});

//This route is to get list of conduminiums
router.post('/condominiums', async (req, res, next) => {
	const result = await instance.get(`/condominiums`, {
		headers: {
			Authorization: `Bearer ${req.session.token}`,
		},
	});
	res.json(result.data);
});

module.exports = router;
