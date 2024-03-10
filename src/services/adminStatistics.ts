import axios from 'axios';

const STATISTICS = 'https://matys-dogs2.onrender.com/about/employment';

export const getStatistics = async (token: string) => {
	try {
		const { data } = await axios.get(STATISTICS, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return data;
	} catch (error) {
		throw new Error('Будь-ласка, перезавантажте сторінку');
	}
};

export const updateStatistics = async (
	token: string,
	animals: number,
	employees: number,
	adoptions: number,
) => {
	try {
		const { data } = await axios.put(
			STATISTICS,
			{
				quantity_of_employees: employees,
				quantity_of_succeeds_adoptions: adoptions,
				quantity_of_animals: animals,
			},
			{
				headers: { Authorization: `Bearer ` + token },
			},
		);
		return data;
	} catch (error) {
		throw new Error('Будь-ласка, перезавантажте сторінку');
	}
};
