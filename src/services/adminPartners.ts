import axios from 'axios';
export const BASE_URL = 'https://matys-dogs2.onrender.com';

export const requestAdminPage = async (
	token: string,
	method: string,
	url: string,
	data?: any,
	isFormData?: boolean,
) => {
	try {
		const headers = isFormData
			? {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'multipart/form-data; boundary=--',
				}
			: { Authorization: 'Bearer '+ token };

		const response = await axios({
			method,
			url: `${BASE_URL}${url}`,
			data: method !== 'GET' ? data : undefined,
			headers,
		});

		console.log('Raw Response:', response);

		return response.data;
	} catch (error: any) {
		if (axios.isAxiosError(error) && error.response) {
			console.error(
				`Request failed for ${method}. Server returned ${error.response.status} - ${error.response.statusText}`,
			);
		} else {
			console.error(
				`Request failed for ${method}. Error: ${error.message}`,
			);
		}
		throw error;
	}
};
