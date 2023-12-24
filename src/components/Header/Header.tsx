import About from '../../pages/About/About';
import logo from '../../assets/react.svg';
import styles from './Header.module.scss';
import { useTranslation } from 'react-i18next';

export interface ChangeLanguageParams {
	lng: string;
}

export type ChangeLanguageFunction = (params: ChangeLanguageParams) => void;

const Header: React.FC = () => {
	const { t, i18n } = useTranslation();

	const changeLanguage: ChangeLanguageFunction = ({ lng }) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div className={styles.block}>
            <h1>Header</h1>
			<div className={styles.header}>
				<img src={logo} className={styles.logo} alt='logo' />
				<div>
					<button
						type='button'
						onClick={() => changeLanguage({ lng: 'ua' })}
					>
						Switch to Ukrainian
					</button>
					<button
						type='button'
						onClick={() => changeLanguage({ lng: 'en' })}
					>
						Switch to English
					</button>
				</div>
			</div>
			<div className={styles.intro}>
				<About />
			</div>
			<div>{t('description.part2')}</div>
		</div>
	);
};

export default Header;
