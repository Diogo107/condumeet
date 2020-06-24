import React, { Component, useState } from 'react';
import './style.scss';
//Import Images
import Arrow from './../../assets/images/Arrow.png';
import FacePurple from './../../assets/images/FacePurple.png';
import AddUser from './../../assets/images/AddUser.png';
import CloseButton from './../../assets/images/CloseButton.png';
import ShareIcon from './../../assets/images/ShareIcon.png';
import { validateEmail } from './../../Sevices/APIs.js';
//Import Services
var quickemailverification = require('quickemailverification')
	.client(process.env.QUICK_EMAIL_VERIFICATION_API_KEY)
	.quickemailverification();

function Index(props) {
	const [neighborsList, setNeighborsList] = useState([]);
	const [neighbor, setNeighbor] = useState();

	return (
		<div>
			<button
				onClick={() => {
					this.props.history.push('/signup/welcome/create/feactures');
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
					<li className="progress__circle progress--active progress--done">
						<p>Feactures</p>
					</li>
					<li className="progress__bar progress--done"></li>
					<li className="progress__circle progress--active">
						<p>Invites</p>
					</li>
					<li className="progress__bar"></li>
					<li className="progress__circle">
						<p>Finish</p>
					</li>
				</ul>
			</div>
			<div className="welcome__invites">
				<h1>Call your Neightbors</h1>
				<h4>Your condominium code.</h4>
				<p>Share the code with your neighbours or send them a invite.</p>
				<div className="condomium-code">
					<h5>1234</h5>
					{/* Clicar na imagem partilhar para copiar para o clipboard */}
					<img
						src={ShareIcon}
						alt="Share Icon"
						style={{ width: '24px', height: '24px' }}
					/>
				</div>
				<div className="invite-neighbor">
					<img
						src={FacePurple}
						alt="Face"
						style={{ width: '40px', height: '40px' }}
					/>
					<form
						onSubmit={async (event) => {
							event.preventDefault();
							console.log(event.target[0].value);
							const email = event.target[0].value;
							const result = await validateEmail(email);
							console.log(result);
							if (result == 'valid') {
								console.log('inside');
								setNeighborsList([...neighborsList, email]);
								setNeighbor('');
							}
						}}
					>
						<input
							placeholder="Your neighbor email"
							value={neighbor}
							onChange={(event) => {
								console.log(event.target.value);
								setNeighbor(event.target.value);
							}}
						/>
						<button>
							<img src={AddUser} alt="Add Friend" />
						</button>
					</form>
				</div>
				{neighborsList.map((single) => (
					<div className="neighbor-email">
						<img
							src={FacePurple}
							alt="Face"
							style={{ width: '25px', height: '25px' }}
						/>
						<div>
							<p>{single}</p>
							<button
								onClick={() => {
									let list = neighborsList.filter((selected) => {
										return selected !== single;
									});
									setNeighborsList(list);
								}}
							>
								<img
									src={CloseButton}
									alt="Face"
									style={{ width: '16px', height: '16px' }}
								/>
							</button>
						</div>
					</div>
				))}
				<button id="button__invite-all" className="background-lightpurple">
					Invite All
				</button>
				<button
					id="button__continue"
					onClick={() => {
						props.history.push('/signup/welcome/created');
					}}
				>
					Continue
				</button>
			</div>
		</div>
	);
}

export default Index;
