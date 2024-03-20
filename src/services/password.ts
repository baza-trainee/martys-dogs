import axios from 'axios';

interface PasswordReminderResponse {
  description: string;
}

export const sendPasswordReminder = async (
	email: string,
): Promise<PasswordReminderResponse> => {
	const response = await axios.post<PasswordReminderResponse>(
		`${import.meta.env.VITE_API_URL}/forgot-password`,
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
		`${import.meta.env.VITE_API_URL}/reset-password/${uidb64}/${token}`,
		{ password, confirmPassword },
	);
	return response.data;
};
