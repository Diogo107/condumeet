'use strict';

const { Router } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('./../models/user');
const stripe = require('./../stripe-configure');
const uploader = require('./../multer-configure.js');
const axios = require('axios');
const instance = axios.create({
	baseURL: 'http://ec2-54-229-6-244.eu-west-1.compute.amazonaws.com/api/auth',
});

const router = new Router();

router.post('/sign-up', async (req, res, next) => {
	const result = await instance.post('/register', req.body.data);
	const final = result.status;
	res.json({ final });
});

router.post('/login', async (req, res, next) => {
	console.log('.......................................');
	const data = {
		login: req.body.data.email,
		password: req.body.data.password,
	};
	const result = await instance.post('/login', data);
	console.log('This is on result', req);
	res.cookie('conduMeet', 'cookieValue');
	const user = result.data;
	res.json({ user });
});

router.post('/searchForCondominium', async (req, res, next) => {
	console.log('This is on searchForCondominium', req.body);
});

router.post('/inviteAllNeighbors', async (req, res, next) => {
	console.log('This is on inviteAllNeighbors', req.body);
});

router.post('/condominiumCreated', async (req, res, next) => {
	console.log('This is on condominiumCreated', req.body);
});

//Bellow is not important for now
router.post('/sign-in', (req, res, next) => {
	let user;
	const { email, passwordHash } = req.body;
	User.findOne({ email })
		.then((document) => {
			if (!document) {
				return Promise.reject(new Error("There's no user with that email."));
			} else {
				user = document;
				return bcryptjs.compare(passwordHash, user.passwordHash);
			}
		})
		.then((result) => {
			if (result) {
				req.session.user = user._id;
				console.log('req.session.user', req.session.user);
				res.json({ user });
			} else {
				return Promise.reject(new Error('Wrong password.'));
			}
		})
		.catch((error) => {
			next(error);
		});
});

router.post('/sign-out', (req, res, next) => {
	req.session.destroy();
	res.json({});
});

router.get('/user-information', (req, res, next) => {
	console.log('Hello from the server');
	res.json({ user: req.user || null });
});

router.get('/user-information', (req, res, next) => {
	console.log('Hello from the server');
	res.json({ user: req.user || null });
});

router.patch(
	'/user-information',
	uploader.single('picture'),
	async (req, res, next) => {
		const { buildingId } = req.body;

		//if (req.file) picture = req.file.url;
		try {
			const user = await User.findByIdAndUpdate(req.user._id, {
				buildingId,
			});
			res.json({ user });
		} catch (error) {
			next(error);
		}
	}
);
router.patch('/paymentMethods', async (req, res, next) => {
	const paymentMethods = true;
	console.log('this is thew req.body', req.body);

	try {
		const user = await User.findByIdAndUpdate(req.user._id, { paymentMethods });
		res.json({ user });
	} catch (error) {
		next(error);
	}
});

module.exports = router;
