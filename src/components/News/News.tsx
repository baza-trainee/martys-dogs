import NewsItem from './NewsItem';
import styles from './News.module.scss';

const News: React.FC = () => {
	return (
		<section className={styles.section}>
			<h2 className={styles.title}>Новини притулку</h2>
			<ul className={styles.news}>
				<NewsItem />
				<NewsItem />
				<NewsItem />
				<NewsItem />
			</ul>
		</section>
	);
};

export default News;
