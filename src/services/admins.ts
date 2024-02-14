import axios from 'axios';

const token =
'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4OTc4Njc2LCJpYXQiOjE3MDc3NjkwNzYsImp0aSI6ImExZjZjODQ5ZWVjZTRkODhhYzBkNzJmYjFjN2NkN2I3IiwidXNlcl9pZCI6MX0.PgM1tmuFTqPhA6WxQgHZ3xyeAAvErxpdtJxqz69EYGg';

export const getAdmins = async () => {
	const url = 'https://matys-dogs2.onrender.com/admins';

	try {
		const { data } = await axios.get(url, {
			headers: {
				Authorization: token,
			},
		});
		console.log('Admins:', data);
    return data;
	} catch (error) {
		console.error(error);
	}
};

export const updateAdminStatus = async (adminId, newStatus) => {
	const url = `https://matys-dogs2.onrender.com/admins/${adminId}`;
	try {
		const { data } = await axios.put(
			url,
			{ is_approved: newStatus },
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