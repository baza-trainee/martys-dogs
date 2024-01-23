import { adminsData } from '../../data';
import styles from './Admins.module.scss';
import { useState } from 'react';

const Admins = () => {
	const [admins, setAdmins] = useState(adminsData);

	const handleToggleStatus = (adminId: string) => {
		setAdmins((prevAdmins) =>
			prevAdmins.map((admin) =>
				admin.id === adminId
					? { ...admin, status: !admin.status }
					: admin,
			),
		);
	};

	return (
		<main className={styles.main}>
			<h2>Адміністратори</h2>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Им'я</th>
						<th>Статус</th>
						<th>Активація</th>
					</tr>
				</thead>
				<tbody>
					{admins.map((admin) => (
						<tr key={admin.id}>
							<td>{admin.id}</td>
							<td>{admin.name}</td>
							<td>{admin.status ? 'Активний' : 'Неактивний'}</td>
							<td>
								<button
									onClick={() => handleToggleStatus(admin.id)}
									className={admin.status ? styles.red : styles.btn}
								>
									{admin.status
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
