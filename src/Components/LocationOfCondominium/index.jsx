import React, { Component, useContext, useState } from 'react';
import './style.scss';
//Import Images
import Arrow from './../../assets/images/Arrow.png';
import HousePin from './../../assets/images/HousePin.png';
//Import Services
import GoogleMapReact from 'google-map-react';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
	geocodeByAddress,
	geocodeByPlaceId,
	getLatLng,
} from 'react-places-autocomplete';
//Import Context
import { SignUpContext } from './../../Context/SignUpContext.js';

const AnyReactComponent = ({ text }) => (
	<div>
		<img
			src={HousePin}
			alt="My House"
			style={{ width: '25px', height: '25px' }}
		/>
	</div>
);

function Index(props) {
	const [signUpForm, setSignUpForm] = useContext(SignUpContext);
	const [
		anyReactComponentCoordinates,
		setAnyReactComponentCoordinates,
	] = useState({ lat: '', lng: '' });
	console.log(signUpForm);

	const handleChange = (address) => {
		this.setState({ address });
	};

	const handleSelect = async (address) => {
		let results = await geocodeByAddress(address);
		let latLng = await getLatLng(results[0]);
		let center = { lat: latLng.lat, lng: latLng.lng };
		console.log(results[0]);
		await setSignUpForm({
			...signUpForm,
			address: results[0].formatted_address,
			geocode: latLng,
			postal_code: results[0].address_components[4].long_name,
			place_id: results[0].place_id,
			country: results[0].address_components[3].long_name,
			map: {
				center: center,
				zoom: 18,
				loaded: false,
			},
		});
		setSignUpForm((previousState) => ({
			...previousState,
			map: { ...previousState.map, loaded: true },
		}));
		/* setSignUpForm({
			...signUpForm,
			map: { ...signUpForm.map, loaded: true },
		}); */

		setAnyReactComponentCoordinates({ lat: latLng.lat, lng: latLng.lng });
	};

	return (
		<div>
			<button
				onClick={() => {
					this.props.history.push('/signup/welcome/create/name');
				}}
			>
				<img src={Arrow} alt="Arrow" />
			</button>
			<div className="progress-bar">
				<h1>Create your condominium.</h1>
				<ul className="progress">
					<li className="progress__circle progress--done progress--active">
						<p className="purple-text">Name</p>
					</li>
					<li className="progress__bar progress--done"></li>
					<li className="progress__circle progress--active ">
						<p>Location</p>
					</li>
					<li className="progress__bar"></li>
					<li className="progress__circle ">
						<p>Caracterization</p>
					</li>
					<li className="progress__bar"></li>
					<li className="progress__circle">
						<p>Feactures</p>
					</li>
					<li className="progress__bar"></li>
					<li className="progress__circle">
						<p>Invites</p>
					</li>
					<li className="progress__bar"></li>
					<li className="progress__circle">
						<p>Finish</p>
					</li>
				</ul>
			</div>
			<div className="welcome__location">
				<h1>Find your home</h1>
				<button
					onClick={() => {
						console.log(signUpForm);
					}}
				>
					Information
				</button>
				<div className="input__autocomplete">
					<PlacesAutocomplete
						value={signUpForm.address}
						onChange={(e) => {
							console.log(e);
							setSignUpForm({ ...signUpForm, address: e });
						}}
						onSelect={handleSelect}
					>
						{({
							getInputProps,
							suggestions,
							getSuggestionItemProps,
							loading,
						}) => (
							<div>
								<input
									{...getInputProps({
										placeholder: 'Search Places ...',
										className: 'location-search-input',
									})}
								/>
								<div className="autocomplete-dropdown-container">
									{loading && <div>Loading...</div>}
									{suggestions.map((suggestion) => {
										const className = suggestion.active
											? 'suggestion-item--active'
											: 'suggestion-item';
										// inline style for demonstration purpose
										const style = suggestion.active
											? { backgroundColor: '#fafafa', cursor: 'pointer' }
											: { backgroundColor: '#ffffff', cursor: 'pointer' };
										//if condition to display only full addresses
										if (suggestion.types.includes('route')) {
											return (
												<div
													className="single__sugestion"
													{...getSuggestionItemProps(suggestion, {
														className,
														style,
													})}
												>
													<p>{suggestion.description}</p>
												</div>
											);
										}
									})}
								</div>
							</div>
						)}
					</PlacesAutocomplete>
					<img
						src="https://image.flaticon.com/icons/svg/483/483356.svg"
						alt="Magnifying glass"
						style={{ width: '20px', height: '20px' }}
					/>
				</div>
				<div style={{ height: '325px', width: '100%' }}>
					{signUpForm.map.loaded && (
						<GoogleMapReact
							bootstrapURLKeys={{
								key: process.env.GOOGLE_API_KEY,
							}}
							defaultCenter={signUpForm.map.center}
							defaultZoom={signUpForm.map.zoom}
						>
							<AnyReactComponent
								lat={anyReactComponentCoordinates.lat}
								lng={anyReactComponentCoordinates.lng}
							/>
						</GoogleMapReact>
					)}
				</div>
				<button
					onClick={() => {
						this.props.history.push('/signup/welcome/create/caracterization');
					}}
				>
					Continue
				</button>
			</div>
		</div>
	);
}

export default Index;
