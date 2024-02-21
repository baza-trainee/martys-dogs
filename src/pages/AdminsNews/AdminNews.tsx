import { useQuery } from '@tanstack/react-query';
import styles from './AdminNews.module.scss';
import { Loader, ErrorAlert } from '../../components/CommonUI/LoaderAndError/LoaderAndError';
import AdminNewsItem, { NewsItemProps } from '../AdminsNews/AdminNewsItem';
import AddButton from '../../components/CommonUI/AddButton/AddButton';
import { fetchNews } from '../../services/adminNews';
import { useAuthContext } from '../../context/useGlobalContext';
interface Photo {
	id: string;
	name: string;
	url: string;
	category: string;
}
export  interface NewsItem {
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
	const { token } = useAuthContext();

	const {data:news, isPending, isError} = useQuery<NewsItem[]>({
		queryKey: ['news'],
		queryFn: () => typeof token === 'string' ? fetchNews(token) : Promise.resolve([]),
		refetchInterval: 600000,
		enabled: !!token,
	});

const  str = 'Meet the family of sweet Milka and her black daughters and sons - such sweet oreos. Unfortunately, they were abandoned, right in the middle of the in the middle of winter, to starve to death!!!'
console.log(str.length)
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
