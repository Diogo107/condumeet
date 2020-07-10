import React, { useContext } from 'react';
import './style.scss';
//Import Images
import Arrow from './../../assets/images/Arrow.png';
import CheckGreen from './../../assets/images/CheckGreen.png';
//Import Context
import { SignUpContext } from './../../Context/SignUpContext.js';
//Import Services
import { condominiumCreated } from './../../Sevices/Authenticathion.js';

function Index(props) {
	const [signUpForm, setSignUpForm] = useContext(SignUpContext);
	return (
		<div>
			<button
				onClick={() => {
					props.history.push('/signup/welcome/create/invites');
				}}
			>
				<img src={Arrow} alt="Arrow" />
			</button>
			<div className="welcome__finish">
				<img src={CheckGreen} alt="Confirmation" />
				<h1> Welcome to "name of the building"</h1>
				<p>Condominium code</p>
				<h5>1234</h5>
				<button
					onClick={() => {
						console.log(signUpForm);
						condominiumCreated(signUpForm);
						props.history.push('/dashboard/overview');
					}}
				>
					Enter Condominium
				</button>
			</div>
		</div>
	);
}

export default Index;
