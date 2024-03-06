import { AxiosError } from 'axios';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Form, Link } from 'react-router-dom';

import FormInput from '../../components/FormInput/FormInput';
import styles from './ForgottenPassword.module.scss';
import { sendPasswordReminder } from '../../services/password';

interface ServerResponse {
	description: string;
}

const ForgottenPassword: FC = () => {
	const [email, setEmail] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');

	const validateForm = () => {
		if (!email.trim()) {
			setErrorMessage("Електронна пошта обов'язкова");
			return false;
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			setErrorMessage('Введіть вірну адресу пошти');
			return false;
		} else {
			setErrorMessage('');
			return true;
		}
	};

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		if (!validateForm()) {
			return;
		}
		try {
			const result = await sendPasswordReminder(email);
			setSuccessMessage(result.description);
			return result;
		} catch (error) {
			const axiosError = error as AxiosError<ServerResponse>;
			if (axiosError.response) {
				setErrorMessage(axiosError.response.data.description);
			}
		}
	};

	const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	return (
		<main className={styles.login}>
			<Form onSubmit={handleSubmit} className={styles.form} noValidate>
				<h4>Відновлення</h4>
				<FormInput
					label='Введіть свою електронну пошту'
					placeholder='Email'
					id='email'
					name='email'
					type='email'
					value={email}
					onChange={handleChangeEmail}
					// errorMessage={errorMessage}
				/>
				{errorMessage && <div className={styles.error}>{errorMessage}</div>}
				{!errorMessage && <p className={styles.success}>{successMessage}</p>}
				<button className={styles.button} type='submit'>
					Відправити
				</button>
				<p className={styles.text}>
					<Link to='/login' className={styles.link}>
						Вхід
					</Link>
				</p>
			</Form>
		</main>
	);
};

export default ForgottenPassword;
