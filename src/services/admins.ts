import axios from 'axios';

export const getAdmins = async (token: string) => {
	const url = 'https://matys-dogs2.onrender.com/admins';

	try {
		const { data } = await axios.get(url, {
			headers: {
				Authorization: `Bearer ` + token,
			},
		});
		return data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const updateAdminStatus = async (
	token: string,
	adminId: number,
	newStatus: boolean,
) => {
	const url = `https://matys-dogs2.onrender.com/admins/${adminId}`;
	try {
		const { data } = await axios.put(
			url,
			{ is_approved: newStatus },
			{
				headers: {
					Authorization: `Bearer ` + token,
				},
			},
		);
		return data;
	} catch (error) {
		console.error(error);
	}
};
