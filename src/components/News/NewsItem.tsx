import Button from '../../layout/Button/Button';
import styles from './NewsItem.module.scss';
import { useTranslation } from 'react-i18next';

export interface NewsItemProps {
	id: number;
	title: string;
	post_at: string;
	update_at: string;
	sub_text: string;
	Text: string;
	photo: {
		id: string;
		name: string;
		url: string;
		category: string;
	};
}

const NewsItem: React.FC<NewsItemProps> = ({
	// id,
	title,
	post_at,
	// update_at,
	// sub_text,
	Text,
	photo,
}) => {
	const { t } = useTranslation();

	return (
		<li className={styles.item}>
			<div className={styles.thumb}>
				<img src={photo.url} alt='photo' className={styles.photo} />
			</div>
			<div className={styles.info}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.date}>{post_at}</p>
				<p className={styles.text}>{Text}</p>
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
