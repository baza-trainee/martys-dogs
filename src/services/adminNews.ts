export const NEWS = 'https://matys-dogs2.onrender.com/news';
export interface IAddNews {
	title: string;
	sub_text: string;
	title_en: string;
	sub_text_en: string;
	url: string;
	photo: File;
	post_at?: Date | string | undefined;
	update_at?: Date;
	id?: number;
}

export const setFormData = (newsItem:IAddNews)=>{
	const formData = new FormData();
	for (const [key, value] of Object.entries(newsItem)) {
		if (key === 'photo') {
				formData.append(key, value);
		} else if (value instanceof Date) {
				formData.append(key, value.toISOString());
		} else if (value !== undefined) {
				formData.append(key, value.toString());
		}
}
return  formData;
}

export const fetchNews = async (token: string) => {
	try {
		const response = await fetch(NEWS, {headers : {
			'Content-Type': 'multipart/form-data; boundary=--',
			'Accept-Language': 'uk-UA',
			Authorization: `Bearer ${token}`,
		} });
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

export const addNews = async (addNewsInfo: {newsItem: IAddNews, token:string}) => {
	const { newsItem, token } = addNewsInfo;
	try {
			const response = await fetch(NEWS, {
					method: 'POST',
					headers : {
						'Content-Type': 'multipart/form-data; boundary=--',
						'Accept-Language': 'uk-UA',
						Authorization: `Bearer ${token}`,
					},
					body:  setFormData(newsItem),
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

export const changeNews = async (changeNewsInfo:{newsItem: IAddNews, id: string, token: string}) => {
	const { newsItem, id, token } = changeNewsInfo;

	try {
		const response = await fetch(`${NEWS}/${id}`, {
			method: 'PUT',
			headers : {
				'Content-Type': 'multipart/form-data; boundary=--',
				'Accept-Language': 'uk-UA',
				Authorization: `Bearer ${token}`,
			},
			body: setFormData(newsItem),
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

export const deleteNews = async (deleteNewsInfo: {id: number, token:string}) => {
	const { id, token } = deleteNewsInfo;
	try {
		const response = await fetch(`${NEWS}/${id}`, {
			method: 'DELETE',
			headers : {
				'Content-Type': 'multipart/form-data; boundary=--',
				Authorization: `Bearer ${token}`,
			},
		});
		if (!response.ok) {
			throw new Error('Data loading error');
		}
		return id;
	} catch (error) {
		console.error('Error while loading data:', error);
		throw error;
	}
};
