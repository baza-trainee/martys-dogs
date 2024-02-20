import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/useGlobalContext';
import Admin from '../../pages/Admin/Admin';
import { Outlet } from 'react-router-dom';
import styles from './AdminHomeLayout.module.scss';

const AdminHomeLayout = () => {
	const navigate = useNavigate();

	const { isLoggedIn } = useAuthContext();

	useEffect(() => {
		if (!isLoggedIn) {
			navigate('/login');
		}
	}, [isLoggedIn]);

	return (
		<main className={styles.container}>
			<Admin />
			<Outlet />
		</main>
	);
};

export default AdminHomeLayout;
