export const TAILS = 'https://matys-dogs2.onrender.com/dog_card';

const headers = {
	Authorization:
		/*'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4OTQ4OTk0LCJpYXQiOjE3MDYzNTY5OTQsImp0aSI6IjUyMWZlZDAyNDRjMTQ4NmViNzQyOWFjNjRmZGZlYzY4IiwidXNlcl9pZCI6MTl9.3-PXaKeYiNrsmDdft0eYAdV5rGLsSAEqKCH7dHQJ6EM',*/


		'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4OTc4Njc2LCJpYXQiOjE3MDc3NjkwNzYsImp0aSI6ImExZjZjODQ5ZWVjZTRkODhhYzBkNzJmYjFjN2NkN2I3IiwidXNlcl9pZCI6MX0.PgM1tmuFTqPhA6WxQgHZ3xyeAAvErxpdtJxqz69EYGg'
};


/*
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
};*/

export const fetchTails = async (token: string) => {
	try {
		const response = await fetch(TAILS, {headers : {
				'Content-Type': 'multipart/form-data; boundary=--',
				Authorization: `Bearer ${token}`,
			} });

		if (!response.ok) {
			throw new Error('Data Tails loading error');
		}
		if (response.status === 200) {
			console.log(response);

		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};



export interface Photo {
	id: string;
	name: string;
	url: string;
	category: string;
}

export interface FormDogData {
	id: number;
	name: string;
	name_en?: string;
	ready_for_adoption: boolean;
	gender: string;
	gender_en?: string;
	age: string;
	age_en?: string;
	sterilization?: boolean;
	vaccination_parasite_treatment?: boolean;
	size: string;
	size_en?: string;
	description: string;
	description_en?: string;
	photo?: {
		id: string;
		name: string;
		url: string;
		category: string;
	};
}

export const setFormData = (formDogData: FormDogData) => {
	const newFormData = new FormData();

	Object.keys(formDogData).forEach(key => {
		const value = formDogData[key as keyof FormDogData];
		if (value === null) {
			throw new Error(`${value} is null`);
		}
		newFormData.append(key, value.toString());
	});

	return newFormData;

};

export const addTails = async (addTailsInfo : {formDogData: FormDogData, token: string}) => {
	const {formDogData, token} = addTailsInfo;
	try {
		const response = await fetch(TAILS,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'multipart/form-data; boundary=--',
					Authorization: `Bearer ${token}`,
				},
				body: setFormData(formDogData) as FormData,
			});

		if (!response.ok) {
			throw new Error('Data loading error');
		}

		const data = await response.json();
		return data;

	} catch (error) {
		console.error(error);
		throw error;
	}
};
