import styles from './AdminNews.module.scss';
import { news } from '../../components/News/data';
import AdminNewsItem, { NewsItemProps } from '../AdminsNews/AdminNewsItem';
import AddButton from '../../layout/AddButton/AddButton';

const AdminNews: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h2 className={styles.title}>Новини</h2>
			</div>
			<AddButton path='news_add' text='новину' />
			<ul className={styles.news}>
				{news.map((item: NewsItemProps) => (
					<AdminNewsItem key={item.id} {...item} />
				))}
			</ul>
		</div>
	);
};

export default AdminNews;
