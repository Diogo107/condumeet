import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import './App.scss';
//importing Components and Views
import NavBar from './Components/NavBar/index.jsx';
import LandingPage from './Views/LandingPage';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route path="*" render={(props) => <NavBar {...props} />} />
				<Route path="/" render={(props) => <LandingPage {...props} />} />
			</BrowserRouter>
		</div>
	);
}

export default App;
