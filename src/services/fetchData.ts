const TAILS = 'https://matys-dogs2.onrender.com/dogs-cards';
const NEWS = 'https://matys-dogs2.onrender.com/news';
const LOGIN = 'https://matys-dogs2.onrender.com/login';

export const fetchTails = async () => {
	try {
		const response = await fetch(TAILS);
		const data = await response.json();
		if (Array.isArray(data.dogs)) {
			return data.dogs;
		} else {
			throw new Error('The data is not an array');
		}
	} catch (error) {
		console.error('Error while loading data:', error);
		throw error;
	}
};

export const fetchNews = async () => {
	try {
		const response = await fetch(NEWS);
		const data = await response.json();
		if (Array.isArray(data.news)) {
			return data.news;
		} else {
			throw new Error('The data is not an array');
		}
	} catch (error) {
		console.error('Error while loading data:', error);
		throw error;
	}
};

interface LoginResponse {
	message: string;
	token_accsess: string;
}

export const loginUser = async (
	email: string,
	password: string,
): Promise<LoginResponse> => {
	try {
		const response = await fetch(LOGIN, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});
		if (!response.ok) {
			throw new Error('Login failed');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Login Error:', error);
		throw error;
	}
};
