import ItemActions from '../../layout/ItemActions/ItemActions';
import styles from './AdminNewsItem.module.scss';

export interface NewsItemProps {
	id: number;
	title: string;
	post_at: string;
	// update_at: string;
	sub_text: string;
	// url: string;
	photo: {
		// id: string;
		// name: string;
		url: string;
		// category: string;
	};
}

const NewsItem: React.FC<NewsItemProps> = ({
	// id,
	title,
	post_at,
	// update_at,
	sub_text,
	photo,
	// url,
}) => {
	const months: { [key: string]: string } = {
		січень: 'січня',
		лютий: 'лютого',
		березень: 'березня',
		квітень: 'квітня',
		травень: 'травня',
		червень: 'червня',
		липень: 'липня',
		серпень: 'серпня',
		вересень: 'вересня',
		жовтень: 'жовтня',
		листопад: 'листопада',
		грудень: 'грудня',
	};

	const getDateName = (data: string) => {
		const date = new Date(data);
		const monthFromDate = date.toLocaleString('uk-UA', { month: 'long' });
		const changedMonth = months[monthFromDate];
		const stringDate = `${date.getDate()} ${changedMonth} ${date.getFullYear()}`;
		return stringDate;
	};

	return (
		<li className={styles.item}>
			<div className={styles.thumb}>
				<img src={photo.url} alt='photo' className={styles.photo} />
			</div>
			<div className={styles.info}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.date}>{getDateName(post_at)}</p>
				<p className={styles.text}>{sub_text}</p>
			</div>
			{/* <a href={url} target='blank' rel='noopener noreferrer'></a> */}
			<ItemActions path='news_edit' />
		</li>
	);
};

export default NewsItem;
