import Loader, { ErrorAlert } from '../../components/CommonUI/LoaderAndError/LoaderAndError'
import { getMessages, updateMessageStatus } from '../../services/adminsMessages'
import { useEffect, useState } from 'react';

import styles from './AdminForm.module.scss';

// import { formData } from '../../data';

const AdminForm = () => {
	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await getMessages();
				setMessages(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchMessages();
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
	// console.log(messages);

	const handleToggleStatus = async (messageId: number) => {
		try {
			const newStatus = !messages.find(message => message.id === messageId).status;
			await updateMessageStatus(messageId, newStatus);
			setMessages(prevMessages =>
				prevMessages.map(message =>
					message.id === messageId ? { ...message, status: newStatus } : message
				)
			);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<main className={styles.main}>
			<h2 className={styles.title}>Повідомлення</h2>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Хвостик</th>
						<th>Телефон</th>
						<th>Им'я</th>
						<th>Повідомлення</th>
						<th>Статус</th>
						<th>Обробка</th>
					</tr>
				</thead>
				<tbody>
					{messages?.map((message) => (
						<tr key={message.id}>
							<td>{message.id_dog.name}</td>
							<td>{message.phone_number}</td>
							<td>{message.name}</td>
							<td>{message.comment}</td>
							<td>
								{message.status ? 'Оброблене' : 'Необроблене'}
							</td>
							<td>
								<button
									onClick={() => handleToggleStatus(message.id)}
									className={
										message.status ? styles.red : styles.btn
									}
								>
									{message.status
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
