import React from 'react';
import './style.scss';
//Import images
import Logo from './../../assets/images/LogoWhite.png';
import Arrow from './../../assets/images/Arrow.png';
//Import Components and Views
import FirstTimeVisit from './../../Components/FirstTimeVisit';

function index(props) {
	return (
		<div className="welcome">
			<img src={Logo} alt="Logo" />
			<div className="container">
				<button>
					<img src={Arrow} alt="arrow" />
				</button>
				<FirstTimeVisit />
			</div>
		</div>
	);
}

export default index;
