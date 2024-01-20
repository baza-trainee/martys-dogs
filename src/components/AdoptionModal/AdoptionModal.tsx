import { FaAngleRight } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import styles from './AdoptionModal.module.scss';
import Button from '../../layout/Button/Button';
// import { Link } from 'react-router-dom';
import { useModalContext } from '../../context/useGlobalContext';
import { useNavigate } from 'react-router-dom';

const AdoptionModal: React.FC = () => {
	const { t } = useTranslation();
	// const modalContext = useModalContext();
	// const closeModal = modalContext?.closeModal || (() => {});
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
				<h2 className={styles.title}>{t('adoption.title')}</h2>
				<p className={styles.info}>{t('adoption.info')}</p>
				<p className={styles.gratitude}>{t('adoption.gratitude')}</p>
				<div className={styles.return}>
					<Button
						name={t('adoption.button')}
						btnClasses={'primary'}
						onClick={returnToHome}
						type={'button'}
						children={<FaAngleRight className={styles.arrow} />}
					/>
				</div>
			</div>
		</div>
	);
};

export default AdoptionModal;
