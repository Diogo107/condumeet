import axios from 'axios';

const instance = axios.create({
	//baseURL: 'http://ec2-54-229-6-244.eu-west-1.compute.amazonaws.com/api/auth',
	baseURL: '/api/condumeet/auth',
});

export const checkForUser = async () => {
	console.log('Check for User');
	const result = await instance.get('/checkforuser');
	return result;
};

export const signUp = async (data) => {
	console.log('signup', data);
	const result = await instance.post('/register', data);
	return result;
};

export const login = async (data) => {
	console.log('Services - login', data);
	let temp = {
		login: 'diogo.filipe.santos107@gmail.com',
		password: '123456asdfgh',
	};
	const result = await instance.post('/login', temp);
	console.log(result);
	return result;
};

export const forgotPassword = async (data) => {
	console.log(data);
	const result = await instance.post('/forgot-password', data);
	console.log('result', result);
};

export const destroyCookies = async () => {
	const result = await instance.delete('/destroyCookies');
	console.log('result', result);
	return result.data;
};

export const searchForCondominium = async (data) => {
	console.log(data);
	const result = await instance.post('/searchForCondominium', { data });
	console.log('result', result);
	return result.data.result;
};

//Social Login

export const googleAuth = async (data) => {
	console.log('Google Auth');
	//const result = await instance.get('/social-auth/google');
	const result = await instance.get('/social-auth/google');
	console.log(result);
	return result;
};
