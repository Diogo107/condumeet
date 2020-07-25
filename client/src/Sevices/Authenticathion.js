import axios from 'axios';
import Cookies from 'universal-cookie';

const instance = axios.create({
	baseURL: 'http://localhost:3020/api/authentication',
});

export const signUp = async (data) => {
	console.log('signup', data);
	const result = await instance.post('/sign-up', { data });
	console.log('result', result);

	const cookies = new Cookies();

	if (result.status == 201 || result.status == 200) {
		const login = await instance.post('/login', { data });
		console.log(login);
		cookies.set('Token', login.data.user.token, { path: '/' });
		return login.data.user.user;
	}

	return result.data.result;
};

export const searchForCondominium = async (data) => {
	console.log(data);
	const result = await instance.post('/searchForCondominium', { data });
	console.log('result', result);
	return result.data.result;
};

export const inviteAllNeighbors = async (data) => {
	console.log(data);
	const result = await instance.post('/inviteAllNeighbors', { data });
	console.log('result', result);
	return result.data.result;
};

export const condominiumCreated = async (data) => {
	console.log(data);
	const result = await instance.post('/condominiumCreated', { data });
	console.log('result', result);
	return result.data.result;
};
