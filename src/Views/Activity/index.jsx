import React, { useState } from 'react';
import './style.scss';
//Import Images
import PdfIcon from './../../assets/images/PdfIcon.png';
import OptionsIcon from './../../assets/images/OptionsIcon.png';
//Import Services
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

function Index(props) {
	const [date, setDate] = useState(new Date());
	return (
		<div className="Activity__View">
			<div className="Single__Activity--Activity">
				<h5>May 20, 2020</h5>
				<div>
					<p>4 min ago</p>
					<div>
						<h4>You paid a Energy Bill</h4>
						<div className="Bill__Card--Archive">
							<img src={PdfIcon} alt="PDF Image" />
							<div>
								<h3>Bill Gas Energy.pdf</h3>
								<div>
									<p>Jan 16, 2020</p>
									<p>
										<small>|</small>
									</p>
									<p>14.1Mb</p>
								</div>
							</div>
						</div>
					</div>
					<button>
						<img src={OptionsIcon} alt="Options" />
					</button>
				</div>
				<div>
					<p>4 min ago</p>
					<div>
						<h4>You paid a Energy Bill</h4>
						<div className="Bill__Card--Archive">
							<img src={PdfIcon} alt="PDF Image" />
							<div>
								<h3>Bill Gas Energy.pdf</h3>
								<div>
									<p>Jan 16, 2020</p>
									<p>
										<small>|</small>
									</p>
									<p>14.1Mb</p>
								</div>
							</div>
						</div>
					</div>
					<button>
						<img src={OptionsIcon} alt="Options" />
					</button>
				</div>
			</div>
			<div className="Calendar__Component--Activity">
				{console.log(moment(date).format('YYYY'))}
				<div>
					<p>{moment(date).format('YYYY')}</p>
					<h3>{moment(date).format('ddd, D MMM')}</h3>
				</div>
				<Calendar onChange={setDate} value={date} />
			</div>
		</div>
	);
}

export default Index;
