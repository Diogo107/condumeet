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
				<div>
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
							<label>Name</label>
							<input name="name" type="name" />
						</div>
						<div className="form-group">
							<label>Email</label>
							<input name="email" type="email" />
						</div>
					</form>
				</div>
				<div>
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
