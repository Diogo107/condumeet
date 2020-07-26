import axios from 'axios';

export const createCondominium = async (data) => {
	console.log(data);
	const result = await instance.post('/condominiumCreated', { data });
	console.log('result', result);
	return result.data.result;
};
