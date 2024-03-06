import axios from 'axios';

const URL = 'https://matys-dogs2.onrender.com';

interface PasswordReminderResponse {
  description: string;
}

export const sendPasswordReminder = async (
	email: string,
): Promise<PasswordReminderResponse> => {
	const response = await axios.post<PasswordReminderResponse>(
		`${URL}/forgot-password`,
		{ email },
	);
	return response.data;
};

export const resetPassword = async (
  uidb64: string,
  token: string,
  password: string,
  confirmPassword: string,
): Promise<PasswordReminderResponse> => {
	const response = await axios.post<PasswordReminderResponse>(
		`${URL}/reset-password/${uidb64}/${token}`,
		{ password, confirmPassword },
	);
	return response.data;
};
