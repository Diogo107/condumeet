import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://ec2-54-229-6-244.eu-west-1.compute.amazonaws.com/api/auth',
});

export const signUp = async (data) => {
	console.log('signup', data);
	const result = await instance.post('/register', data);
	return result;
};

export const login = async (data) => {
	const result = await instance.post('/login', data);
	console.log(result);
	return result;
};

export const searchForCondominium = async (data) => {
	console.log(data);
	const result = await instance.post('/searchForCondominium', { data });
	console.log('result', result);
	return result.data.result;
};
