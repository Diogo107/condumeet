import React, { useContext, useEffect } from 'react';
import './style.scss';
//Import Images
import NeighborsIcon from './../../assets/images/overview__cads/NeighborsIcon.png';
import NotificationIcon from './../../assets/images/overview__cads/NotificationIcon.png';
import ServicesIcon from './../../assets/images/overview__cads/ServicesIcon.png';
import WalletIcon from './../../assets/images/overview__cads/WalletIcon.png';
import ArrowGreen from './../../assets/images/ArrowGreen.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
//Import Components and Views
import ExpensesDoughnut from '../../Components/Charts/ExpensesDoughnut';
import BankChart from '../../Components/Charts/BankChart';
import IncomeChart from '../../Components/Charts/IncomeChart';
import ExpensesChart from '../../Components/Charts/ExpensesChart';
//Import Services
import { useCookies } from 'react-cookie';
import { validateEmail } from './../../Sevices/APIs.js';
import { UserContext } from '../../Context/UserContext';
import { getCondominium } from './../../Sevices/Condominiums';

function Index(props) {
	const [user, setUser] = useContext(UserContext);
	const [cookies, setCookie] = useCookies(['user']);
	setTimeout(() => {
		var x = document.getElementsByClassName('Boxes__Section');
		if (x.length > 0) {
			let final = (x[0].offsetWidth - 4 * 247) / 3;
			document.getElementById('Pie__Chart').style.marginRight = `${final}px`;
		}
	}, 5);
	useEffect(async () => {
		const result = await getCondominium(
			props.match.params.id,
			cookies.user.token
		);
	}, []);
	return (
		<div className="Overview__View">
			<button
				onClick={() => {
					props.history.push(`/dashboard/wallet/11`);
				}}
			>
				Teste
			</button>
			<section className="Comunication__Overview">
				<div>
					<h2>Comunication</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</div>
				<div>
					<p>2020</p>
					<h1>Wed, 10 May</h1>
				</div>
			</section>
			<section className="Boxes__Section">
				<div>
					<h6>New Neightbors</h6>
					<img src={NeighborsIcon} alt="Neighbors Icon" />
					<h5>5</h5>
				</div>
				<div>
					<h6>Services</h6>
					<img src={ServicesIcon} alt="Services Icon" />
					<h5>2</h5>
				</div>
				<div>
					<h6>Wallet</h6>
					<img src={WalletIcon} alt="Wallet Icon" />
					<h5>2</h5>
				</div>
				<div>
					<h6>Notifications</h6>
					<img src={NotificationIcon} alt="Notifications Icon" />
					<h5>2</h5>
				</div>
			</section>
			<section className="PieChartAndNeighbors__Section">
				<div id="Pie__Chart">
					<div id="Title__Card--Overview">
						<h5>Expenses by Category</h5>
						<p>This Month</p>
					</div>
					<ExpensesDoughnut />
					<div id="Legend__Card--Overview">
						<ul>
							<li>
								<div style={{ backgroundColor: '#311b92' }}></div>
								Maintance
							</li>
							<li>
								<div style={{ backgroundColor: '#be96ec' }}></div>Ensurance
							</li>
							<li>
								<div style={{ backgroundColor: '#5a49a8' }}></div>Bills
							</li>
						</ul>
					</div>
				</div>
				<div></div>
			</section>
			<section className="Change__Card--Overview">
				<div>
					<div>
						<h5>Bank</h5>
						<h6>This Month</h6>
						<h1>555 €</h1>
						<div>
							<p style={{ color: '#00C853' }}>+8%</p>
							<img src={ArrowGreen} alt="Arrow" />
						</div>
					</div>

					<BankChart />
				</div>
				<div>
					<div>
						<h5>Income</h5>
						<h6>This Month</h6>
						<h1>555 €</h1>
						<div>
							<p style={{ color: '#00C853' }}>-2%</p>
							<img src={ArrowGreen} alt="Arrow" />
						</div>
					</div>
					<IncomeChart />
				</div>
				<div>
					<div>
						<h5>Expenses</h5>
						<h6>This Month</h6>
						<h1>555 €</h1>
						<div>
							<p style={{ color: '#00C853' }}>+5%</p>
							<img src={ArrowGreen} alt="Arrow" />
						</div>
					</div>
					<ExpensesChart />
				</div>
			</section>
		</div>
	);
}

export default Index;
