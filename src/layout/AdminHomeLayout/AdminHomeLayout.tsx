import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Admin from '../../pages/Admin/Admin';
import styles from './AdminHomeLayout.module.scss';
import { useAuthContext } from '../../context/useGlobalContext';

const AdminHomeLayout = () => {
	const navigate = useNavigate();
	const [isSidebarOpen, setSidebarOpen] = useState(true);
	const { isLoggedIn } = useAuthContext();

	useEffect(() => {
		if (!isLoggedIn) {
			navigate('/login');
		}
	}, [isLoggedIn, navigate]);

	return (
		<main className={styles.container}>
			<Admin isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
			<div className={isSidebarOpen ? styles.invisible : styles.visible}>
				<Outlet />
			</div>
		</main>
	);
};

export default AdminHomeLayout;
