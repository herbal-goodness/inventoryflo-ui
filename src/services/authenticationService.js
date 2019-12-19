import axios from 'axios';
import Cookies from 'universal-cookie';

const authenticationEndpoint = 'https://authenticate.com/';

export const getCredentials = () => {
	const cookies = new Cookies();
	const accessToken = cookies.get('access_token');

	return accessToken ? true : false;
};

export const setCredentials = (credentials) => {
	const cookies = new Cookies();

	cookies.set('access_token', credentials);
};

export const authenticate = (credentials) => axios.post(
	authenticationEndpoint,
	credentials
);
