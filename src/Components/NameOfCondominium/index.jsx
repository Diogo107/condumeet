import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
//Import Images
import Arrow from './../../assets/images/Arrow.png';

function index(props) {
	return (
		<div>
			<button
				onClick={() => {
					console.log(props);
					props.history.push('/signup/welcome');
				}}
			>
				<img src={Arrow} alt="Arrow" />
			</button>
			<div className="progress-bar">
				<h1>Create your condominium.</h1>
				<ul className="progress">
					<li className="progress__circle  progress--active">
						<p>Name</p>
					</li>
					<li className="progress__bar "></li>
					<li className="progress__circle ">
						<p>Location</p>
					</li>
					<li className="progress__bar "></li>
					<li className="progress__circle">
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
			<div className="welcome__name">
				<h1>Getting to know your Condominium</h1>
				<h5>What’s the name of this condominium?</h5>
				<p>A short name that people caracterizes your condominium.</p>
				<input />
				<Link to="/signup/welcome/create/location"></Link>
				<button
					onClick={() => {
						props.history.push('/signup/welcome/create/location');
					}}
				>
					CONTINUE
				</button>
			</div>
		</div>
	);
}

export default index;
