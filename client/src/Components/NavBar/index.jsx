import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
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
//Import Stylling
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
} from 'reactstrap';
import './style.scss';

const Index = (props) => {
	const [cookies, setCookie, removeCookies] = useCookies(['user']);
	const [user, setUser] = useContext(UserContext);
	const [phone, setPhone] = useState(true);

	const [isOpen, setIsOpen] = useState(false);
	const [collapsed, setCollapsed] = useState(true);
	const toggle = () => setIsOpen(!isOpen);
	const toggleNavbar = () => setCollapsed(!collapsed);

	useEffect(() => {
		readToken();
		getWidth();
	}, []);

	const getWidth = () => {
		const horizontal = window.innerWidth;
		if (horizontal < 768) {
			setPhone(true);
		} else {
			setPhone(false);
		}
	};

	const readToken = async () => {
		const result = await checkForUser();
		if (result.data !== '') {
			setUser(result.data);
			props.history.push(`/dashboard/overview`);
		}
	};

	const hamburguerMenu = () => {
		const sidebar = document.getElementsByClassName('User__Sidebar');
		if (sidebar[0].style.display == '' || sidebar[0].style.display == 'none') {
			sidebar[0].style.display = 'flex';
		} else {
			sidebar[0].style.display = 'none';
		}
	};
	return (
		<div className="NavBar">
			{(!user && (
				<Navbar light expand="md" className="NavBar__NotLogged">
					<NavbarBrand href="/">
						<img src={Logo} alt="logo" />
					</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<Link to="#features">
								<NavItem>Features</NavItem>
							</Link>
							<Link to="#pricing">
								<NavItem>Pricing</NavItem>
							</Link>
							<Link to="/login">
								<NavItem>Login</NavItem>
							</Link>
							<Link to="/signup">
								<NavItem>Sign Up</NavItem>
							</Link>
						</Nav>
					</Collapse>
				</Navbar>
			)) || (
				<Navbar light expand="md" className="NavBar__Logged">
					<NavbarBrand href="/">
						<img src={Logo} alt="logo" />
					</NavbarBrand>
					<div className="Toggler__Width">
						<NavItem>
							<img src={NotificationIcon} alt="Notification Icon" />
						</NavItem>
						<div className="Toggler__Width">
							<UncontrolledDropdown nav inNavbar>
								<NavbarToggler onClick={hamburguerMenu} />
								<Collapse isOpen={isOpen} navbar>
									{(!phone && (
										<DropdownToggle nav caret>
											<Link to="#">{user.name}</Link>
											<img src={user.avatar} alt="User Avatar" />
										</DropdownToggle>
									)) || (
										<>
											<DropdownItem>
												<Link to="/dashboard/profile/edit">Profile</Link>
											</DropdownItem>
											<DropdownItem divider />
											<DropdownItem
												onClick={async () => {
													await destroyCookies();
													setUser();
													props.history.push(`/`);
												}}
											>
												Logout
											</DropdownItem>
										</>
									)}
									<DropdownMenu center>
										<DropdownItem>
											<Link to="/dashboard/profile/edit">Profile</Link>
										</DropdownItem>
										<DropdownItem divider />
										<DropdownItem
											onClick={async () => {
												await destroyCookies();
												setUser();
												props.history.push(`/`);
											}}
										>
											Logout
										</DropdownItem>
									</DropdownMenu>
								</Collapse>
							</UncontrolledDropdown>
						</div>
					</div>
				</Navbar>
			)}
		</div>
	);
};

export default Index;
