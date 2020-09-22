import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { UserProvider } from './Context/UserContext.js';
import { SignUpProvider } from './Context/SignUpContext.js';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
	<React.StrictMode>
		<CookiesProvider>
			<SignUpProvider>
				<UserProvider>
					<App />
				</UserProvider>
			</SignUpProvider>
		</CookiesProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
