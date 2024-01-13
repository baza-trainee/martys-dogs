import { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import FormInput from '../../components/FormInput/FormInput';
import { loginUser } from '../../services/fetchData';
import styles from './Login.module.scss';

const Login: React.FC = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('adminUser1@gmail.com');
	const [password, setPassword] = useState('adminUser11!');
	const [token, setToken] = useState<string | null>(null);
	const login = (newToken: string) => {
		setToken(newToken);
	};

	const handleLogin = async () => {
		try {
			const { message, token_accsess } = await loginUser(email, password);

			if (token_accsess) {
				login(token_accsess);
				console.log(message);
				navigate('/admin');
			} else {
				console.error('The access token was not received');
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

	console.log(token);

	return (
		<main className={styles.login}>
			<form className={styles.form}>
				<h4>Вхід</h4>
				<FormInput
					label='Електронна пошта'
					id='email'
					value={email}
					onChange={handleChangeEmail}
				/>
				<FormInput
					label='Пароль'
					id='password'
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
