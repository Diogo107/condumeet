import React, { Component } from 'react';
import './style.scss';
import { Switch, Route } from 'react-router-dom';
//Import images
import Logo from './../../assets/images/LogoWhite.png';
import Arrow from './../../assets/images/Arrow.png';
//Import Components and Views
import FirstTimeVisit from './../../Components/FirstTimeVisit';
import ProgressBar from './../../Components/ProgressBar';
import NameOfCondominium from './../../Components/NameOfCondominium';
import LocationOfCondominium from './../../Components/LocationOfCondominium';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 0,
		};
	}

	nextPage = () => {
		console.log('Next Page');
		this.setState({ page: this.state.page + 1 });
	};

	previousPage = () => {
		console.log('Previous Page');
		this.setState({ page: this.state.page - 1 });
	};

	render() {
		return (
			<div className="welcome">
				<img src={Logo} alt="Logo" />
				<div className="container">
					<button onClick={this.previousPage}>
						<img src={Arrow} alt="Arrow" />
					</button>
					<Switch>
						<Route
							path="/signup/welcome/create"
							render={(props) => (
								<>
									<ProgressBar />
									<Switch>
										<Route
											path="/signup/welcome/create/name"
											render={(props) => <NameOfCondominium />}
										/>
										<Route
											path="/signup/welcome/create/name"
											render={(props) => <LocationOfCondominium />}
										/>
									</Switch>
								</>
							)}
						/>
						<Route
							path="/signup/welcome"
							render={(props) => <FirstTimeVisit nextPage={this.nextPage} />}
						/>
					</Switch>
				</div>
			</div>
		);
	}
}

export default index;
