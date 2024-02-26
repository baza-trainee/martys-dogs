import { useQuery } from '@tanstack/react-query';
import styles from './AdminNews.module.scss';
import { Loader, ErrorAlert } from '../../components/CommonUI/LoaderAndError/LoaderAndError';
import AdminNewsItem from '../AdminsNews/AdminNewsItem';
import { NewsItemProps} from '../../components/News/NewsItem';
import AddButton from '../../components/CommonUI/AddButton/AddButton';
import { fetchNews } from '../../services/adminNews';
import { useAuthContext } from '../../context/useGlobalContext';
export interface NewsData {
	news: NewsItemProps[];
}

const AdminNews: React.FC = () => {
	const { token } = useAuthContext();

	const {data:news, isPending, isError} = useQuery<NewsItemProps[]>({
		queryKey: ['news'],
		queryFn: () => typeof token === 'string' ? fetchNews(token) : Promise.resolve([]),
		refetchInterval: 600000,
		enabled: !!token,
	});


	console.log(news)

	if (isPending) {
		return (
			<Loader/>
		);
	}

	if (isError) {
		return (
			<ErrorAlert errorMessage='На жаль сталася помилка, перезавантажте  сторінку'/>
		);
	}

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
