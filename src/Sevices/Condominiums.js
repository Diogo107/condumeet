import axios from 'axios';
let token;
const instance = axios.create({
	baseURL: 'http://ec2-54-229-6-244.eu-west-1.compute.amazonaws.com/api/v1',
});

export const createCondominium = async (data, token) => {
	let subscription;
	if (data.features == 'Premium') {
		subscription = 1;
	} else {
		subscription = null;
	}
	let condomimium = {
		subscription_id: subscription,
		legal_identity_id: 1,
		name: data.condominiumName,
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
	const result = await instance.post('/condominiums', condomimium, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	console.log(result);
	return result;
};

export const getCondominium = async (data, token) => {
	const result = await instance.get(`/condominiums/${data}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	console.log(result);
	return;
};

export const getCondominiums = async (token) => {
	const result = await instance.get(`/condominiums`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return result;
};

//Condominium Actions

export const inviteAllNeighbors = async (data) => {
	let emails = data.emails;
	const result = await instance.post(
		`/condominiums/${data.id}/invite`,
		{ emails },
		{
			headers: {
				Authorization: `Bearer ${data.token}`,
			},
		}
	);
	return result.data.result;
};
