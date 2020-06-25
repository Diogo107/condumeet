import React from 'react';
import './style.scss';
//Import Components and Views
import Sidebar from './../../Components/Sidebar';

function Index(props) {
	return (
		<div className="Dashboard__Overall">
			<div className="User__Sidebar">
				<Sidebar />
			</div>
			<div className="User__Dashboard">
				<h1>THIS IS THE DASHBOARD</h1>
			</div>
		</div>
	);
}

export default Index;
