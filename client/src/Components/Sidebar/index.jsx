import React, { useEffect, useState } from 'react';
import './style.scss';
//Import Services
import { useCookies } from 'react-cookie';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { getCondominiums } from '../../Sevices/Condominiums';
//Import Images
import OverviewIcon from './../../assets/images/sidebar__icons/OverviewIcon.png';
import ActivityIcon from './../../assets/images/sidebar__icons/ActivityIcon.png';
import ArchiveIcon from './../../assets/images/sidebar__icons/ArchiveIcon.png';
import NeighborsIcon from './../../assets/images/sidebar__icons/NeighborsIcon.png';
import ServicesIcon from './../../assets/images/sidebar__icons/ServicesIcon.png';
import WalletIcon from './../../assets/images/sidebar__icons/WalletIcon.png';

function Index(props) {
	const [cookies, setCookie] = useCookies(['user']);
	const [listOfApartments, setListOfApartments] = useState();
	const [currentProps, setCurrentProps] = useState();
	useEffect(() => {
		firstCondomínium();
	}, []);
	const firstCondomínium = async () => {
		console.log(!cookies.user);
		if (cookies.user) {
			const token = cookies.user.token;
			const result = await getCondominiums(token);
			props.history.push(`/dashboard/overview/${result.data[0].id}`);
			setListOfApartments(result.data);
		} else {
			props.history.push(`/login`);
		}
	};
	useEffect(() => {
		if (props.location.pathname !== currentProps) {
			setCurrentProps(props.location);
			showSideOptions();
		} else {
		}
	});
	const showSideOptions = () => {
		const options = document.getElementsByClassName('Options');
		/* if (options[0]) {
			console.log(options[0].id);
			console.log(props.match.params.id);
		} */
		for (let i = 0; i < options.length; i++) {
			if (options[i].id !== props.match.params.id) {
				options[i].style.display = 'none';
			} else {
				options[i].style.display = 'block';
			}
		}
	};

	const hide = () => {
		if (window.innerWidth < 768) {
			document.getElementsByClassName('User__Sidebar')[0].style.display =
				'none';
		}
	};

	return (
		<div className="Sidebar__Component">
			{listOfApartments &&
				listOfApartments.map((single) => (
					<>
						<button
							className="Purple__Box--Sidebar"
							onClick={() => {
								props.history.push(`/dashboard/overview/${single.id}`);
								window.scrollTo(0, 0);
							}}
						>
							<h3>{single.name}Hello</h3>
						</button>
						<ul
							className="Options"
							id={single.id}
							onClick={() => {
								hide();
							}}
						>
							<Link to={{ pathname: `/dashboard/overview/${single.id}` }}>
								<li>
									<img src={OverviewIcon} alt="Overview" />
									<p>Overview</p>
								</li>
							</Link>
							<Link to={{ pathname: `/dashboard/activity/${single.id}` }}>
								<li>
									<img src={ActivityIcon} alt="Activity" />
									<p>Activity</p>
								</li>
							</Link>
							<Link to={{ pathname: `/dashboard/wallet/${single.id}` }}>
								<li>
									<img src={WalletIcon} alt="Wallet" />
									<p>Wallet</p>
								</li>
							</Link>
							<Link to={{ pathname: `/dashboard/services/${single.id}` }}>
								<li>
									<img src={ServicesIcon} alt="Services" />
									<p>Services</p>
								</li>
							</Link>
							<Link to={{ pathname: `/dashboard/neighbors/${single.id}` }}>
								<li>
									<img src={NeighborsIcon} alt="Neighbors" />
									<p>Neighbors</p>
								</li>
							</Link>
							<Link to={{ pathname: `/dashboard/archive/${single.id}` }}>
								<li>
									<img src={ArchiveIcon} alt="Archive" />
									<p>Archive</p>
								</li>
							</Link>
						</ul>
					</>
				))}
		</div>
	);
}

export default Index;
