const url = 'microsoft.com';

export const fetchTails = async () => {
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error('Network response was not ok');
	}

	const data = await response.json();
	return data;
};
