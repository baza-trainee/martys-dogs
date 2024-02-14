
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

    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(`Request failed for ${method}. Server returned ${error.response.status} - ${error.response.statusText}`);
    } else {
      console.error(`Request failed for ${method}. Error: ${error.message}`);
    }
    throw error;
  }
};

