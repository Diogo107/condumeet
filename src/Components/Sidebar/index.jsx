import React, { useEffect, useState } from 'react';
import './style.scss';
//Import Services
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
//Import Images
import OverviewIcon from './../../assets/images/sidebar__icons/OverviewIcon.png';
import ActivityIcon from './../../assets/images/sidebar__icons/ActivityIcon.png';
import ArchiveIcon from './../../assets/images/sidebar__icons/ArchiveIcon.png';
import NeighborsIcon from './../../assets/images/sidebar__icons/NeighborsIcon.png';
import ServicesIcon from './../../assets/images/sidebar__icons/ServicesIcon.png';
import WalletIcon from './../../assets/images/sidebar__icons/WalletIcon.png';
import { getCondominiums } from '../../Sevices/Condominiums';

function Index(props) {
	const [cookies, setCookie] = useCookies(['user']);
	const [listOfApartments, setListOfApartments] = useState();
	useEffect(async () => {
		const token = cookies.user.token;
		const result = await getCondominiums(token);
		console.log(result.data);
		setListOfApartments(result.data);
	}, []);
	return (
		<div className="Sidebar__Component">
			<div className="Purple__Box--Sidebar">
				<h3>Saint Bernardo</h3>
			</div>
			<ul>
				<Link to="/dashboard/overview">
					<li>
						<img src={OverviewIcon} alt="Overview" />
						<p>Overview</p>
					</li>
				</Link>
				<Link to="/dashboard/activity">
					<li>
						<img src={ActivityIcon} alt="Activity" />
						<p>Activity</p>
					</li>
				</Link>
				<Link to="/dashboard/wallet">
					<li>
						<img src={WalletIcon} alt="Wallet" />
						<p>Wallet</p>
					</li>
				</Link>
				<Link to="/dashboard/services">
					<li>
						<img src={ServicesIcon} alt="Services" />
						<p>Services</p>
					</li>
				</Link>
				<Link to="/dashboard/neighbors">
					<li>
						<img src={NeighborsIcon} alt="Neighbors" />
						<p>Neighbors</p>
					</li>
				</Link>
				<Link to="/dashboard/archive">
					<li>
						<img src={ArchiveIcon} alt="Archive" />
						<p>Archive</p>
					</li>
				</Link>
			</ul>
		</div>
	);
}

export default Index;
