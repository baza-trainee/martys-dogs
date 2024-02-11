import { FaAngleRight } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import styles from './ThanksModal.module.scss';
import Button from '../../layout/Button/Button';
import { useModalContext } from '../../context/useGlobalContext';
import { useNavigate } from 'react-router-dom';

const ThanksModal: React.FC = () => {
	const { t } = useTranslation();
	const { closeModal } = useModalContext();
	const navigate = useNavigate();
	const returnToHome = () => {
		closeModal();
		navigate('/');
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.thumb}></div>
			<div className={styles.text}>
				<h2 className={styles.title}>{t('thanksModal.title')}</h2>
				<p className={styles.info}>{t('thanksModal.info')}</p>
				<p className={styles.gratitude}>{t('thanksModal.gratitude')}</p>
				<div className={styles.return}>
					<Button
						name={t('thanksModal.button')}
						btnClasses={'primary'}
						onClick={returnToHome}
						type={'button'}
						children={<FaAngleRight />}
					/>
				</div>
			</div>
		</div>
	);
};

export default ThanksModal;
