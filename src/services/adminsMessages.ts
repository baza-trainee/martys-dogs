import axios from 'axios';

const token =
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4OTQ4OTk0LCJpYXQiOjE3MDYzNTY5OTQsImp0aSI6IjUyMWZlZDAyNDRjMTQ4NmViNzQyOWFjNjRmZGZlYzY4IiwidXNlcl9pZCI6MTl9.3-PXaKeYiNrsmDdft0eYAdV5rGLsSAEqKCH7dHQJ6EM';

export const getMessages = async () => {
	const url = 'https://matys-dogs2.onrender.com/notification-admin';
	try {
		const { data } = await axios.get(url, {
			headers: {
				Authorization: token,
			},
		});
		// console.log('Notification:', data);
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const updateMessageStatus = async (messageId, newStatus) => {
	const url = `https://matys-dogs2.onrender.com/notification-admin/${messageId}`;
	try {
		const { data } = await axios.put(
			url,
			{ status: newStatus },
			{
				headers: {
					Authorization: token,
				},
			},
		);
		return data;
	} catch (error) {
		console.error(error);
	}
};
