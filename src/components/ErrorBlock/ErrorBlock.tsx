import { FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import styles from './ErrorBlock.module.scss';

const ErrorBlock: React.FC = () => {
	return (
		<section className={styles.error}>
			<h1 className={styles.title} data-testid='test-title'>
				404
			</h1>
			<p className={styles.subtitle}>
				Ой, здається, ця сторінка загубилася, як цуценя, що шукає свій
				дім.
			</p>
			<p className={styles.text}>
				Не хвилюйтеся, ми вже ведемо пошуки!<br></br>Тим часом ви можете
				повернутися на головну сторінку або допомогти нашим чотирилапим
				друзям. Дякуємо, що допомагаєте нам робити добрі справи!
			</p>
			<Link to='/' className={styles.link}>
				Перейти на головну <FaAngleRight />
			</Link>
		</section>
	);
};

export default ErrorBlock;
