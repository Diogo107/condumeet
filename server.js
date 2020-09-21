const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');
//Require routes
const authRouter = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

//This line of code attach React files
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/condumeet', authRouter);

//working......

/* app.post('/api/condumeet/login', async (req, res) => {
	console.log('Got here......................', req.body);
	const result = await axios.post(
		'http://ec2-54-229-6-244.eu-west-1.compute.amazonaws.com/api/auth/login',
		req.body
	);
	console.log('This is result', result);
	res.json({ result });
}); */

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(5000, () => console.log('ConduMeet app listening on port 5000!'));
