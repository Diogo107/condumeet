import React from 'react';
import './style.scss';

function index(props) {
	return (
		<div className="welcome__feactures">
			<div>
				<h1>Free</h1>
				<h1 className="color-lightgreen">0 €</h1>
				<ul>
					<li>8 apartments</li>
					<li>Expenses Registration</li>
					<li>Neighbors Chat</li>
					<li>PDF Archive</li>
				</ul>
				<button className="background-lightpurple">Choose</button>
			</div>
			<div>
				<h1>Premium</h1>
				<h1 className="color-lightgreen">
					35 €<small> /year</small>
				</h1>
				<ul>
					<li>Unlimited apartments</li>
					<li>Expenses Registration</li>
					<li>Automatic Payments</li>
					<li>Neighbors Chat</li>
					<li>PDF Archive</li>
					<li>Video Archive</li>
				</ul>
				<button className="background-lightpurple">Choose</button>
			</div>
		</div>
	);
}

export default index;
