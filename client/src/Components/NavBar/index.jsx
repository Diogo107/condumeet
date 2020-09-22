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
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

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
				<Navbar color="light" light expand="md" className="NavBar__NotLogged">
					<NavbarBrand href="/">
						<img src={Logo} alt="logo" />
					</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						{/* <Nav className="mr-auto" navbar>
							<NavItem>
								<NavLink href="/components/">Components</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/reactstrap/reactstrap">
									GitHub
								</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Options
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>Option 1</DropdownItem>
									<DropdownItem>Option 2</DropdownItem>
									<DropdownItem divider />
									<DropdownItem>Reset</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav> */}
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
