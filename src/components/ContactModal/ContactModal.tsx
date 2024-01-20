import ContactForm from './ContactForm';
import { useTranslation } from 'react-i18next';
import styles from './ContactModal.module.scss';
import { Link } from 'react-router-dom';

// import { useModalContext } from '../../context/useGlobalContext';
/*

export interface ChangeLanguageParams {
	lng: string;
}

export type ChangeLanguageFunction = (params: ChangeLanguageParams) => void;

*/

const ContactModal: React.FC = () => {
	const { t, i18n } = useTranslation();

/*	const currentLanguage = i18n.language;

	const changeLanguage: ChangeLanguageFunction = ({ lng }) => {
		i18n.changeLanguage(lng);
	};*/

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
