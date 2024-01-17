import NewsItem, { NewsItemProps } from './NewsItem';

import styles from './News.module.scss';
import { useTranslation } from 'react-i18next';

// import { news } from './data';



const News: React.FC = ({ data }) => {
	const { t } = useTranslation();

	const { data: news, isPending, isError, error } = data;
	
	console.log(news?.news_data);

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
				{news?.news_data?.map((item: NewsItemProps) => (
					<NewsItem key={item.id} {...item} />
				))}
			</ul>
		</section>
	);
};

export default News;
