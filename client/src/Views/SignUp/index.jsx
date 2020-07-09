import React, { useState } from 'react';
import './style.scss';
//Import Images
import GroupTalking from './../../assets/images/GroupTalking.png';
import Logo from './../../assets/images/Logo.png';
import FacebookWhiteIcon from './../../assets/images/FacebookWhiteIcon.png';
import GoogleWhiteIcon from './../../assets/images/GoogleWhiteIcon.png';
//Import Services
import { validateEmail } from './../../Sevices/APIs.js';

function Index(props) {
	const [name, setName] = useState();
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [terms, setTerms] = useState(false);

	const createAccount = async (e) => {
		e.preventDefault();
		const checkEmail = await validateEmail(email);
		const checkPassword = password.includes('');
		if (terms && checkEmail == 'valid' && checkPassword == true) {
		}
		console.log(name, username, email, password, terms);
	};

	return (
		<div className="Sign-Up">
			<div className="left-side">
				{/* <button
					onClick={() => {
						console.log(name, username, email, password, terms);
					}}
				>
					Test
				</button> */}
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
						<div>
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
					Already have account? <a href="#">Sign In</a>.
				</h5>
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