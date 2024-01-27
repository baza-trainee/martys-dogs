import ContactForm from './ContactForm';
import { useTranslation } from 'react-i18next';

import styles from './ContactModal.module.scss';


const ContactModal: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.wrapper}>
			<div className={styles.imgBlock}></div>

			<div className={styles.contentBlock}>
				<div className={styles.textBlock}>
					<h2>{t('contactModal.title')}</h2>
					<p>{t('contactModal.subtitle')}
					</p>
				</div>

				<ContactForm />
			</div>
		</div>
	);
};

export default ContactModal;
