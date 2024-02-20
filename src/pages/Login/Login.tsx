import { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import FormInput from '../../components/FormInput/FormInput';
import styles from './Login.module.scss';
import { useAuthContext } from '../../context/useGlobalContext';

const Login: React.FC = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('otos333email@gamil.com');
	const [password, setPassword] = useState('Admini33$$');

	const { isLoggedIn, login } = useAuthContext();

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
			} else {
				console.error('Login Error');
			}
		} catch (error) {
			console.error('Login Error:', error);
		}
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
				/>
				<FormInput
					label='Пароль'
					id='password'
					type='password'
					name='password'
					value={password}
					onChange={handleChangePassword}
				/>
				<button
					className={styles.button}
					onClick={handleLogin}
					type='button'
				>
					Увійти
				</button>
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
