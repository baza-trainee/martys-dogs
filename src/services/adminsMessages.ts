import axios from 'axios';

export const getMessages = async (token: string) => {
	const url = `${import.meta.env.VITE_API_URL}/notification-admin`;
	try {
		const { data } = await axios.get(url, {
			headers: {
				Authorization: `Bearer ` + token,
			},
		});
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const updateMessageStatus = async (
	token: string,
	messageId: number,
	newStatus: boolean,
) => {
	const url = `${import.meta.env.VITE_API_URL}/notification-admin/${messageId}`;
	try {
		const { data } = await axios.put(
			url,
			{ status: newStatus },
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

export const deleteMessage = async (
	token: string,
	messageId: number,
) => {
	const url = `${import.meta.env.VITE_API_URL}/notification-admin/${messageId}`;
	try {
		const { data } = await axios.delete(
			url,
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
