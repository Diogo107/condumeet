import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:3020/api/externals',
});

export const validateEmail = async (data) => {
	console.log('asking email verification');
	const result = await instance.post('/email-validation', { data });
	console.log(result.data.response);
	return result.data.response;
};

export const other = async (data) => {
	console.log(data);
};
