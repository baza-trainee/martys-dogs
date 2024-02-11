
import axios from 'axios';

export const BASE_URL = 'https://matys-dogs2.onrender.com';

const commonHeaders = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4OTQ4OTk0LCJpYXQiOjE3MDYzNTY5OTQsImp0aSI6IjUyMWZlZDAyNDRjMTQ4NmViNzQyOWFjNjRmZGZlYzY4IiwidXNlcl9pZCI6MTl9.3-PXaKeYiNrsmDdft0eYAdV5rGLsSAEqKCH7dHQJ6EM',
};

export const requestAdminPage = async (method: string, url: string, data?: any, isFormData?: boolean) => {
  try {
    const headers = isFormData ? { ...commonHeaders, 'Content-Type': 'multipart/form-data' } : commonHeaders;

    const response = await axios({
      method,
      url: `${BASE_URL}${url}`,
      data: method !== 'GET' ? data : undefined,
      headers,
    });

    console.log('Raw Response:', response);
    const jsonData = JSON.parse(JSON.stringify(response.data));

    return jsonData;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(`Request failed for ${method}. Server returned ${error.response.status} - ${error.response.statusText}`);
    } else {
      console.error(`Request failed for ${method}. Error: ${error.message}`);
    }
    throw error;
  }
};

/*
const headers = {
	Authorization:
		'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4OTQ4OTk0LCJpYXQiOjE3MDYzNTY5OTQsImp0aSI6IjUyMWZlZDAyNDRjMTQ4NmViNzQyOWFjNjRmZGZlYzY4IiwidXNlcl9pZCI6MTl9.3-PXaKeYiNrsmDdft0eYAdV5rGLsSAEqKCH7dHQJ6EM',
};

export const fetchItems = async (url: string) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, { headers:headers });
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


export const addFormData = async (
  data: FormData,
  endpoint: string,
  validationFunction: (data: FormData) => { [key: string]: string },
  onSuccessCallback?: () => void
) => {
  const validationErrors = validationFunction(data);

  if (Object.keys(validationErrors).length > 0) {
    console.error('Form data validation failed:', validationErrors);
    return;
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers:headers,
      body: data,
    });

    if (!response.ok) {
      throw new Error(`Request failed for POST. Server returned ${response.status} - ${response.statusText}`);
    }

    if (onSuccessCallback) {
      onSuccessCallback();
    }
  } catch (error) {
    console.error('An error occurred during the request:', error);
  }
};


export const editFormData = async (
  data: FormData,
  endpoint: string,
  existingId: string,
  validationFunction: (data: FormData) => { [key: string]: string },
  onSuccessCallback?: () => void
) => {
  const validationErrors = validationFunction(data);

  if (Object.keys(validationErrors).length > 0) {
    console.error('Form data validation failed:', validationErrors);
    return;
  }

  try {
    const response = await fetch(`${endpoint}/${existingId}`, {
      method: 'PATCH',
      headers:headers,
      body: data,
    });

    if (!response.ok) {
      throw new Error(`Request failed for PATCH. Server returned ${response.status} - ${response.statusText}`);
    }

    if (onSuccessCallback) {
      onSuccessCallback();
    }
  } catch (error) {
    console.error('An error occurred during the request:', error);
  }
};


export const onDeleteClick = async (endpoint: string,
  existingId: string | null,
  ) => {
  if (existingId) {
    try {
      const response = await fetch(`${endpoint}/${existingId}`, {
        method: 'DELETE',
        headers:headers
      });

      if (!response.ok) {
        throw new Error(`Delete request failed. Server returned ${response.status} - ${response.statusText}`);
      }

      console.log('Item deleted successfully!');
    } catch (error) {
      console.error('An error occurred during deletion:', error);
    }
  }
};
*/
