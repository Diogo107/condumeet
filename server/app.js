'use strict';

const { join } = require('path');
const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const cors = require('cors');
const serveFavicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const authenticathionRouter = require('./routes/authenticathion');
const externalsRouter = require('./routes/externals');

const app = express();

//Configuring cookie
app.set('trust proxy', 1);
app.use(
	session({
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: true,
		cookie: { secure: true },
	})
);

//Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(serveFavicon(join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());

//Understand default request (testing purposes)
/* app.all('/api/*', function(req, res, next) {
	console.log('General Validations');
	next();
}); */

//Routes
app.use('/api/externals', externalsRouter);
app.use('/api/authentication', authenticathionRouter);

//This line of code was put here to deployment
app.use(express.static(join(__dirname, './../client/build')));

//This line of code was put here to deployment
app.get('*', (req, res, next) => {
	res.sendFile(join(__dirname, './../client/build/index.html'));
});

// Catch missing routes and forward to error handler
app.use((req, res, next) => {
	next(createError(404));
});

// Catch all error handler
app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({ type: 'error', error: { message: error.message } });
});

module.exports = app;
