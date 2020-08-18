import React from 'react';
import './style.scss';
//Import Services
import { Switch, Route } from 'react-router-dom';
//Import Components and Views
import Sidebar from './../../Components/Sidebar';
import Overview from './../Overview';
import Wallet from './../Wallet';
import Archive from './../Archive';
import Activity from './../Activity';
import Neighbors from './../Neighbors';

function Index(props) {
	return (
		<div className="Dashboard__Overall">
			<div className="User__Sidebar Phone__Hide">
				<Switch>
					<Route
						path="/dashboard/:view/:id"
						render={(props) => <Sidebar {...props} />}
					/>
					<Route
						path="/dashboard/:view"
						render={(props) => <Sidebar {...props} />}
					/>
				</Switch>
			</div>
			<div className="User__Dashboard">
				<Switch>
					<Route
						path="/dashboard/overview/:id"
						render={(props) => <Overview {...props} />}
					/>
					<Route
						path="/dashboard/wallet/:id"
						render={(props) => <Wallet {...props} />}
					/>
					<Route
						path="/dashboard/archive"
						render={(props) => <Archive {...props} />}
					/>
					<Route
						path="/dashboard/activity"
						render={(props) => <Activity {...props} />}
					/>
					<Route
						path="/dashboard/neighbors"
						render={(props) => <Neighbors {...props} />}
					/>
				</Switch>
			</div>
		</div>
	);
}

export default Index;
