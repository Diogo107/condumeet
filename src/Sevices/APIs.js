import axios from 'axios';

const instance = axios.create({
	headers: {
		'Access-Control-Allow-Origin': '*',
	},
	baseURL: 'http://localhost:3020/api/externals',
});

export const validateEmail = async (data) => {
	console.log('asking email verification');
	const result = await axios.get(
		`http://api.quickemailverification.com/v1/verify?email=${data}&apikey=af3051f51d614ef5f001a530a3f667278825e26a2a9d412b79a6f33a48a6`,
		{
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
		}
	);
	console.log(result.data.response);
	return result.data.response;
};

export const other = async (data) => {
	console.log(data);
};
