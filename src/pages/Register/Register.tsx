import { Form, Link } from 'react-router-dom';

import FormInput from '../../components/FormInput/FormInput';
import SubmitBtn from '../../components/SubmitBtn/SubmitBtn';
import styles from './Register.module.scss';

const Register: React.FC = () => {
	return (
		<main className={styles.login}>
			<Form
				method='POST'
				className={styles.form}
			>
				<h4 className='text-3xl font-bold text-center'>Реєстрація</h4>
				<FormInput type='text' label="Ім'я" name='username' />
				<FormInput type='email' label='Електронна пошта' name='email' />
				<FormInput type='password' label='Пароль' name='password' />
				<div className={styles.container}>
					<SubmitBtn text='Реєстрація' />
				</div>
				<p className={styles.text}>
					Вже адміністратор?
					<Link
						to='/login'
						className={styles.link}
					>
						Вхід
					</Link>
				</p>
			</Form>
		</main>
	);
};

export default Register;
