import { AxiosError } from 'axios';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import FormInput from '../../components/FormInput/FormInput';
import styles from './ResetPassword.module.scss';
import { resetPassword } from '../../services/password';

interface ServerResponse {
	description: string;
}

const ResetPassword: FC = () => {
	const { token } = useParams();
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const validateForm = () => {
		if (!password.trim()) {
			setErrorMessage("Пароль обов'язковий");
			return false;
		} else if (password.length < 8 || password.length > 12) {
			setErrorMessage('Пароль повинен містити від 8 до 12 символів');
			return false;
		} else if (
			!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!-_)(.,]).{8,12}$/.test(
				password,
			)
		) {
			setErrorMessage(
				'Пароль повинен містити принаймні одну велику літеру, одну маленьку літеру, одну цифру і один спеціальний символ',
			);
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
		if (token) {
			try {
				const result = await resetPassword(token, password);
				return result;
			} catch (error) {
				const axiosError = error as AxiosError<ServerResponse>;
				if (axiosError.response) {
					setErrorMessage(axiosError.response.data.description);
				}
			}
		}
	};

	const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	return (
		<main className={styles.login}>
			<Form onSubmit={handleSubmit} className={styles.form} noValidate>
				<h4>Скидання</h4>
				<FormInput
					label='Введіть новий пароль'
					placeholder='Password'
					id='password'
					name='password'
					type='password'
					value={password}
					onChange={handleChangePassword}
					errorMessage={errorMessage}
				/>
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

export default ResetPassword;
