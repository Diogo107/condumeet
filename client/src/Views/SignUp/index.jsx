import React, { useState, useContext } from 'react';
import './style.scss';
//Import Images
import GroupTalking from './../../assets/images/GroupTalking.png';
import Logo from './../../assets/images/Logo.png';
//Import Services
import { signUp, login, googleAuth } from './../../Sevices/Authenticathion.js';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { useCookies } from 'react-cookie';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

function Index(props) {
	const [user, setUser] = useContext(UserContext);
	const [name, setName] = useState();
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [terms, setTerms] = useState(false);
	const [cookies, setCookie] = useCookies(['name']);

	const createAccount = async (e) => {
		e.preventDefault();
		/* const checkEmail = await validateEmail(email);
		const checkPassword = '';
		if (terms && checkEmail == 'valid' && checkPassword == true) {
		} */
		const resultSignUp = await signUp({
			name,
			username,
			email,
			password,
			password_confirmation: password,
			terms,
		});
		console.log('Isto é o forulário a tentar enviar', resultSignUp);
		/* if (resultSignUp.status === 201 || resultSignUp.status === 200) {
			const resultLogin = await login({ login: email, password });
			setCookie('user', resultLogin.data, { path: '/', maxAge: 60 * 15 });
			setUser(resultLogin.data.user);
		} */

		//props.history.push('/signup/welcome');
	};

	const responseFacebook = async (response) => {
		console.log('Isto aqui é o Facebook');
		if (response.status !== 'unknown') {
			await setName(response.name);
			await setEmail(response.email);
			await setPassword(response.id);
			await setTerms(true);
			createAccount();
		}
	};

	const responseGoogle = async (response) => {
		console.log('Isto aqui é o Google', response);
		if (!response.error) {
			await setName(response.profileObj.name);
			await setEmail(response.profileObj.email);
			await setPassword(response.profileObj.googleId);
			await setTerms(true);
			createAccount();
		}
	};

	return (
		<div className="Sign-Up">
			<div className="left-side">
				<img src={Logo} alt="Logo" />
				<h1>Create Account</h1>
				<div>
					<a href="http://localhost:5000/api/condumeet/auth/social-auth/google">
						Log with social
					</a>
					<FacebookLogin
						appId="305464780546351"
						autoLoad={false}
						fields="name,email,picture"
						callback={responseFacebook}
						cssClass="my-facebook-button-class"
						icon="fa-facebook"
					/>
					<GoogleLogin
						clientId={process.env.REACT_APP_GOOGLE_OAUTH_ID}
						buttonText="Login with Google"
						render={(renderProps) => (
							<button
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
							>
								This is my custom Google button
							</button>
						)}
						onSuccess={responseGoogle}
						//onFailure={responseGoogle}
						autoLoad={false}
						cookiePolicy={'single_host_origin'}
					/>
				</div>
				<span>
					<p></p>
					<p>or</p>
					<p></p>
				</span>
				<form onSubmit={createAccount}>
					<div className="form-group">
						<div>
							<label>
								NAME
								<input
									name="name"
									type="text"
									onChange={(e) => {
										setName(e.target.value);
									}}
								/>
							</label>
						</div>
						<div className="Phone__Hide">
							<label>
								USER NAME
								<input
									name="username"
									type="text"
									onChange={(e) => {
										setUsername(e.target.value);
									}}
								/>
							</label>
						</div>
					</div>
					<div className="form-group">
						<label>
							EMAIL
							<input
								name="email"
								type="email"
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
						</label>
					</div>
					<div className="form-group">
						<label>
							PASSWORD
							<input
								name="password"
								type="password"
								placeholder="6+ Characters"
								id="password"
								onChange={(e) => {
									let rule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
									let verify = rule.test(e.target.value);
									console.log(verify);
									if (verify === false) {
										document.getElementById('password').style.border =
											'1px solid red';
									}

									setPassword(e.target.value);
								}}
							/>
							<span>Password is too weak</span>
						</label>
					</div>
					<div className="checkbox">
						<input
							type="checkbox"
							name="terms"
							required
							value={terms}
							onChange={(e) => {
								console.log(e.target.value);
								setTerms(!terms);
							}}
						/>
						<label for="terms">
							Creating an account means you’re okay with our{' '}
							<a href="#">Terms of Service, Privacy Policy</a>, and our
							<a href="#">default Notification Settings</a>.
						</label>
					</div>
					<button>CREATE ACCOUNT</button>
				</form>
				<h5>
					Already have account? <Link to="/login">Sign In</Link>.
				</h5>
			</div>
			<div className="right-side Phone__Hide">
				<img src={GroupTalking} alt="People Talking" />
				<h2>Connect and manage with your neighbors!</h2>
				<p>
					Digital experience for condominium management for a more transparent
					and collaborative neighborhood while reducing costs
				</p>
			</div>
		</div>
	);
}

export default Index;
