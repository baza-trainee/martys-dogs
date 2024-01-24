import { FaTrash, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
	/// fetch current news  from backend

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

			{/* move  this  div with actions  to  separate component?  */}
			<div className={styles.logoActions}>
				<Link to='/admin/news_edit' className={styles.link}>
					<FaEdit className={styles.editIcon} />
				</Link>
				<button type='button' className={styles.deleteIcon}>
					<FaTrash className={styles.deleteIcon} />
				</button>
			</div>
		</li>
	);
};

export default NewsItem;
