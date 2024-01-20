import { Link } from 'react-router-dom';
import { FaRegPlusSquare } from 'react-icons/fa';
import styles from './AdminNews.module.scss';
import { news } from '../../components/News/data';
import AdminNewsItem, { NewsItemProps } from '../AdminsNews/AdminNewsItem';

const AdminNews: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h2 className={styles.title}>Новини</h2>
			</div>

			<div className={styles.buttonsWrapper}>
				<Link to='/admin/news_add'>
					<button className={styles.addButton}>
						<FaRegPlusSquare />
						Додати новину
					</button>
				</Link>
			</div>
			<div className={styles.logoContainer}>
				<ul className={styles.news}>
					{news.map((item: NewsItemProps) => (
						<AdminNewsItem key={item.id} {...item} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default AdminNews;
