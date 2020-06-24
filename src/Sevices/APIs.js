import axios from 'axios';

let cors = 'https://cors-anywhere.herokuapp.com/';
let email = 'denisesalema92@gmail.com';

export const validateEmail = async (data) => {
	console.log(data);
	axios.defaults.headers.post['Content-Type'] =
		'application/x-www-form-urlencoded';
	console.log(process.env.QUICK_EMAIL_VERIFICATION_API_KEY);
	const result = await axios.get(
		`https://cors-anywhere.herokuapp.com/http://api.quickemailverification.com/v1/verify?email=${data}&apikey=af3051f51d614ef5f001a530a3f667278825e26a2a9d412b79a6f33a48a6`
	);
	return result.data.result;
};
