import React, { useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './style.scss';
//Import Images
import Logo from '../../assets/images/Logo.png';
import ArrowDown from '../../assets/images/ArrowDown.svg';
import NotificationIcon from '../../assets/images/NotificationIcon.png';
import HamburgerMenuIcon from '../../assets/images/HamburgerMenuIcon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
//Import Context
import { UserContext } from './../../Context/UserContext.js';
//Import Services
import Dropdown from 'react-bootstrap/Dropdown';
import { useCookies } from 'react-cookie';
import Cookies from './../../../node_modules/js-cookie';
import axios from 'axios';
import { checkForUser, destroyCookies } from '../../Sevices/Authenticathion';

const Index = (props) => {
	const [cookies, setCookie, removeCookies] = useCookies(['user']);
	const [user, setUser] = useContext(UserContext);
	useEffect(() => {
		readToken();
	}, []);

	const readToken = async () => {
		const result = await checkForUser();
		if (result.data !== '') {
			setUser(result.data);
			props.history.push(`/dashboard/overview`);
		}
	};

	const hamburguerMenu = () => {
		const sidebar = document.getElementsByClassName('User__Sidebar');
		//sidebar[0].style.display = 'flex';
		console.log(sidebar[0].style.display);
	};
	return (
		<div className="NavBar">
			{(!user && (
				<nav className="NavBar__NotLogged">
					<Link to="/">
						<img src={Logo} alt="logo" />
					</Link>
					<ul>
						<Link to="#features">
							<li>Features</li>
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
						<div className="Phone__Hide">
							<Dropdown flip navbar>
								<Dropdown.Toggle id="dropdown-basic">
									<Link to="#">{user.name}</Link>
									<img src={user.avatar} alt="User Avatar" />
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item as="button">
										<Link to="/dashboard/profile/edit">Profile</Link>
									</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item as="button">
										<button
											onClick={async () => {
												await destroyCookies();
												setUser();
												props.history.push(`/`);
											}}
										>
											Logout
										</button>
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Index;
