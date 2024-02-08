export const NEWS = 'https://matys-dogs2.onrender.com/news';
const headers = {
	Authorization:
		'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4OTQ4OTk0LCJpYXQiOjE3MDYzNTY5OTQsImp0aSI6IjUyMWZlZDAyNDRjMTQ4NmViNzQyOWFjNjRmZGZlYzY4IiwidXNlcl9pZCI6MTl9.3-PXaKeYiNrsmDdft0eYAdV5rGLsSAEqKCH7dHQJ6EM',
};

export interface IAddNews {
	title: string;
	sub_text: string;
	title_en: string;
	sub_text_en: string;
	url: string;
	photo: File;
	post_at?: Date;
	update_at?: Date;
	id?: number;
}

export const fetchNews = async () => {
	try {
		const response = await fetch(NEWS, { headers });
		if (!response.ok) {
			throw new Error('Data loading error');
		}
		const data = await response.json();
		console.log(data)
		return data;
	} catch (error) {
		console.error('Error while loading data:', error);
		throw error;
	}
};

export const addNews = async (newsItem: IAddNews) => {
	try {
		const response = await fetch(NEWS, {
			method: 'POST',
			headers,
			body: JSON.stringify(newsItem),
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

export const changeNews = async (newsItem: IAddNews, id: string) => {
	try {
		console.log(newsItem)
		console.log(id)
		const response = await fetch(`${NEWS}/${id}`, {
			method: 'PUT',
			headers,
			body: JSON.stringify(newsItem),
		});
		console.log(id)
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

export const deleteNews = async (id: number) => {
	try {
		const response = await fetch(`${NEWS}/${id}`, {
			method: 'DELETE',
			headers,
		});
		if (!response.ok) {
			throw new Error('Data loading error');
		}
		// const data = await response.json();
		return id;
	} catch (error) {
		console.error('Error while loading data:', error);
		throw error;
	}
};
