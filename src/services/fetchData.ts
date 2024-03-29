import { DogCard, LandingData } from '../pages/Landing/Landing';

const HOME = `${import.meta.env.VITE_API_URL}`;
const ABOUT = `${import.meta.env.VITE_API_URL}/about-us`;
const LOGIN = `${import.meta.env.VITE_API_URL}/login`;
const CATALOG = `${import.meta.env.VITE_API_URL}/catalog`;
const IS_AUTH = `${import.meta.env.VITE_API_URL}/is_auth`;
const FORM_CALLBACK = `${import.meta.env.VITE_API_URL}/form-callback`;

export const fetchHome = async (language: string): Promise<LandingData> => {
	try {
		const response = await fetch(HOME, {
			headers: {
				'Accept-Language': language,
			},
		});

		if (!response.ok) {
			throw new Error('Data loading error');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error while loading data:', error);
		throw error;
	}
};

export interface FormUserData {
	name: string;
	phone_number: string;
	comment: string;
	id_dog: number | null;
}

export const setFormData = (formUserData: FormUserData) => {
	const newFormData = new FormData();

	Object.keys(formUserData).forEach((key) => {
		const value = formUserData[key as keyof FormUserData];
		if (value === null) {
			throw new Error(`id_dog is null`);
		}
		newFormData.append(key, value.toString());
	});

	return newFormData;
};

export const sendFormData = async (formUserData: FormUserData) => {
	try {
		const response = await fetch(FORM_CALLBACK, {
			method: 'POST',
			headers: {
				'Content-Type': 'multipart/form-data; boundary=--',
			},
			body: setFormData(formUserData) as FormData,
		});

		if (!response.ok) {
			throw new Error('Data loading error');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const fetchAbout = async () => {
	try {
		const response = await fetch(ABOUT);

		if (!response.ok) {
			throw new Error('Data loading error');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error while loading data:', error);
		throw error;
	}
};

export const fetchCatalog = async ({
	queryKey,
}: {
	queryKey: [string, string, { filter: string }];
}): Promise<DogCard[]> => {
	const [, language, { filter: filterTerms }] = queryKey;
	let url = CATALOG;

	if (filterTerms) {
		url += filterTerms;
	}

	try {
		const response = await fetch(url, {
			headers: {
				'Accept-Language': language,
			},
		});

		if (!response.ok) {
			throw `Error while loading data. Status: ${response.status}`;
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export interface LoginResponse {
	message: string;
	access_token: string;
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

interface getIsAuthResponse {
	is_authenticated: boolean;
}

export const getIsAuth = async (token: string): Promise<getIsAuthResponse> => {
	try {
		const response = await fetch(IS_AUTH, {
			headers: {
				authorization: `Bearer ` + token,
				accept: 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error('IsAuth failed');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('IsAuth Error:', error);
		throw error;
	}
};
