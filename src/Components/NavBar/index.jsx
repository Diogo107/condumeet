import React, { useContext, useState } from 'react';
import './style.scss';
import { UserContext } from '../../Context/UserContext';
//import images
import Logo from '../../images/Logo.png';

const index = (props) => {
	//let a = useContext(UserContext);
	//const [user, setUser] = useState(null);
	return (
		<div className="NavBar">
			<nav className="NavBar__NotLogged">
				<img src={Logo} alt="logo" />
				<ul>
					<li>Feactures</li>
					<li>Pricing</li>
					<li>Login</li>
					<li>Sign Up</li>
				</ul>
			</nav>
			{/* <div className="NavBar__Logged"></div> */}
		</div>
	);
};

export default index;
