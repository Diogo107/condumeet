import React from 'react';
import './style.scss';
// Import Images
import BuildingCircleIcon from './../../assets/images/BuildingCircleIcon.png';

function index(props) {
	return (
		<div className="first-time-visit">
			<h1>Welcome</h1>
			<p>
				Create a new condominium for you and your neighbors or join them in one.
			</p>
			<div>
				<div className="card">
					<h1>Create your condominium</h1>
					<img src={BuildingCircleIcon} alt="Building" />
					<button onClick={props.nextPage}>Create</button>
				</div>
				<div className="card">
					<h1>Find your condominium</h1>
					<p>Enter the Condominium Code</p>
					<input />
					<button>Access</button>
				</div>
			</div>
		</div>
	);
}

export default index;
