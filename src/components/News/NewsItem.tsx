import { useTranslation } from 'react-i18next';
import styles from './NewsItem.module.scss';
import Button from '../../layout/Button/Button';

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
			<Button
				type={'button'}
				name={t('news.button')}
				btnClasses={'primary'}
				onClick={() => console.log('to modal')}
			/>
		</li>
	);
};

export default NewsItem;
