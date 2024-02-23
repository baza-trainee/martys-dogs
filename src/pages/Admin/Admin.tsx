import { Dispatch, FC } from 'react';
import {
	Fa500Px,
	FaAddressBook,
	FaAlignRight,
	FaCommentSms,
	FaDog,
	FaFileImage,
	FaNewspaper,
	FaPeopleGroup,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import logo from '../../assets/header_logo.webp';
import styles from './Admin.module.scss';
import { Message } from '../AdminForm/AdminForm';
import { getMessages } from '../../services/adminsMessages';
import { useAuthContext } from '../../context/useGlobalContext';

const links = [
	{
		id: 1,
		url: '/admin',
		text: 'Хвостики',
		icon: <FaDog />,
	},
	{
		id: 2,
		url: '/admin/partners',
		text: 'Партнери',
		icon: <FaPeopleGroup />,
	},
	{
		id: 3,
		url: '/admin/news',
		text: 'Новини',
		icon: <FaNewspaper />,
	},
	{
		id: 4,
		url: '/admin/statistics',
		text: 'Статистика',
		icon: <Fa500Px />,
	},
	{
		id: 5,
		url: '/admin/photos',
		text: 'Фото',
		icon: <FaFileImage />,
	},
	{
		id: 6,
		url: '/admin/sms',
		text: 'Повідомлення',
		icon: <FaCommentSms />,
	},
	{
		id: 7,
		url: '/admin/pass',
		text: 'Адміністратори',
		icon: <FaAddressBook />,
	},
];

interface SidebarProps {
	isSidebarOpen: boolean;
	setSidebarOpen: Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: FC<SidebarProps> = ({ isSidebarOpen, setSidebarOpen }) => {
	const { token } = useAuthContext();
	const [messageQuantity, setMessageQuantity] = useState(0);

	useEffect(() => {
		const fetchSMS = async () => {
			if (token !== null) {
				try {
					const data = await getMessages(token);
					console.log(data);
					setMessageQuantity(
						data?.filter((message: Message) => !message.status)
							.length,
					);
				} catch (error) {
					console.log(error);
				}
			}
		};
		fetchSMS();
	}, [token]);

	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen);
	};

	return (
		<aside className={styles.box}>
			<div
				className={
					isSidebarOpen
						? `${styles.sidebar} ${styles.show}`
						: styles.sidebar
				}
			>
				<div className={styles.header}>
					<img src={logo} alt='logo' className='logo' />
				</div>
				<div className={styles.container}>
					<h3>Адмін-панель</h3>
					<div className={styles.bars} onClick={toggleSidebar}>
						<FaAlignRight />
					</div>
				</div>
				<ul className={styles.links}>
					{links.map((link) => (
						<li key={link.id}>
							<Link to={link.url}>
								{link.icon}
								{link.text}
								{link.id === 6 && messageQuantity > 0 && (
									<span className={styles.sms}>
										{messageQuantity}
									</span>
								)}
							</Link>
						</li>
					))}
				</ul>
				<Link to='/' className={styles.button}>
					Вийти
				</Link>
			</div>
		</aside>
	);
};

export default Sidebar;
