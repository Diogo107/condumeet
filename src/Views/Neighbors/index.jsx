import React from 'react';
import './style.scss';
//Import Images
import OptionsIcon from './../../assets/images/OptionsIcon.png';

function Index(props) {
	return (
		<div className="Neighbors__View">
			<div className="List__Contacts--Neighbors">
				<form className="search-container">
					<input type="text" id="search-bar" placeholder="Search contact" />
					<a href="#">
						<img
							className="search-icon"
							src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
						/>
					</a>
				</form>
				<div className="Neighbor__Chat--Contact">
					<img
						src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
						alt="Avatar"
					/>
					<div>
						<h6>This is name</h6>
						<p>Last Message</p>
					</div>
					<div>
						<h6>13:35</h6>
						<p>Icon</p>
					</div>
				</div>
			</div>
			<div className="Conversation__Active--Neighbors">
				<div className="Current__Chat--Top">
					<img
						src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
						alt="Avatar"
					/>
					<div>
						<h6>Name</h6>
						<p>Online</p>
					</div>
					<button>
						<img src={OptionsIcon} alt="Options" />
					</button>
				</div>
				<div className="Current__Chat--Displaying">
					<div className="Single__Message--Balloon">
						<div>
							<img
								src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
								alt="Avatar"
							/>
							<div className="Ballon__Box">
								<div></div>
								<p>aassjdasd</p>
							</div>
						</div>
						<p>21:30</p>
					</div>
				</div>
				<div className="Message__Input--Neighbors">
					<input />
					<button>
						<img
							src="https://image.flaticon.com/icons/svg/833/833397.svg"
							alt="Send"
						/>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Index;
