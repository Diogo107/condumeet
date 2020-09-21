const { Router } = require('express');
const router = new Router();
console.log('Api');

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

module.exports = router;
