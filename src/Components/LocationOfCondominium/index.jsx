import React from 'react';
import './style.scss';
//Import Images
import Arrow from './../../assets/images/Arrow.png';

function index(props) {
	console.log(props);
	return (
		<div>
			<button
				onClick={() => {
					console.log(props);
					props.history.push('/signup/welcome/create/name');
				}}
			>
				<img src={Arrow} alt="Arrow" />
			</button>
			<div className="progress-bar">
				<h1>Create your condominium.</h1>
				<ul className="progress">
					<li className="progress__circle progress--done progress--active">
						<p className="purple-text">Name</p>
					</li>
					<li className="progress__bar progress--done"></li>
					<li className="progress__circle progress--active ">
						<p>Location</p>
					</li>
					<li className="progress__bar"></li>
					<li className="progress__circle ">
						<p>Caracterization</p>
					</li>
					<li className="progress__bar"></li>
					<li className="progress__circle">
						<p>Feactures</p>
					</li>
					<li className="progress__bar"></li>
					<li className="progress__circle">
						<p>Invites</p>
					</li>
					<li className="progress__bar"></li>
					<li className="progress__circle">
						<p>Finish</p>
					</li>
				</ul>
			</div>
			<div className="welcome__location">
				<h1>Find your home</h1>
				<div>
					<input placeholder="Search" />
					<img
						src="https://image.flaticon.com/icons/svg/483/483356.svg"
						alt="Magnifying glass"
						style={{ width: '20px', height: '20px' }}
					/>
				</div>
				<h4>(Colocar aqui o api do maps)</h4>
				<button
					onClick={() => {
						props.history.push('/signup/welcome/create/caracterization');
					}}
				>
					Continue
				</button>
			</div>
		</div>
	);
}

export default index;
