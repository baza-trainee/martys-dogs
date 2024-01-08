const TAILS = 'https://matys-dogs2.onrender.com/dogs-cards';
const NEWS = 'https://matys-dogs2.onrender.com/news';

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
