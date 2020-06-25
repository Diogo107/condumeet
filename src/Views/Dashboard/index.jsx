import React from 'react';
import './style.scss';
//Import Services
import { Switch, Route } from 'react-router-dom';
//Import Components and Views
import Sidebar from './../../Components/Sidebar';
import Overview from './../Overview';

function Index(props) {
	return (
		<div className="Dashboard__Overall">
			<div className="User__Sidebar">
				<Sidebar />
			</div>
			<div className="User__Dashboard">
				<Switch>
					<Route
						path="/dashboard/overview"
						render={(props) => <Overview {...props} />}
					/>
				</Switch>
			</div>
		</div>
	);
}

export default Index;
