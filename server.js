const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');
//Cookies
var session = require('express-session');
var cookieParser = require('cookie-parser');
//Require routes
const indexRouter = require('./routes/auth');
const authRouter = require('./routes/auth');
const condoRouter = require('./routes/condominiums');
const profilesRouter = require('./routes/profiles');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.set('trust proxy', 1); // trust first proxy
app.use(
	session({
		secret: 'process.env.SESSION_SECRET',
		resave: true,
		saveUninitialized: false,
		cookie: {
			maxAge: 900000,
			sameSite: 'lax',
			httpOnly: true,
			//secure: process.env.NODE_ENV === 'production'
		},
	})
);
//This line of code attach React files
//app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/condumeet/index', indexRouter);
app.use('/api/condumeet/auth', authRouter);
app.use('/api/condumeet/condominiums', condoRouter);
app.use('/api/condumeet/profiles', profilesRouter);

/* app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
}); */

const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Listening on ${port}`);
