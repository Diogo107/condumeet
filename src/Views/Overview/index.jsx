import React from 'react';
import './style.scss';
//Import Images
import NeighborsIcon from './../../assets/images/overview__cads/NeighborsIcon.png';
import NotificationIcon from './../../assets/images/overview__cads/NotificationIcon.png';
import ServicesIcon from './../../assets/images/overview__cads/ServicesIcon.png';
import WalletIcon from './../../assets/images/overview__cads/WalletIcon.png';
import ArrowGreen from './../../assets/images/ArrowGreen.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
//Import Services
import Chart from './../../../node_modules/chart.js';
//Import Components and Views
import BankChart from '../../Components/Charts/BankChart';
import IncomeChart from '../../Components/Charts/IncomeChart';
import ExpensesChart from '../../Components/Charts/ExpensesChart';

function Index(props) {
	setTimeout(() => {
		var ctx = document.getElementById('myChart').getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'doughnut',
			data: {
				labels: ['Red', 'Blue', 'Yellow'],
				datasets: [
					{
						label: '# of Votes',
						data: [12, 19, 3],
						backgroundColor: [
							'rgba(179,136,255, 0.8)',
							'rgba(49,27,146, 0.8)',
							'rgba(98,0,234, 0.8)',
						],
						borderColor: [
							'rgba(179,136,255, 1)',
							'rgba(49,27,146, 1)',
							'rgba(98,0,234, 1)',
						],
						borderWidth: 1,
						hoverBorderWidth: 8,
						weight: 0.1,
					},
				],
			},
			options: {
				cutoutPercentage: 70,
				legend: {
					display: false,
					position: 'bottom',
					align: 'start',
				},
				scales: {},
			},
		});
	}, 10);

	return (
		<div className="Overview__View">
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
				<div>
					<div id="Title__Card--Overview">
						<h5>Expenses by Category</h5>
						<p>This Month</p>
					</div>
					<canvas id="myChart"></canvas>
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
			<h1>THIS IS THE OVERVIEW</h1>
		</div>
	);
}

export default Index;
