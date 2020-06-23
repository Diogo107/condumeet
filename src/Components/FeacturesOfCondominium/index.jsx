import React, { useState } from 'react';
import './style.scss';
//Import Images
import Arrow from './../../assets/images/Arrow.png';

function Index(props) {
	const [option, setOption] = useState();
	return (
		<div>
			<button
				onClick={() => {
					console.log(props);
					props.history.push('/signup/welcome/create/caracterization');
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
					<li className="progress__circle progress--done progress--active">
						<p>Caracterization</p>
					</li>
					<li className="progress__bar progress--done"></li>
					<li className="progress__circle progress--active">
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
			<div className="welcome__feactures">
				<div id="freemium__card">
					<h1>Free</h1>
					<h1 className="color-lightgreen">0 €</h1>
					<ul>
						<li>8 apartments</li>
						<li>Expenses Registration</li>
						<li>Neighbors Chat</li>
						<li>PDF Archive</li>
					</ul>
					<button
						className="background-lightpurple"
						onClick={() => {
							setOption('Freemium');
							document.getElementById('freemium__card').style.opacity = '1';
							document.getElementById('premium__card').style.opacity = '0.5';

							//props.history.push('/signup/welcome/create/invites');
						}}
					>
						Choose
					</button>
				</div>
				<div id="premium__card">
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
					<button
						className="background-lightpurple"
						onClick={() => {
							setOption('Premium');
							document.getElementById('freemium__card').style.opacity = '0.5';
							document.getElementById('premium__card').style.opacity = '1';
							//props.history.push('/signup/welcome/create/invites');
						}}
					>
						Choose
					</button>
				</div>
			</div>
			{option && (
				<button
					className="background-lightpurple"
					onClick={() => {
						props.history.push('/signup/welcome/create/invites');
						props.selectPremiumVersion(option);
					}}
				>
					Choose
				</button>
			)}
		</div>
	);
}

export default Index;
