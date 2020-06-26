import React from 'react';
import './style.scss';
//Import Images
import ArrowGreen from './../../assets/images/ArrowGreen.png';
//Import Components and Views
import BankChart from '../../Components/Charts/BankChart';
import IncomeChart from '../../Components/Charts/IncomeChart';
import ExpensesChart from '../../Components/Charts/ExpensesChart';

function index(props) {
	return (
		<div className="Wallet__View">
			<section className="BankIncomeExpenses__Cards--Wallet">
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

export default index;
