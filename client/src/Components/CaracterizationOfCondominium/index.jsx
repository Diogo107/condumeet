import React from 'react';
import './style.scss';
//Import Images
import Arrow from './../../assets/images/Arrow.png';

function index(props) {
	return (
		<div className="welcome__caracterization">
			<button
				onClick={() => {
					props.history.push('/signup/welcome/create/location');
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
					<li className="progress__circle progress--active progress--done ">
						<p>Location</p>
					</li>
					<li className="progress__bar progress--done"></li>
					<li className="progress__circle progress--active">
						<p>Caracterization</p>
					</li>
					<li className="progress__bar"></li>
					<li className="progress__circle">
						<p>Features</p>
					</li>
					<li className="progress__bar"></li>
					<li className="progress__circle">
						<p>Finish</p>
					</li>
				</ul>
			</div>
			<h1>CaracterizationOfCondominium</h1>
			<button
				onClick={() => {
					props.history.push('/signup/welcome/create/features');
				}}
			>
				Continue
			</button>
		</div>
	);
}

export default index;
