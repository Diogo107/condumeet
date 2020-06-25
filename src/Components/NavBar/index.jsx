import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
//import images
import Logo from '../../assets/images/Logo.png';
import ArrowDown from '../../assets/images/ArrowDown.png';
import NotificationIcon from '../../assets/images/NotificationIcon.png';
//Import Context
import { UserContext } from './../../Context/UserContext.js';

const Index = (props) => {
	const [user, setUser] = useContext(UserContext);
	console.log(user);
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
								<img
									src={ArrowDown}
									alt="Arrow Down"
									style={{ width: '15px' }}
								/>
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Index;
