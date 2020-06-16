import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
//import images
import Logo from '../../assets/images/Logo.png';

const index = (props) => {
	return (
		<div className="NavBar">
			<nav className="NavBar__NotLogged">
				<Link to="/">
					<img src={Logo} alt="logo" />
				</Link>
				<ul>
					<Link to="#feactures">
						<li>Feactures</li>
					</Link>
					<Link to="#pricing">
						<li>Pricing</li>
					</Link>
					<Link to="/login">
						<li>Login</li>
					</Link>
					<Link to="/signup">
						<li>Sign Up</li>
					</Link>
				</ul>
			</nav>
			{/* <div className="NavBar__Logged"></div> */}
		</div>
	);
};

export default index;
