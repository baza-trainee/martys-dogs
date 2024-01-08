import NewsItem, { NewsItemProps } from './NewsItem';

import { fetchNews } from '../../services/fetchData';
import styles from './News.module.scss';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

// import { news } from './data';




const News: React.FC = () => {
	const { t } = useTranslation();
	
	const {
		data: news,
		isPending,
		isError,
		error,
	} = useQuery({
		queryKey: ['news'],
		queryFn: fetchNews,
		refetchInterval: 600000,
	});

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
		<section className={styles.section}>
			<h2 className={styles.title}>{t('news.title')}</h2>
			<ul className={styles.news}>
				{news.map((item: NewsItemProps) => (
					<NewsItem key={item.id} {...item} />
				))}
			</ul>
		</section>
	);
};

export default News;
