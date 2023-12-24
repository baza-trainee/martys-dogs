import { useTranslation } from 'react-i18next';
import NewsItem from './NewsItem';
import styles from './News.module.scss';
import { news } from './data';

const News: React.FC = () => {
	const { t } = useTranslation();

	return (
		<section className={styles.section}>
			<h2 className={styles.title}>{t('news.title')}</h2>
			<ul className={styles.news}>
				{news.map((item) => (
					<NewsItem key={item.id} {...item} />
				))}
			</ul>
		</section>
	);
};

export default News;
