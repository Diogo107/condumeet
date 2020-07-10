import React, { useState } from 'react';
import './style.scss';
// Import Images
import BuildingCircleIcon from './../../assets/images/BuildingCircleIcon.png';
//Import Services
import { searchForCondominium } from './../../Sevices/Authenticathion';

function Index(props) {
	const [condominiumCode, setCondominiumCode] = useState();
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
					<button
						onClick={() => {
							props.history.push('/signup/welcome/create/name');
						}}
					>
						Create
					</button>
				</div>
				<div className="card">
					<h1>Find your condominium</h1>
					<p>Enter the Condominium Code</p>
					<input
						type="text"
						placeholder="Enter code here..."
						onChange={(e) => {
							setCondominiumCode(e.target.value);
						}}
					/>
					<button
						onClick={() => {
							searchForCondominium(condominiumCode);
							console.log(condominiumCode);
						}}
					>
						Access
					</button>
				</div>
			</div>
		</div>
	);
}

export default Index;
