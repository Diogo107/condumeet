import React, { useContext } from 'react';
import './style.scss';
import { UserContext } from '../../Context/UserContext';
//import images
import Logo from '../../images/Logo.png';

const index = (props) => {
	//let a = useContext(UserContext);
	return (
		<div className="NavBar">
			<div className="NavBar__NotLogged">
				<img src={Logo} alt="logo" />
				feactures pricing Login signup
			</div>
			<div className="NavBar__Logged"></div>
		</div>
	);
};

export default index;
