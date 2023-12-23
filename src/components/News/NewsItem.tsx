import styles from './NewsItem.module.scss';
import photo from '../../assets/newsphoto/1.2.webp';

const NewsItem: React.FC = () => {
	return (
		<li className={styles.item}>
			<div className={styles.thumb}>
				<img src={photo} alt='' className={styles.photo} />
			</div>
			<div className={styles.info}>
				<h3 className={styles.title}>Новий член сім'ї</h3>
				<p className={styles.date}>14 грудня 2023</p>
				<p className={styles.text}>
					Сьогодні до нашого притулку прийшла нова собачка. Вона шукає
					свій дім та люблячого господаря. Знайдіть час прийти та
					познайомитися з нею!
				</p>
			</div>
			{/* буде  окремий  компонент КНОПКА? */}
			<button className={styles.button} type='button'>
				Детальніше
			</button>
		</li>
	);
};

export default NewsItem;
