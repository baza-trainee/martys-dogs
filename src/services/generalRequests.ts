import { LandingData } from '../pages/Landing/Landing';
import { OurTailsData } from '../pages/OurTails/OurTails';
import { LoginResponse } from './fetchData';
import axios from 'axios';

const BASE_URL = 'https://matys-dogs2.onrender.com';

const requestPublicPage = async (
	method: string,
	url: string,
	data?: any,
	headers?: any,
): Promise<any> => {
	try {
		const response = await axios({
			method,
			url: `${BASE_URL}${url}`,
			data,
			headers,
		});

		console.log('Raw Response:', response);

		return response.data;
	} catch (error: any) {
		if (axios.isAxiosError(error) && error.response) {
		  console.error(`Request failed for ${method}. Server returned ${error.response.status} - ${error.response.statusText}`);
		} else {
		  console.error(`Request failed for ${method}. Error: ${error.message}`);
		}
		throw error;
	  }
};

export const PublicApi = {
	fetchHome(language: string): Promise<LandingData> {
		return requestPublicPage('GET', '/', { 'Accept-Language': language });
	},

	fetchAbout(): Promise<any> {
		return requestPublicPage('GET', '/about-us');
	},
    
	fetchCatalog({
		queryKey,
	}: {
		queryKey: [string, string, { filter: string }];
	}): Promise<OurTailsData> {
		const [, language, { filter: filterTerms }] = queryKey;
		let url = '/catalog';

		if (filterTerms) {
			url += filterTerms;
		}

		return requestPublicPage('GET', url, {
			headers: { 'Accept-Language': language },
		});
	},

	loginUser(email: string, password: string): Promise<LoginResponse> {
		return requestPublicPage('POST', '/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});
	},
};

const commonHeaders = {
	Authorization:
		'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4OTQ4OTk0LCJpYXQiOjE3MDYzNTY5OTQsImp0aSI6IjUyMWZlZDAyNDRjMTQ4NmViNzQyOWFjNjRmZGZlYzY4IiwidXNlcl9pZCI6MTl9.3-PXaKeYiNrsmDdft0eYAdV5rGLsSAEqKCH7dHQJ6EM',
};

export const requestAdminPage = async (
	method: string,
	url: string,
	data?: any,
	isFormData?: boolean,
): Promise<any> => {
	try {
		const headers = isFormData
			? { ...commonHeaders, 'Content-Type': 'multipart/form-data' }
			: commonHeaders;

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
