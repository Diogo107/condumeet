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
import FeaturesOfCondominium from './../../Components/FeaturesOfCondominium';
import InvitesForCondominium from './../../Components/InvitesForCondominium';
import FinishCreatingCondominium from './../../Components/FinishCreatingCondominium';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			condominiumName: '',
			address: '',
			geocode: '',
			postal_code: '',
			place_id: '',
			country: '',
			map: {},
			condominiumNeighbors: [],
			condominiumPaidFeatures: '',
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

	updateBuildingInformation = (data) => {
		console.log(data);
		this.setState({
			address: data.address,
			geocode: data.geocode,
			postal_code: data.postal_code,
			place_id: data.place_id,
			country: data.country,
			map: { center: data.center, zoom: data.zoom },
		});
	};

	selectPremiumVersion = (option) => {
		console.log(option);
	};

	render() {
		return (
			<div className="welcome">
				<img src={Logo} alt="Logo" />
				<div className="container">
					<Switch>
						<Route
							path="/signup/welcome/created"
							render={(props) => <FinishCreatingCondominium {...this.props} />}
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
												<LocationOfCondominium
													updateBuildingInformation={
														this.updateBuildingInformation
													}
													address={this.state}
													{...this.props}
												/>
											)}
										/>
										<Route
											path="/signup/welcome/create/caracterization"
											render={(props) => (
												<CaracterizationOfCondominium {...this.props} />
											)}
										/>
										<Route
											path="/signup/welcome/create/features"
											render={(props) => (
												<FeaturesOfCondominium
													selectPremiumVersion={this.selectPremiumVersion}
													{...this.props}
												/>
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
