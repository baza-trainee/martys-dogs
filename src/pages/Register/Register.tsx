import { ChangeEvent, useState } from 'react';
import { Form, Link } from 'react-router-dom';

import FormInput from '../../components/FormInput/FormInput';
import styles from './Register.module.scss';

const Register: React.FC = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async () => {
		console.log(name, email, password);
	};

	const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};
	
	return (
		<main className={styles.login}>
			<Form method='POST' className={styles.form}>
				<h4 className='text-3xl font-bold text-center'>Реєстрація</h4>
				<FormInput
					label="Ім'я"
					id='name'
					value={name}
					onChange={handleChangeName}
				/>
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
					Вже адміністратор?
					<Link to='/login' className={styles.link}>
						Вхід
					</Link>
				</p>
			</Form>
		</main>
	);
};

export default Register;
