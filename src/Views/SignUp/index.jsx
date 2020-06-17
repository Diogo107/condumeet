import React, { Component } from 'react';
import './style.scss';
//Import Images
import GroupTalking from './../../assets/images/GroupTalking.png';
import Logo from './../../assets/images/Logo.png';
import FacebookWhiteIcon from './../../assets/images/FacebookWhiteIcon.png';
import GoogleWhiteIcon from './../../assets/images/GoogleWhiteIcon.png';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="Sign-Up">
				<div className="left-side">
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
					<form>
						<div className="form-group">
							<div>
								<label>
									NAME
									<input name="name" type="text" />
								</label>
							</div>
							<div>
								<label>
									USER NAME
									<input name="username" type="text" />
								</label>
							</div>
						</div>
						<div className="form-group">
							<label>
								EMAIL
								<input name="email" type="email" />
							</label>
						</div>
						<div className="form-group">
							<label>
								PASSWORD
								<input
									name="password"
									type="password"
									placeholder="6+ Characters"
								/>
							</label>
						</div>
						<div className="checkbox">
							<input type="checkbox" name="terms" />
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
}

export default index;
