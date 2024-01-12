import Admin from '../../pages/Admin/Admin';
import { Outlet } from 'react-router-dom';
import styles from './AdminHomeLayout.module.scss';

const AdminHomeLayout = () => {
	return (
		<main className={styles.container}>
			<Admin />
			<Outlet />
		</main>
	);
};

export default AdminHomeLayout;
