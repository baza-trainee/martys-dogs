import { useQuery } from '@tanstack/react-query';
import styles from './AdminNews.module.scss';
import { Loader } from '../../components/CommonUI/LoaderAndError/LoaderAndError';
import AdminNewsItem, { NewsItemProps } from '../AdminsNews/AdminNewsItem';
import AddButton from '../../components/CommonUI/AddButton/AddButton';
import { fetchNews } from '../../services/adminNews';

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
			<Loader/>
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
