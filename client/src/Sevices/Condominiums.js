import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://ec2-54-229-6-244.eu-west-1.compute.amazonaws.com/api/auth',
});

export const createCondominium = async (data) => {
	console.log('create condominium: ', data);
	let subscription;
	if (data.features == 'Premium') {
		subscription = 1;
	} else {
		subscription = null;
	}
	let condomimium = {
		subscription_id: subscription,
		legal_identity_id: 1,
		name: data.condomimiumName,
		type: 'building',
		place_id: data.place_id,
		geocode: data.geocode,
		address: data.address,
		locality: null,
		postal_code: data.postal_code,
		country: data.country,
		house: {
			floor_id: 1,
			block_id: 1,
			name: 'Casinha',
		},
	};
	const result = await instance.post('/condominiums', condomimium);

	/* const result = await instance.post('/condominiumCreated', { data });
	console.log('result', result);
	return result.data.result; */
};
