import { Fa500Px, FaAddressBook, FaAlignRight, FaDog, FaFileImage, FaNewspaper, FaPeopleGroup } from 'react-icons/fa6';

import { Link } from 'react-router-dom';
import logo from '../../assets/header_logo.webp';
import styles from './Admin.module.scss';
import { useState } from 'react';

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
		url: '/admin/numbers',
		text: 'Кількість',
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
		url: '/admin/pass',
		text: 'Адміністратори',
		icon: <FaAddressBook />,
	},
];
const Sidebar = () => {
	const [isSidebarOpen, setSidebarOpen] = useState(true);

	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen);
	};

	return (
		<aside
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
						</Link>
					</li>
				))}
			</ul>
			<Link to='/' className={styles.button}>
				Вийти
			</Link>
		</aside>
	);
};

export default Sidebar;
