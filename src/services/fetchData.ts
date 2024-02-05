import { LandingData } from '../pages/Landing/Landing';
import { OurTailsData } from '../pages/OurTails/OurTails';

/*import { useQuery, useMutation, UseQueryOptions } from '@tanstack/react-query';*/
const HOME = 'https://matys-dogs2.onrender.com';
const ABOUT = 'https://matys-dogs2.onrender.com/about-us';
const LOGIN = 'https://matys-dogs2.onrender.com/login';
const CATALOG = 'https://matys-dogs2.onrender.com/catalog';

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

export const fetchCatalog = async ({ queryKey }: { queryKey: [string, string, { filter: string }] }): Promise<OurTailsData> => {
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
			throw  (`Error while loading data. Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
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

/*



// export const fetchHome = async () => {
// 	try {
// 		const response = await fetch(TAILS);
// 		const data = await response.json();
// 		if (Array.isArray(data.dogs)) {
// 			return data.dogs;
// 		} else {
// 			throw new Error('The data is not an array');
// 		}
// 	} catch (error) {
// 		console.error('Error while loading data:', error);
// 		throw error;
// 	}
// };

// export const fetchNews = async () => {
// 	try {
// 		const response = await fetch(NEWS);
// 		const data = await response.json();
// 		if (Array.isArray(data.news)) {
// 			return data.news;
// 		} else {
// 			throw new Error('The data is not an array');
// 		}
// 	} catch (error) {
// 		console.error('Error while loading data:', error);
// 		throw error;
// 	}
// };

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

/* Universal fetch  + query examples */

/*
const BASE_URL = 'https://matys-dogs2.onrender.com';

const fetchData1 = async (url: string, method = 'GET', data: any = null) => {
	try {
	  const response = await fetch(`${BASE_URL}${url}`, {
		method,
		headers: {
		  'Content-Type': 'application/json',
		},
		body: data ? JSON.stringify(data) : null,
	  });

	  if (!response.ok) {
		throw new Error('Request failed');
	  }

	  const responseData = await response.json();

	  console.log(`Fetch Data from ${url}:`, responseData);

	  return responseData;
	} catch (error) {

	  console.error(`Error fetching data from ${url}:`, error);
	  throw error;
	}
  };



export const useFetchHome1 = () => {
  return useQuery({
    queryKey: ['/'],
    queryFn: () => fetchData1('/'),
  });
};

export const useFetchAbout1 = () => {
	return useQuery({
	  queryKey: ['/about'],
	  queryFn: () => fetchData1('/about'),
	});
  };

  export const useFetchCatalog1 = () => {
	return useQuery({
	  queryKey: ['/catalog'],
	  queryFn: () => fetchData1('/catalog'),
	});
  };


export const useLoginUser1 = () => {
  const loginMutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
	fetchData1('/login', 'POST', { email, password }),
    onSuccess: () => {
      console.log("Posted login successfully")
    },
  });

  return loginMutation;
};
*/
