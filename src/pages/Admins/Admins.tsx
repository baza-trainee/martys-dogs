// import { adminsData } from '../../data';

import { ErrorAlert, Loader } from '../../components/CommonUI/LoaderAndError/LoaderAndError';
import { getAdmins, updateAdminStatus } from '../../services/admins'
import { useEffect, useState } from 'react';

import styles from './Admins.module.scss';

const Admins = () => {
	const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const data = await getAdmins();
        setAdmins(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchAdmins();
  }, []);

	if (loading) {
		return <Loader backgroundColor={'#ebf5fb'} />;
	}

	if (error) {
		return (
			<ErrorAlert
				errorMessage={error}
				backgroundColor={'#ebf5fb'}
			/>
		);
	}

	// const handleToggleStatus = (adminId: number) => {
	// 	setAdmins((prevAdmins) =>
	// 		prevAdmins.map((admin) =>
	// 			admin.id === adminId
	// 				? { ...admin, is_approved: !admin.is_approved }
	// 				: admin,
	// 		),
	// 	);
	// };
	
	const handleToggleStatus = async (adminId: number) => {
		try {
			const newStatus = !admins.find(admin => admin.id === adminId).is_approved;
			await updateAdminStatus(adminId, newStatus);
			setAdmins(prevAdmins =>
				prevAdmins.map(admin =>
					admin.id === adminId ? { ...admin, is_approved: newStatus } : admin
				)
			);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<main className={styles.main}>
			<h2 className={styles.title}>Адміністратори</h2>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Им'я</th>
						<th>Статус</th>
						<th>Активація</th>
					</tr>
				</thead>
				<tbody>
					{admins?.map((admin) => (
						<tr key={admin.id}>
							<td>{admin.id}</td>
							<td>{admin.user?.first_name} {admin.user?.last_name}</td>
							<td>{admin.is_approved ? 'Активний' : 'Неактивний'}</td>
							<td>
								<button
									onClick={() => handleToggleStatus(admin.id)}
									className={
										admin.is_approved ? styles.red : styles.btn
									}
								>
									{admin.is_approved
										? 'Деактивувати'
										: 'Активувати '}
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</main>
	);
};

export default Admins;
