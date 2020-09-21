import axios from 'axios';

const instance = axios.create({
	baseURL:
		'http://ec2-54-229-6-244.eu-west-1.compute.amazonaws.com/api/v1/profiles',
});

export const getProfileSelf = async (token) => {
	const result = await instance.get('/self', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return result;
};
