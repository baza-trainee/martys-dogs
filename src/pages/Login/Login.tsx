import { Form, Link } from 'react-router-dom';

import FormInput from '../../components/FormInput/FormInput';
import SubmitBtn from '../../components/SubmitBtn/SubmitBtn';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
	const navigate = useNavigate();

	// const guestLogin = async () => {
	// 	console.log('login');
	// };

	const guestLogin = async () => {
		try {
			const response = await customFetch.post('/auth/local', {
				identifier: 'test@test.com',
				password: 'secret',
			});
			dispatch(loginUser(response.data));
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<main className={styles.login}>
			<Form method='POST' className={styles.form}>
				<h4>Вхід</h4>
				<FormInput
					type='email'
					label='Електронна пошта'
					name='identifier'
				/>
				<FormInput type='password' label='Пароль' name='password' />
				<div className={styles.container} onClick={guestLogin}>
					<SubmitBtn text='Увійти' />
				</div>
				<p className={styles.text}>
					Ще не є адміном?
					<Link to='/register' className={styles.link}>
						Реєстрація
					</Link>
				</p>
			</Form>
		</main>
	);
};

export default Login;
