import axios from 'axios';

export const getAdmins = async (token: string) => {
	const url = `${import.meta.env.VITE_API_URL}/admins`;

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
	const url = `${import.meta.env.VITE_API_URL}/admins/${adminId}`;
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
