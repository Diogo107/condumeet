import React, { Component } from 'react';
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

const AnyReactComponent = ({ text }) => (
	<div>
		<img
			src={HousePin}
			alt="My House"
			style={{ width: '25px', height: '25px' }}
		/>
	</div>
);

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			address: '',
			geocode: '',
			postal_code: '',
			place_id: '',
			country: '',
			center: {
				lat: 38.720006,
				lng: -9.140318,
			},
			zoom: 9,
			loaded: true,
		};
	}

	componentDidMount() {
		this.setState({ address: this.props.address.address, loaded: false });
		console.log(this.props);
		if (this.props.address.map.center) {
			this.setState({
				center: {
					lat: this.props.address.map.center.lat,
					lng: this.props.address.map.center.lng,
				},
				zoom: this.props.address.map.zoom,
			});
		}
		this.setState({ loaded: true });
	}

	handleChange = (address) => {
		this.setState({ address });
	};

	handleSelect = async (address) => {
		let results = await geocodeByAddress(address);
		console.log(results);
		if (results[0].types.includes('route')) {
			this.setState({
				address: results[0].formatted_address,
				geocode: getLatLng(results[0]),
				postal_code: results[0],
				place_id: results[0].place_id,
				country: results[0].address_components[2].long_name,
			});
			let latLng = await getLatLng(results[0]);
			this.setState({ loaded: false });
			console.log('Success', latLng);
			let center = { lat: latLng.lat, lng: latLng.lng };
			this.setState({
				coordinates: latLng,
				zoom: 18,
				center: center,
				loaded: true,
			});
			this.props.updateBuildingInformation(this.state);
			console.log('Success', this.state);
		} else {
			this.setState({
				address: results[0].formatted_address,
			});
		}
	};

	render() {
		console.log(this.props);
		console.warn('result', this.state);
		const API_KEY = 'AIzaSyBq-7kvinymrRvift2zkUHTPqh6n9gsz_A';

		return (
			<div>
				<button
					onClick={() => {
						console.log(this.props);
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
					<div className="input__autocomplete">
						{/* <input
							id="autocomplete"
							className="controls"
							placeholder="Search"
						/> */}

						<PlacesAutocomplete
							value={this.state.address}
							onChange={this.handleChange}
							onSelect={this.handleSelect}
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
						{this.state.loaded && (
							<GoogleMapReact
								bootstrapURLKeys={{
									key: 'AIzaSyBq-7kvinymrRvift2zkUHTPqh6n9gsz_A',
								}}
								defaultCenter={this.state.center}
								defaultZoom={this.state.zoom}
							>
								{this.state.coordinates && (
									<AnyReactComponent
										lat={this.state.coordinates.lat}
										lng={this.state.coordinates.lng}
									/>
								)}
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
}

export default index;
