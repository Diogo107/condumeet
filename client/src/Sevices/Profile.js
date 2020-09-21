import axios from 'axios';

const instance = axios.create({
	baseURL: '/api/condumeet/profiles',
});

export const getProfileSelf = async (token) => {
	const result = await instance.get('/self', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return result;
};
