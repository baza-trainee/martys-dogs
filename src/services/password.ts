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
	token: string,
	newPassword: string,
): Promise<PasswordReminderResponse> => {
	const response = await axios.post<PasswordReminderResponse>(
		`${URL}/password-reset`,
		{ token, newPassword },
	);
	return response.data;
};
