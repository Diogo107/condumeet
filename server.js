const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');
const dotenv = require('dotenv');
var cors = require('cors');
const cookieSession = require('cookie-session');
const axios = require('axios');
//Passport (Social Login)
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//Cookies
var session = require('express-session');
var cookieParser = require('cookie-parser');
//Require routes
const indexRouter = require('./routes/auth');
const authRouter = require('./routes/auth');
const condoRouter = require('./routes/condominiums');
const profilesRouter = require('./routes/profiles');
const socialAuthRouter = require('./routes/socialAuth');

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.set('trust proxy', 1); // trust first proxy
//Sessions
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
app.use(express.static(path.join(__dirname, 'client/build')));

//Social Login (Passport)
app.use(passport.initialize());
//app.use(passport.session());
passport.use(
	new GoogleStrategy(
		{
			clientID:
				'648268033854-0lt5o6nuocpvr37l69sgn96suf2okbkt.apps.googleusercontent.com',
			clientSecret: 'hX0ADkgL9ODg1Dv5eHdc1TAW',
			callbackURL: '/api/condumeet/auth/social-auth/google/callback',
		},
		(accessToken, refreshToken, profile, done) => {
			//console.log('access token: ', accessToken);
			//console.log('Profile: ', profile);
			const user = {
				name: profile.displayName,
				email: profile._json.email,
				password: profile._json.sub,
				password_confirmation: profile._json.sub,
				terms: true,
			};
			console.log(user);
			//axios.post('http://localhost:5000/api/condumeet/auth/register', user);
			done(null, user);
			//done(null, JSON.stringify(profile));
		}
	)
);
passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (user, done) {
	done(null, user);
});
/* passport.serializeUser((user, done) => {
	user = JSON.parse(user);
	console.log('serializer', user);
	done(null, user.id);
});
passport.deserializeUser((id, done) => {
	console.log('deserializer', id);
	done(null, id);
}); */

app.use('/api/condumeet/index', indexRouter);
app.use('/api/condumeet/auth/social-auth', socialAuthRouter);
app.use('/api/condumeet/auth', authRouter);
app.use('/api/condumeet/condominiums', condoRouter);
app.use('/api/condumeet/profiles', profilesRouter);

app.get('*', (req, res) => {
	console.log('catch all in the server.....');
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Listening on ${port}`);
