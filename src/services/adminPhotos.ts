const PHOTOS = `${import.meta.env.VITE_API_URL}/about/images`;

export const getAdminPhotos = async (token: string) => {
	try {
		const response = await fetch(PHOTOS, {
			headers: {
				authorization: `Bearer ` + token,
				accept: 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error('Data loading error');
		}

		const data = await response.json();

		return data;
	} catch (error) {
		console.error('getAdminPhotos Error:', error);
		throw error;
	}
};

export const deletePhoto = async (deleteImage: {
	fileId: string;
	token: string;
}) => {
	const { fileId, token } = deleteImage;

	try {
		const response = await fetch(`${PHOTOS}/${fileId}`, {
			method: 'DELETE',
			headers: {
				authorization: `Bearer ${token}`,
				accept: 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error('Delete request failed');
		}

		const data = await response.json();

		return data;
	} catch (error) {
		console.error('deletePhoto Error:', error);
		throw error;
	}
};

export const uploadPhoto = async (uploadImage: {
	token: string;
	imageData: FormData;
}) => {
	const { token, imageData } = uploadImage;

	try {
		const response = await fetch(PHOTOS, {
			method: 'POST',
			headers: {
				authorization: `Bearer ${token}`,
			},
			body: imageData,
		});

		if (!response.ok) {
			throw new Error('Upload request failed');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('uploadPhoto Error:', error);
		throw error;
	}
};
