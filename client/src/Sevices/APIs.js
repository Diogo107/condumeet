import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:3020/api/externals',
});

export const validateEmail = async (data) => {
	console.log(data);
	const result = await instance.post('/email-validation', { data });
	console.log('result', result);
	return result.data.result;
};

export const other = async (data) => {
	console.log(data);
};
