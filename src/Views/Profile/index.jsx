import React from 'react';
import './style.scss';

function Index(props) {
	return (
		<div className="Profile__View">
			<div className="White__Box First__Card">
				<img
					src="https://i.pinimg.com/originals/8b/da/ca/8bdaca81d5ddbaeb92b61d6b5787d866.jpg"
					alt="Profile Image"
				/>
				<div>
					<p>Name</p>
					<p>Email</p>
				</div>
				<button>Edit</button>
			</div>
			<div className="Second__Card">
				<div className="White__Box">
					<span>
						<p>Escolhe</p>
					</span>
					Configurações (Emails, sms e tal)
				</div>
				<div className="White__Box">List of houses</div>
			</div>
		</div>
	);
}

export default Index;
