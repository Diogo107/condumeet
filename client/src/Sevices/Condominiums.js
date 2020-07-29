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
	console.log('create condominium: ', data, token);
	token =
		'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9lYzItNTQtMjI5LTYtMjQ0LmV1LXdlc3QtMS5jb21wdXRlLmFtYXpvbmF3cy5jb21cL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE1OTYwMTMyNzMsImV4cCI6MTU5NjAxNjg3MywibmJmIjoxNTk2MDEzMjczLCJqdGkiOiJIQkZmdVFJVmJPU0Y2ZHlQIiwic3ViIjoyLCJwcnYiOiI0MTFjOTE3YTBmYjUxZTBhNDI3YTdlM2RlYWE1YTQ5ZTI5MmRkYjliIn0._vKYRjqUBo4o-RSjPIQznydYGdTZMG4QWVQOV0_i5OU';
	const result = await instance.post('/condominiums', condomimium, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	console.log('result', result);
	return result.data.result;
};
