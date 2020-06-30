import React from 'react';
import './style.scss';

function Index(props) {
	return (
		<div className="Neighbors__View">
			<div className="List__Contacts--Neighbors">
				<span>
					<input placeholder="Search contact" />
				</span>
				List__Contacts--Neighbors
			</div>
			<div className="Conversation__Active--Neighbors">
				Conversation__Active--Neighbors
				<div className="Message__Input--Neighbors">
					Message__Input--Neighbors
				</div>
			</div>
		</div>
	);
}

export default Index;
