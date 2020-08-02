import React, { useState, createContext } from 'react';

export const SignUpContext = createContext();

export const SignUpProvider = (props) => {
	const [signUpForm, setSignUpForm] = useState({
		condominiumName: '',
		address: '',
		geocode: '',
		postal_code: '',
		place_id: '',
		country: '',
		map: {
			center: {
				lat: 38.720006,
				lng: -9.140318,
			},
			zoom: 9,
			loaded: true,
		},
		condominiumNeighbors: [],
		condominiumFeatures: '',
	});
	return (
		<SignUpContext.Provider value={[signUpForm, setSignUpForm]}>
			{props.children}
		</SignUpContext.Provider>
	);
};
