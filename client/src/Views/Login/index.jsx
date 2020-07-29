import React, { useState, useContext } from 'react';
import './style.scss';
//Import Images
import GroupTalking from './../../assets/images/GroupTalking.png';
import Logo from './../../assets/images/Logo.png';
import FacebookWhiteIcon from './../../assets/images/FacebookWhiteIcon.png';
import GoogleWhiteIcon from './../../assets/images/GoogleWhiteIcon.png';
//Import Services
import { validateEmail } from '../../Sevices/APIs.js';
import { login } from '../../Sevices/Authenticathion.js';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { useCookies } from 'react-cookie';

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
		const resultLogin = await login({
			login: email,
			password,
		});
		console.log(resultLogin);
		setCookie('user', resultLogin.data, { path: '/' /* maxAge: 60 * 15 */ });
		props.history.push('/overview/dashboard');
	};

	return (
		<div className="Sign-Up">
			<div className="left-side">
				<button
					onClick={() => {
						console.log(cookies.user);
					}}
				>
					Test
				</button>
				<img src={Logo} alt="Logo" />
				<h1>Create Account</h1>
				<div>
					<button>
						<img src={FacebookWhiteIcon} alt="Facebook Icon" />
						Sign up with Facebook
					</button>
					<button>
						<img src={GoogleWhiteIcon} alt="Facebook Icon" />
						Sign up with Google
					</button>
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
									if (verify == false) {
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
