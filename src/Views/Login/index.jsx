import React, { useState, useContext } from 'react';
import './style.scss';
//Import Images
import GroupTalking from './../../assets/images/GroupTalking.png';
import Logo from './../../assets/images/Logo.png';
//Import Services
import { login } from '../../Sevices/Authenticathion.js';
import { UserContext } from '../../Context/UserContext';
import { useCookies } from 'react-cookie';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

function Index(props) {
	const [user, setUser] = useContext(UserContext);
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [cookies, setCookie] = useCookies();

	const createAccount = async (e) => {
		e.preventDefault();
		const resultLogin = await login({
			login: email,
			password,
		});
		console.log(resultLogin);
		setCookie('user', resultLogin.data, { path: '/', maxAge: 60 * 15 });
		setUser(resultLogin.data.user);
		props.history.push('/dashboard/overview');
	};

	const responseFacebook = async (response) => {
		await setName(response.name);
		await setEmail(response.email);
		await setPassword(response.id);
		createAccount();
		console.log(name, email, password);
		console.log(response);
	};

	const responseGoogle = async (response) => {
		console.log(response);
		await setName(response.profileObj.name);
		await setEmail(response.profileObj.email);
		await setPassword(response.profileObj.googleId);
		createAccount();
		console.log(name, email, password);
	};
	console.log(process.env.REACT_APP_GOOGLE_API_KEY);
	return (
		<div className="Sign-Up">
			<div className="left-side">
				<img src={Logo} alt="Logo" />
				<h1>Create Account</h1>
				<div>
					<FacebookLogin
						appId={process.env.REACT_APP_FACEBOOK_OAUTH_ID}
						autoLoad={true}
						fields="name,email,picture"
						callback={responseFacebook}
						cssClass="my-facebook-button-class"
						icon="fa-facebook"
					/>
					<GoogleLogin
						clientId={process.env.REACT_APP_GOOGLE_OAUTH_ID}
						buttonText="Login"
						onClick={responseGoogle}
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

					<button>Login</button>
				</form>
			</div>
			<div className="right-side">
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
