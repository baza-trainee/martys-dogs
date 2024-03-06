import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import FormInput from '../../components/FormInput/FormInput';
import styles from './Login.module.scss';
import { useAuthContext } from '../../context/useGlobalContext';

const Login: FC = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const { isLoggedIn, login, rememberMe, setRememberMe } = useAuthContext();

	const handleCheckboxChange = () => {
		setRememberMe(!rememberMe);
	};

	useEffect(() => {
		if (isLoggedIn) {
			navigate('/admin');
		}
	}, [isLoggedIn, navigate]);

	const handleLogin = async () => {
		try {
			const result = await login(email, password);

			if (result === 'User login') {
				navigate('/admin');
			}
			// else {
			// 	console.error('Login Error');
			// }
		} catch (error) {
			setErrorMessage('Невірна пошта або пароль');
		}
		// if (error?.response.status === 400 || error?.response.status === 403) {
		// 	setErrorMessage('Невірна пошта або пароль');
		// } else {
		// 	setErrorMessage('Помилка сервера. Спробуйте ще.');
		// }
		// }
	};

	const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	return (
		<main className={styles.login}>
			<form className={styles.form}>
				<h4>Вхід</h4>
				<FormInput
					label='Електронна пошта'
					id='email'
					name='email'
					type='email'
					value={email}
					onChange={handleChangeEmail}
					placeholder='Email'
				/>
				<FormInput
					label='Пароль'
					id='password'
					type='password'
					name='password'
					value={password}
					onChange={handleChangePassword}
					placeholder='Password'
				/>
				<label>
					<input
						type='checkbox'
						checked={rememberMe}
						onChange={handleCheckboxChange}
						className={styles.checkbox}
					/>
					Запам'ятати мене
				</label>
				{errorMessage && <p className={styles.error}>{errorMessage}</p>}
				<button
					className={styles.button}
					onClick={handleLogin}
					type='button'
				>
					Увійти
				</button>
				<p className={styles.text}>
					Забули пароль?
					<Link to='/forgotten' className={styles.link}>
					Відновлення
					</Link>
				</p>
				<p className={styles.text}>
					Ще не є адміном?
					<Link to='/register' className={styles.link}>
						Реєстрація
					</Link>
				</p>
			</form>
		</main>
	);
};

export default Login;
