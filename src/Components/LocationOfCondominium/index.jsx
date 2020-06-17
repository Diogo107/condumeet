import React from 'react';
import './style.scss';

function index(props) {
	return (
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
			<button>Continue</button>
		</div>
	);
}

export default index;
