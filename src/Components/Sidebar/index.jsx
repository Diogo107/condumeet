import React, { useEffect, useState } from 'react';
import './style.scss';
//Import Services
import { useCookies } from 'react-cookie';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
} from 'react-router-dom';
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
	const [currentProps, setCurrentProps] = useState();
	useEffect(async () => {
		const token = cookies.user.token;
		const result = await getCondominiums(token);
		console.log(result.data[0]);
		console.log(props);
		props.history.push(`/dashboard/overview/${result.data[0].id}`);
		setListOfApartments(result.data);
	}, []);
	useEffect(() => {
		console.log(props);
		if (props.location.pathname !== currentProps) {
			console.log('Hello');
			setCurrentProps(props.location);
			showSideOptions();
		} else {
		}
	});
	let { id } = useParams();
	const showSideOptions = () => {
		const options = document.getElementsByClassName('Options');
		console.log(id);
		/* for (let i = 0; i < options.length; i++) {
			if (options[i].__reactInternalInstance$pmw8rie3cr.key == props.location) {
				options[i].style.display = 'hide';
			}
		} */
		console.log(options);
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
							}}
						>
							<h3>Saint Bernardo</h3>
						</button>
						<ul className="Options" key={single.id}>
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
							<Link to="/dashboard/services/${single.id}">
								<li>
									<img src={ServicesIcon} alt="Services" />
									<p>Services</p>
								</li>
							</Link>
							<Link to="/dashboard/neighbors/${single.id}">
								<li>
									<img src={NeighborsIcon} alt="Neighbors" />
									<p>Neighbors</p>
								</li>
							</Link>
							<Link to="/dashboard/archive/${single.id}">
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
