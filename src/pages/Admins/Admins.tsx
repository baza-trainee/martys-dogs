import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

import styles from './Admins.module.scss';
import {
	ErrorAlert,
	Loader,
} from '../../components/CommonUI/LoaderAndError/LoaderAndError';
import { getAdmins, updateAdminStatus } from '../../services/admins';
import { useAuthContext } from '../../context/useGlobalContext';

interface Admin {
	id: number;
	user: {
		first_name: string;
		last_name: string;
	};
	is_approved: boolean;
}

const Admins = () => {
	const { token } = useAuthContext();

	const [admins, setAdmins] = useState<Admin[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<null | unknown>(null);

	useEffect(() => {
		const fetchAdmins = async () => {
			if (token !== null) {
				try {
					const data = await getAdmins(token);
					setAdmins(data);
					setLoading(false);
				} catch (error) {
					setError(error);
					setLoading(false);
				}
			}
		};

		fetchAdmins();
	}, [token]);

	if (loading) {
		return (
			<div className={styles.container}>
				<Loader />
			</div>
		);
	}

	if (error) {
		let errorMessage;
		if (error && (error as AxiosError)?.response?.status === 403) {
			errorMessage = 'У вас нема дозволу робити цю дію';
		} else {
			errorMessage = 'Не вдалося завантажити дані';
		}
		return (
			<div className={styles.container}>
				<ErrorAlert errorMessage={errorMessage} />
			</div>
		);
	}

	const handleToggleStatus = async (adminId: number) => {
		try {
			const newStatus = !admins.find((admin) => admin.id === adminId)
				?.is_approved;

			if (token !== null) {
				await updateAdminStatus(token, adminId, newStatus);
			}

			setAdmins((prevAdmins) =>
				prevAdmins.map((admin) =>
					admin.id === adminId
						? { ...admin, is_approved: newStatus }
						: admin,
				),
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
						<th>Ім'я</th>
						<th>Статус</th>
						<th>Активація</th>
					</tr>
				</thead>
				<tbody>
					{admins?.map((admin) => (
						<tr key={admin.id}>
							<td>{admin.id}</td>
							<td>
								{admin.user?.first_name} {admin.user?.last_name}
							</td>
							<td>
								{admin.is_approved ? 'Активний' : 'Неактивний'}
							</td>
							<td>
								<button
									onClick={() => handleToggleStatus(admin.id)}
									className={
										admin.is_approved
											? styles.red
											: styles.btn
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
