import React, { Component } from 'react';
import './style.scss';
//Import Images
import FacePurple from './../../assets/images/FacePurple.png';
import AddUser from './../../assets/images/AddUser.png';
import CloseButton from './../../assets/images/CloseButton.png';
import ShareIcon from './../../assets/images/ShareIcon.png';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [
				{ email: 'diogo@diogo' },
				{ email: 'Dina@dina' },
				{ email: 'joão@joão' },
			],
		};
	}
	render() {
		return (
			<div className="welcome__invites">
				<h1>Call your Neightbors</h1>
				<h4>Your condominium code.</h4>
				<p>Share the code with your neighbours or send them a invite.</p>
				<div className="condomium-code">
					<h5>1234</h5>
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
					<form>
						<input placeholder="Your neighbor email" />
						<button>
							<img src={AddUser} alt="Add Friend" />
						</button>
					</form>
				</div>
				{this.state.list.map((single) => (
					<div className="neighbor-email">
						<img
							src={FacePurple}
							alt="Face"
							style={{ width: '25px', height: '25px' }}
						/>
						<div>
							<p>{single.email}</p>
							<button>
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
				<button id="button__continue">Continue</button>
			</div>
		);
	}
}

export default index;
