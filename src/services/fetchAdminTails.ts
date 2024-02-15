export const TAILS = 'https://matys-dogs2.onrender.com/dog_card';
const headers = {
	Authorization:
		/*'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4OTQ4OTk0LCJpYXQiOjE3MDYzNTY5OTQsImp0aSI6IjUyMWZlZDAyNDRjMTQ4NmViNzQyOWFjNjRmZGZlYzY4IiwidXNlcl9pZCI6MTl9.3-PXaKeYiNrsmDdft0eYAdV5rGLsSAEqKCH7dHQJ6EM',*/


		'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4OTc4Njc2LCJpYXQiOjE3MDc3NjkwNzYsImp0aSI6ImExZjZjODQ5ZWVjZTRkODhhYzBkNzJmYjFjN2NkN2I3IiwidXNlcl9pZCI6MX0.PgM1tmuFTqPhA6WxQgHZ3xyeAAvErxpdtJxqz69EYGg'
};


export const fetchTails = async () => {
	try {
		const response = await fetch(TAILS, { headers });
		if (!response.ok) {
			throw new Error('Data Tails loading error');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};