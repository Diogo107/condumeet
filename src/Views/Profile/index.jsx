import React, { useState, useEffect } from 'react';
import './style.scss';
//Import Default Components
import Switch from 'react-switch';
//Import Services
import { getProfileSelf } from '../../Sevices/Profile';
import { useCookies } from 'react-cookie';
import { getCondominiums } from '../../Sevices/Condominiums';
//Import Stylling
import { Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Index(props) {
	const [cookies, setCookie] = useCookies(['user']);
	const [getEmail, setGetEmail] = useState(false);
	const [getSMS, setGetSMS] = useState(false);
	const [getMeetingsReminders, setGetMeetingsReminders] = useState(false);
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [listOfApartments, setListOfApartments] = useState();
	const [edit, setEdit] = useState(false);

	/* useEffect(() => {
		getProfile();
		console.log('.....................');
	}); */

	const getProfile = async () => {
		const profileResult = await getProfileSelf(cookies.user.token);
		setName(profileResult.data.name);
		setEmail(profileResult.data.email);
		const apartmentsResult = await getCondominiums(cookies.user.token);
		setListOfApartments(apartmentsResult.data);
		console.log(apartmentsResult);
	};
	return (
		<div className="Profile__View">
			<div className="White__Box First__Card">
				<img
					src="https://i.pinimg.com/originals/8b/da/ca/8bdaca81d5ddbaeb92b61d6b5787d866.jpg"
					alt="Profile Image"
				/>
				<div>
					{(!edit && (
						<>
							<p>--{name}--</p>
							<p>--{email}--</p>
							<p>Password ******** </p>
						</>
					)) || (
						<>
							<Form.Control type="text" value={name} placeholder="Name" />
							<Form.Control type="text" value={email} placeholder="Email" />
							<Form.Control type="password" placeholder="Password" />
							<Form.Control type="password" placeholder="Confirm Password" />
						</>
					)}
				</div>
				<button
					onClick={() => {
						setEdit(!edit);
					}}
				>
					Edit
				</button>
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
					<button id="Delete__Account" onClick={}>
						Delete Account
					</button>
				</div>
				<div className="White__Box Apartments__List">
					<h4>My Apartments</h4>
					<Table responsive striped borderless hover={true} size="sm">
						<thead>
							<tr>
								<th>Name</th>
								<th>Location</th>
								<th>Leave</th>
							</tr>
						</thead>
						<tbody>
							{listOfApartments &&
								listOfApartments.map((single) => (
									<tr>
										{console.log(single)}
										<td>{single.name}</td>
										<td>{single.locality}</td>
										<td>
											<button
												onClick={() => {
													console.log('erase');
												}}
											>
												x
											</button>
										</td>
									</tr>
								))}
						</tbody>
					</Table>
				</div>
			</div>
		</div>
	);
}

export default Index;
