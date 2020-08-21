import React, { useState } from 'react';
import './style.scss';
//Import Default Componetnts
import Switch from 'react-switch';

function Index(props) {
	const [getEmail, setGetEmail] = useState(false);
	const [getSMS, setGetSMS] = useState(false);
	const [getMeetingsReminders, setGetMeetingsReminders] = useState(false);

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
					<h4>Notifications</h4>
					<label>
						<span>Get Emails</span>
						<Switch
							onChange={() => {
								setGetEmail(!getEmail);
							}}
							checked={getEmail}
						/>
					</label>
					<label>
						<span>Get SMS</span>
						<Switch
							onChange={() => {
								setGetSMS(!getSMS);
							}}
							checked={getSMS}
						/>
					</label>
					<label>
						<span>Get Meeting Reminders</span>
						<Switch
							onChange={() => {
								setGetMeetingsReminders(!getMeetingsReminders);
							}}
							checked={getMeetingsReminders}
						/>
					</label>
				</div>
				<div className="White__Box">List of houses</div>
			</div>
		</div>
	);
}

export default Index;
