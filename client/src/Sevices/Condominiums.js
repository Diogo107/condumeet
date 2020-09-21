import axios from 'axios';
let token;
const instance = axios.create({
	baseURL: '/api/condumeet/condominiums',
});

export const createCondominium = async (data, token) => {
	console.log('data sent to the API', data);
	let subscription;
	if (data.features == 'Premium') {
		subscription = 1;
	} else {
		subscription = null;
	}
	let condomimium = {
		subscription_id: null,
		legal_identity_id: 1,
		type: 'building',
		locality: null,
		house: { floor_id: 1, block_id: 1, name: 'Casinha' },
	};
	const result = await instance.post('/createcondominiums', {
		condomimium,
		token,
	});
	return result;
};

export const getCondominium = async (data, token) => {
	console.log(data, token);
	const result = await instance.post(`/condominium`, {
		data,
		token,
	});
	return;
};

export const getCondominiums = async (token) => {
	const result = await instance.post(`/condominiums`, { token });
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
