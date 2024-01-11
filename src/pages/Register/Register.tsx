import { Form, Link } from 'react-router-dom';

import FormInput from '../../components/FormInput/FormInput';
import SubmitBtn from '../../components/SubmitBtn/SubmitBtn';

const Register = () => {
	return (
		<section className='grid h-screen place-items-center'>
			<Form
				method='POST'
				className='p-8 shadow card bg-base-100 gap-y-4 shadow-primary w-96'>
				<h4 className='text-3xl font-bold text-center'>Register</h4>
				<FormInput type='text' label='username' name='username' />
				<FormInput type='email' label='email' name='email' />
				<FormInput type='password' label='password' name='password' />
				<div className='mt-4'>
					<SubmitBtn text='register' />
				</div>
				<p className='text-center'>
					Already member?
					<Link
						to='/login'
						className='ml-2 capitalize link link-hover link-primary'>
						login
					</Link>
				</p>
			</Form>
		</section>
	);
};

export default Register;
