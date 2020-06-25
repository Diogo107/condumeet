import React from 'react';
import './style.scss';
//Import Images
import Arrow from './../../assets/images/Arrow.png';
import CheckGreen from './../../assets/images/CheckGreen.png';

function index(props) {
	return (
		<div>
			<button>
				<img src={Arrow} alt="Arrow" />
			</button>
			<div className="welcome__finish">
				<img src={CheckGreen} alt="Confirmation" />
				<h1> Welcome to "name of the building"</h1>
				<p>Condominium code</p>
				<h5>1234</h5>
				<button
					onClick={() => {
						props.history.push('/dashboard/overview');
					}}
				>
					Enter Condominium
				</button>
			</div>
		</div>
	);
}

export default index;
