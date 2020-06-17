import React from 'react';
import './style.scss';

function index(props) {
	return (
		<div className="welcome__name">
			<h1>Getting to know your Condominium</h1>
			<h5>What’s the name of this condominium?</h5>
			<p>A short name that people caracterizes your condominium.</p>
			<input />
			<button>CONTINUE</button>
		</div>
	);
}

export default index;
