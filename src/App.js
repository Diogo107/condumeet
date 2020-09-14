import React, { useEffect, useContext } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
//Iimporting Components and Views
import NavBar from './Components/NavBar';
import LandingPage from './Views/LandingPage';
import SignUp from './Views/SignUp';
import Login from './Views/Login';
import Welcome from './Views/Welcome';
import Dashboard from './Views/Dashboard';
//Importing Services
import { UserContext } from './Context/UserContext';
import Cookies from './../node_modules/js-cookie';

function App(props) {
	/* const [user, setUser] = useContext(UserContext);
	useEffect(() => {
		checkUserCookies();
	}, []);
	const checkUserCookies = async () => {
		const result = await Cookies.get('user');
		if (result) {
			console.log(JSON.parse(result));
			setUser(JSON.parse(result).user);
			console.log(props);
			//window.location.replace('/dashboard/overview');
			console.log('There was a user token already');
		} else {
			console.log('No user token');
			Redirect('/login');
		}
	}; */
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					{/* <Route
						path="/signup/welcome"
						render={(props) => <Welcome {...props} />}
					/>
					<Route path="/signup" render={(props) => <SignUp {...props} />} />
					<Route path="/login" render={(props) => <Login {...props} />} />
					<Route path="*" render={(props) => <NavBar {...props} />} /> */}
				</Switch>
				<Route path="/dashboard" render={(props) => <Dashboard {...props} />} />
				<Route path="/" exact render={(props) => <LandingPage {...props} />} />
			</BrowserRouter>
		</div>
	);
}

export default App;
