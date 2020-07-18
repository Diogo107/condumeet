import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:3020/api/externals',
});

export const validateEmail = async (data) => {
	const result = await instance.post('/email-validation', { data });
	return result.data.response;
};

export const other = async (data) => {
	console.log(data);
};
