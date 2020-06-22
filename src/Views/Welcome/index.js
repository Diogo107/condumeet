import React, { Component } from 'react';
import './style.scss';
import { Switch, Route } from 'react-router-dom';
//Import images
import Logo from './../../assets/images/LogoWhite.png';
import Arrow from './../../assets/images/Arrow.png';
//Import Components and Views
import FirstTimeVisit from './../../Components/FirstTimeVisit';
import NameOfCondominium from './../../Components/NameOfCondominium';
import LocationOfCondominium from './../../Components/LocationOfCondominium';
import CaracterizationOfCondominium from './../../Components/CaracterizationOfCondominium';
import FeacturesOfCondominium from './../../Components/FeacturesOfCondominium';
import InvitesForCondominium from './../../Components/InvitesForCondominium';
import FinishCreatingCondominium from './../../Components/FinishCreatingCondominium';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			condominiumName: '',
			condominiumLocation: '',
			condominiumNeighbors: [],
			condominiumPaidFeactures: false,
		};
	}

	handleInputChange = (event) => {
		const value = event.target.value;
		const inputName = event.target.name;
		console.log(value);
		this.setState({
			[inputName]: value,
		});
	};

	render() {
		return (
			<div className="welcome">
				<img src={Logo} alt="Logo" />
				<div className="container">
					<Switch>
						<Route
							path="/signup/welcome/created"
							render={(props) => <FinishCreatingCondominium />}
						/>
						<Route
							path="/signup/welcome/create"
							render={(props) => (
								<>
									<Switch>
										<Route
											path="/signup/welcome/create/name"
											render={(props) => (
												<NameOfCondominium
													handleInputChange={this.handleInputChange}
													condominiumName={this.state.condominiumName}
													{...this.props}
												/>
											)}
										/>
										<Route
											path="/signup/welcome/create/location"
											render={(props) => (
												<LocationOfCondominium {...this.props} />
											)}
										/>
										<Route
											path="/signup/welcome/create/caracterization"
											render={(props) => (
												<CaracterizationOfCondominium {...this.props} />
											)}
										/>
										<Route
											path="/signup/welcome/create/feactures"
											render={(props) => (
												<FeacturesOfCondominium {...this.props} />
											)}
										/>
										<Route
											path="/signup/welcome/create/invites"
											render={(props) => (
												<InvitesForCondominium {...this.props} />
											)}
										/>
									</Switch>
								</>
							)}
						/>
						<Route
							path="/signup/welcome"
							render={(props) => <FirstTimeVisit {...this.props} />}
						/>
					</Switch>
				</div>
			</div>
		);
	}
}

export default index;
