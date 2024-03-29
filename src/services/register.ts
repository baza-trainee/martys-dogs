import axios from 'axios';

export interface IUser {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const REGISTER = `${import.meta.env.VITE_API_URL}/register`;

export const registerUser = async (userData: IUser) => {
	try {
		const response = await axios.post(REGISTER, userData);
		console.log('Registration:', response.data);
		return response.data;
	} catch (error) {
		console.error('Error during registration:', error);
		throw error;
	}
};
