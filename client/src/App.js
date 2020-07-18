import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//importing Components and Views
import NavBar from './Components/NavBar';
import LandingPage from './Views/LandingPage';
import SignUp from './Views/SignUp';
import Welcome from './Views/Welcome';
import Dashboard from './Views/Dashboard';

function App(props) {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route
						path="/signup/welcome"
						render={(props) => <Welcome {...props} />}
					/>
					<Route path="/signup" render={(props) => <SignUp {...props} />} />
					<Route path="*" render={(props) => <NavBar {...props} />} />
				</Switch>
				<Route path="/dashboard" render={(props) => <Dashboard {...props} />} />

				<Route path="/" exact render={(props) => <LandingPage {...props} />} />
			</BrowserRouter>
		</div>
	);
}

export default App;
