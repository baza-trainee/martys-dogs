import { useQuery } from '@tanstack/react-query';
import styles from './AdminNews.module.scss';
import { news } from '../../components/News/data';
import AdminNewsItem, { NewsItemProps } from '../AdminsNews/AdminNewsItem';
import AddButton from '../../layout/AddButton/AddButton';

interface Photo {
	id: string;
	name: string;
	url: string;
	category: string;
}
interface NewsItem {
	id: number;
	title: string;
	post_at: string;
	update_at: string;
	sub_text: string;
	url: string;
	photo: Photo;
}

export interface NewsData {
	news: NewsItem[];
}

const NEWS = 'https://matys-dogs2.onrender.com/news';

const fetchNews = async () => {
	try {
		const response = await fetch(NEWS);

		if (!response.ok) {
			throw new Error('Data loading error');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error while loading data:', error);
		throw error;
	}
};

const AdminNews: React.FC = () => {
	const data = useQuery<NewsData>({
		queryKey: ['news'],
		queryFn: fetchNews,
		refetchInterval: 600000,
	});

	const { data: news, isPending, isError, error } = data;

	console.log(news?.news);
	if (isPending) {
		return (
			<div className={styles.container}>
				<div className={styles.loading}></div>
			</div>
		);
	}

	if (isError) {
		return (
			<div className={styles.container}>
				<div className={styles.alert}>{error.message}</div>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h2 className={styles.title}>Новини</h2>
			</div>
			<AddButton path='news_add' text='новину' />
			<ul className={styles.news}>
				{news?.news.map((item: NewsItemProps) => (
					<AdminNewsItem key={item.id} {...item} />
				))}
			</ul>
		</div>
	);
};

export default AdminNews;
