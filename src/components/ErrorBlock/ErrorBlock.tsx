import { FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import styles from './ErrorBlock.module.scss';

const ErrorBlock: React.FC = () => {
	return (
		<section className={styles.error}>
			<h1 className={styles.title} data-testid='test-title'>
				404
			</h1>
			<p className={styles.text}>
				Вибачте, сторінка, яку ви шукаєте, видалена або переміщена
			</p>
			<Link to='/' className={styles.link}>
				Перейти на головну <FaAngleRight />
			</Link>
		</section>
	);
};

export default ErrorBlock;
