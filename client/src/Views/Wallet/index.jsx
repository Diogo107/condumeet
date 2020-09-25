import React from 'react';
import './style.scss';
//Import Images
import ArrowGreen from './../../assets/images/ArrowGreen.png';
import AddIcon from './../../assets/images/AddIcon.png';
import DownloadIconExist from './../../assets/images/DownloadIconExist.png';
import DownloadIconDontExist from './../../assets/images/DownloadIconDontExist.png';
import OptionsIcon from './../../assets/images/OptionsIcon.png';
//Import Components and Views
import BankChart from '../../Components/Charts/BankChart';
import IncomeChart from '../../Components/Charts/IncomeChart';
import ExpensesChart from '../../Components/Charts/ExpensesChart';
import ExpensesDoughnut from '../../Components/Charts/ExpensesDoughnut';
import BalanceLineChart from './../../Components/Charts/BalanceLineChart';

function index(props) {
	setTimeout(() => {
		var x = document.getElementsByClassName(
			'BankIncomeExpenses__Cards--Wallet'
		);
		if (x.length > 0) {
			let final = x[0].offsetWidth - 340 - (x[0].offsetWidth - 340 * 3) / 2;
			document.getElementById(
				'Balance__Card--Width'
			).style.width = `${final}px`;
		}
	}, 5);

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
			<section className="Charts__Balance--Wallet">
				<div id="Balance__Card--Width">
					<h1>Balance</h1>
					<BalanceLineChart />
				</div>
				<div>
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
			</section>
			<section className="List__Section--Wallet">
				<div>
					<h3>Transactions</h3>
					<button
						onClick={() => {
							console.log('Hello');
							props.history.push(
								`/dashboard/wallet/transaction/${props.match.params.id}`
							);
						}}
					>
						<img src={AddIcon} alt="Add" />
					</button>
				</div>
				<div>
					<form>
						<input type="date" placeholder="SELECT A DATE" />
						<select>
							<option>CATEGORY</option>
							<option>Option 1</option>
							<option>Option 2</option>
						</select>
					</form>
				</div>
				<table>
					<thead>
						<tr>
							<th>Date</th>
							<th>Category</th>
							<th>Type</th>
							<th>Amount</th>
							<th>Status</th>
							<th className="Phone__Hide">File</th>
							<th className="Phone__Hide"></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Lorem Ipsum</td>
							<td>Lorem Ipsum</td>
							<td>Lorem Ipsum</td>
							<td>Lorem Ipsum</td>
							<td>Lorem Ipsum</td>
							<td className="Phone__Hide">
								<img src={DownloadIconDontExist} alt="No Atachment" />
							</td>
							<td className="Phone__Hide">
								<img src={OptionsIcon} alt="Options" />
							</td>
						</tr>
						<tr>
							<td>Lorem Ipsum</td>
							<td>Lorem Ipsum</td>
							<td>Lorem Ipsum</td>
							<td>Lorem Ipsum</td>
							<td>Lorem Ipsum</td>
							<td className="Phone__Hide">
								<img src={DownloadIconDontExist} alt="No Atachment" />
							</td>
							<td className="Phone__Hide">
								<img src={OptionsIcon} alt="Options" />
							</td>
						</tr>
						<tr>
							<td>Lorem Ipsum</td>
							<td>Lorem Ipsum</td>
							<td>Lorem Ipsum</td>
							<td>Lorem Ipsum</td>
							<td>Lorem Ipsum</td>
							<td className="Phone__Hide">
								<img src={DownloadIconExist} alt="No Atachment" />
							</td>
							<td className="Phone__Hide">
								<img src={OptionsIcon} alt="Options" />
							</td>
						</tr>
					</tbody>
				</table>
			</section>
		</div>
	);
}

export default index;
