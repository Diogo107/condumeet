import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
//import images
import Logo from '../../assets/images/Logo.png';
import ArrowDown from '../../assets/images/ArrowDown.svg';
import NotificationIcon from '../../assets/images/NotificationIcon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
//Import Context
import { UserContext } from './../../Context/UserContext.js';

const Index = (props) => {
	const [user, setUser] = useContext(UserContext);
	return (
		<div className="NavBar">
			{(!user && (
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
			)) || (
				<div className="NavBar__Logged">
					<div>
						<img src={Logo} alt="logo" />
					</div>
					<div>
						<div>
							<img src={NotificationIcon} alt="Notification Icon" />
						</div>
						<div>
							<p>{user.name}</p>
							<img src={user.avatar} alt="User Avatar" />
							<button>
								<FontAwesomeIcon icon={faAngleDown} size="2x" />
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Index;