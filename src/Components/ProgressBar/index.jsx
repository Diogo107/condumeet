import React from 'react';
import './style.scss';

function index(props) {
	console.log('progress', props);
	return (
		<div className="progress-bar">
			<h1>Create your condominium.</h1>
			<ul className="progress">
				<li className="progress__circle progress--done progress--active">
					<p>Name</p>
				</li>
				<li className="progress__bar progress--done"></li>
				<li className="progress__circle progress--active progress--done">
					<p>Location</p>
				</li>
				<li className="progress__bar progress--done"></li>
				<li className="progress__circle progress--active">
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
	);
}

export default index;
