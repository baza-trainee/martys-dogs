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
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import logo from '../../assets/header_logo.webp';
import styles from './Admin.module.scss';

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
const Sidebar = () => {
	const [isSidebarOpen, setSidebarOpen] = useState(true);
	const [sms, setSms] = useState(0);

	useEffect(() => setSms(5), []);

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
								{link.id === 6 && sms > 0 && (
									<span className={styles.sms}>{sms}</span>
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
