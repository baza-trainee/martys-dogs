import { useTranslation } from 'react-i18next';
import styles from './NewsItem.module.scss';
interface NewsItemProps {
	id: string;
	title: string;
	img: string;
	date: string;
	text: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ img, title, text, date }) => {
	const { t } = useTranslation();

	return (
		<li className={styles.item}>
			<div className={styles.thumb}>
				<img src={img} alt='' className={styles.photo} />
			</div>
			<div className={styles.info}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.date}>{date}</p>
				<p className={styles.text}>{text}</p>
			</div>
			{/* буде  окремий  компонент КНОПКА? */}
			<button className={styles.button} type='button'>
				{t('news.button')}
			</button>
		</li>
	);
};

export default NewsItem;
