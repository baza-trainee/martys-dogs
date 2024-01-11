import { Form, Link, useNavigate } from 'react-router-dom';

import FormInput from '../../components/FormInput/FormInput';
import SubmitBtn from '../../components/SubmitBtn/SubmitBtn';

const Login = () => {
	const navigate = useNavigate();

	const guestLogin = async () => {
        console.log('login');
    };

	// const guestLogin = async () => {
	// 	try {
	// 		const response = await customFetch.post('/auth/local', {
	// 			identifier: 'test@test.com',
	// 			password: 'secret',
	// 		});
	// 		dispatch(loginUser(response.data));
	// 		toast.success('Welcome, Guest');
	// 		navigate('/');
	// 	} catch (error) {
	// 		console.log(error);
	// 		toast.error('Guest login error. Please try again');
	// 	}
	// };

	return (
		<main className='grid h-screen place-items-center'>
			<Form
				method='POST'
				className='p-8 shadow shadow-primary card w-96 bg-base-100 gap-y-4'
			>
				<h4 className='text-3xl font-bold text-center'>Login</h4>
				<FormInput type='email' label='email' name='identifier' />
				<FormInput type='password' label='password' name='password' />
				<div className='mt-4'>
					<SubmitBtn text='login' />
				</div>
				<button
					type='button'
					className='uppercase duration-300 btn btn-block btn-secondary'
					onClick={guestLogin}
				>
					guest user
				</button>
				<p className='text-center'>
					Not a member yet?
					<Link
						to='/register'
						className='ml-2 capitalize link link-hover link-primary'
					>
						register
					</Link>
				</p>
			</Form>
		</main>
	);
};

export default Login;
