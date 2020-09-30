const { Router } = require('express');
const router = new Router();
var passport = require('passport');

router.get('/failed', (req, res) => res.send('Social Login Failed'));
router.get('/good', (req, res) => res.send('Social Login Worked'));

router.get(
	'/google',
	passport.authenticate('google', {
		successRedirect: '/',
		failureRedirect: '/login',
		scope: ['profile', 'email'],
	})
);

router.get(
	'/google/callback',
	passport.authenticate('google'),
	async (req, res) => {
		console.log('Callback Session Passport', req.session.passport.user);
		console.log('Callback User', req.user);
		/* const result = await axios.post(
			'http://localhost:5000/api/condumeet/auth/register',
			user
		);
		console.log('result...', result); */
	}
);

router.get('*', (req, res) => res.send('Social Auth catch all'));

module.exports = router;
