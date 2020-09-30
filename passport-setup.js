var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20');

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.findById(id, function (err, user) {
		done(err, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID:
				'648268033854-0lt5o6nuocpvr37l69sgn96suf2okbkt.apps.googleusercontent.com',
			clientSecret: 'hX0ADkgL9ODg1Dv5eHdc1TAW',
			callbackURL: 'http://www.example.com/auth/google/callback',
		},
		function (accessToken, refreshToken, profile, cb) {
			User.findOrCreate({ googleId: profile.id }, function (err, user) {
				return cb(err, user);
			});
		}
	)
);
