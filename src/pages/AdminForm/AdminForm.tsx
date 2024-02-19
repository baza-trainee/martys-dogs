import { useEffect, useState } from 'react';

import styles from './AdminForm.module.scss';
import Loader, {
	ErrorAlert,
} from '../../components/CommonUI/LoaderAndError/LoaderAndError';
import {
	getMessages,
	updateMessageStatus,
} from '../../services/adminsMessages';
import { useAuthContext } from '../../context/useGlobalContext';

interface Message {
	id: number;
	id_dog: {
		name: number;
	};
	phone_number: number;
	name: string;
	comment: string;
	status: boolean;
}
const AdminForm = () => {
	const { token } = useAuthContext();
	const [messages, setMessages] = useState<Message[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<null | unknown>(null);
	useEffect(() => {
		const fetchMessages = async () => {
			if (token !== null) {
				try {
					const data = await getMessages(token);
					setMessages(data);
					setLoading(false);
				} catch (error) {
					setError(error);
					setLoading(false);
				}
			}
		};
		fetchMessages();
	}, [token]);

	if (loading) {
		return <Loader backgroundColor={'#ebf5fb'} />;
	}

	if (error) {
		return (
			<ErrorAlert
				errorMessage={JSON.stringify(error)}
				backgroundColor={'#ebf5fb'}
			/>
		);
	}
	// console.log(messages);

	const handleToggleStatus = async (messageId: number) => {
		try {
			const newStatus = !messages.find(
				(message) => message.id === messageId,
			)?.status;

			if (token !== null) {
				await updateMessageStatus(token, messageId, newStatus);
			}
			setMessages((prevMessages) =>
				prevMessages.map((message) =>
					message.id === messageId
						? { ...message, status: newStatus }
						: message,
				),
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
					{messages?.map((message: Message) => (
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
									onClick={() =>
										handleToggleStatus(message.id)
									}
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
