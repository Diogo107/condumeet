import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:3020/api/authentication',
});

export const signUp = async (data) => {
	console.log(data);
	const result = await instance.post('/sign-up', { data });
	console.log('result', result);
	return result.data.result;
};
