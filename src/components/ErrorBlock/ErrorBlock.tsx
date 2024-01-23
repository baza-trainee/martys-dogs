import { FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import styles from './ErrorBlock.module.scss';
import { useTranslation } from 'react-i18next';

const ErrorBlock: React.FC = () => {
	const { t } = useTranslation();

	return (
		<section className={styles.error}>
			<h1 className={styles.title} data-testid='test-title'>
				404
			</h1>
			<p className={styles.text}>{t('error.text')}</p>
			<Link to='/' className={styles.link}>
				{t('error.button')} <FaAngleRight />
			</Link>
		</section>
	);
};

export default ErrorBlock;
