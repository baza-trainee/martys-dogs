import { formData } from '../../data';
import styles from './AdminForm.module.scss';
import { useState } from 'react';

const AdminForm = () => {
	const [admins, setAdmins] = useState(formData);

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
			<h2 className={styles.title}>Повідомлення</h2>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Дата</th>
						<th>Телефон</th>
						<th>Им'я</th>
						<th>Повідомлення</th>
						<th>Статус</th>
						<th>Обробка</th>
					</tr>
				</thead>
				<tbody>
					{admins.map((admin) => (
						<tr key={admin.id}>
							<td>{admin.data}</td>
							<td>{admin.number}</td>
							<td>{admin.name}</td>
							<td>{admin.sms}</td>
							<td>
								{admin.status ? 'Оброблене' : 'Необроблене'}
							</td>
							<td>
								<button
									onClick={() => handleToggleStatus(admin.id)}
									className={
										admin.status ? styles.red : styles.btn
									}
								>
									{admin.status
										? 'Розархівувати'
										: 'Обробити'}
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</main>
	);
};

export default AdminForm;
