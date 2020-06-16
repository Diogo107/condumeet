import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import './App.scss';
//importing Components
import NavBar from './Components/NavBar/index.jsx';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route path="*" render={(props) => <NavBar {...props} />} />
			</BrowserRouter>
		</div>
	);
}

export default App;
