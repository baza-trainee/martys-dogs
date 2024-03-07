import axios, { AxiosError } from 'axios';
import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';

import FormInput from '../../components/FormInput/FormInput';
import styles from './Register.module.scss';
import { IUser, registerUser } from '../../services/register';
import { useAuthContext } from '../../context/useGlobalContext';

const Register: FC = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState<IUser>({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [errors, setErrors] = useState<Partial<IUser>>({});
	const [errorMessage, setErrorMessage] = useState<string>('');
	const { isLoggedIn } = useAuthContext();

	useEffect(() => {
		if (isLoggedIn) {
			navigate('/admin');
		}
	}, [isLoggedIn, navigate]);

	const validateForm = () => {
		const errors: Partial<IUser> = {};

		if (!user.first_name.trim()) {
			errors.first_name = "Ім'я обов'язкове";
		}
		if (!user.last_name.trim()) {
			errors.last_name = "Прізвище обов'язкове";
		}
		if (!user.email.trim()) {
			errors.email = "Електронна пошта обов'язкова";
		} else if (!/\S+@\S+\.\S+/.test(user.email)) {
			errors.email = 'Введіть правильну адресу електронної пошти';
		}
		if (!user.password.trim()) {
			errors.password = "Пароль обов'язковий";
		} else if (user.password.length < 8 || user.password.length > 12) {
			errors.password = 'Пароль повинен містити від 8 до 12 символів';
		}
		if (user.password !== user.confirmPassword) {
			errors.confirmPassword = 'Паролі не співпадають';
		} else if (
			// !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
			!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!-_)(.,]).{8,12}$/.test(
				user.password,
			)
		) {
			errors.password =
				'Пароль повинен містити принаймні одну велику літеру, одну маленьку літеру, одну цифру і один спеціальний символ';
		}

		setErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleRegister = async (event: FormEvent) => {
		event.preventDefault();
		const isValid = validateForm();
		if (isValid) {
			try {
				await registerUser(user);
				navigate('/');
			} catch (error: unknown) {
				if (axios.isAxiosError(error)) {
					const axiosError = error as AxiosError;
					if (axiosError.response?.status === 400) {
						setErrorMessage('Така пошта вже зареєстрована');
					} else {
						setErrorMessage('Помилка під час реєстрації');
					}
				}
			}
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setUser({ ...user, [name]: value });
	};

	return (
		<main className={styles.login}>
			<Form onSubmit={handleRegister} className={styles.form}>
				<h4>Реєстрація</h4>
				<FormInput
					label="Ім'я"
					id='first_name'
					name='first_name'
					type='text'
					value={user.first_name}
					onChange={handleChange}
					errorMessage={errors.first_name}
					placeholder='Name'
				/>
				<FormInput
					label='Прізвище'
					id='last_name'
					name='last_name'
					type='text'
					value={user.last_name}
					onChange={handleChange}
					errorMessage={errors.last_name}
					placeholder='Surname'
				/>
				<FormInput
					label='Електронна пошта'
					id='email'
					name='email'
					type='email'
					value={user.email}
					onChange={handleChange}
					errorMessage={errors.email}
					placeholder='Email'
				/>
				<FormInput
					label='Пароль'
					id='password'
					type='password'
					name='password'
					value={user.password}
					onChange={handleChange}
					errorMessage={errors.password}
					placeholder='Password'
				/>
				<FormInput
					label='Підтвердження паролю'
					id='confirmPassword'
					type='password'
					name='confirmPassword'
					value={user.confirmPassword}
					onChange={handleChange}
					errorMessage={errors.confirmPassword}
					placeholder='Confirm password'
				/>
				{errorMessage && <p className={styles.error}>{errorMessage}</p>}
				<button className={styles.button} type='submit'>
					Зареєструватися
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
