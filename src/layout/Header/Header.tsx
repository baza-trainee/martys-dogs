import { useState } from 'react';
import styles from './Header.module.scss';
import { useTranslation } from 'react-i18next';
import headerLogo from '../../assets/header_logo.webp';
import { Link } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import MobNavMenu from '../../components/MobNavMenu/MobNavMenu';

export interface ChangeLanguageParams {
	lng: string;
}

export type ChangeLanguageFunction = (params: ChangeLanguageParams) => void;

const Header: React.FC = () => {
	const [openMobMenu, setOpenMobMenu] = useState(false);
	const { t, i18n } = useTranslation();

	const currentLanguage = i18n.language;

	const changeLanguage: ChangeLanguageFunction = ({ lng }) => {
		i18n.changeLanguage(lng);
	};

	return (
		<header
			className={styles.header}
		>
			<div
				className={styles.header_container}
			>
				<div
					className={styles.header_main}
				>
					<Link
						to="/"
					>
						<img
							src={headerLogo}
							alt="Best Friend logo"
							className={styles.header_logo}
						/>
					</Link>
					<nav>
						<ul
							className={styles.header_nav}
						>
							<li
								className={styles.header_nav_category}
							>
								<Link
									to="/about"
									className={styles.header_nav_link}
								>
									{t('header.nav_about')}
								</Link>
							</li>
							<li
								className={styles.header_nav_category}
							>
								<Link
									to="/tails"
									className={styles.header_nav_link}
								>
									{t('header.nav_pets')}
								</Link>
							</li>
							<li
								className={styles.header_nav_category}
							>
								<Link
									to="/contacts"
									className={styles.header_nav_link}
								>
									{t('header.nav_contact')}
								</Link>
							</li>
						</ul>
					</nav>
					<div
						className={styles.header_right_cont}
					>
						<div>
							<button
								className={`${styles.header_lng_btn} ${currentLanguage === "ua" ? styles.header_lng_btn_active : ""}`}
								onClick={() => changeLanguage({ lng: 'ua' })}
							>
								{t('header.lng_ua')}
							</button>
							<span
								className={styles.header_lng_gap}
							>
								/
							</span> 
							<button
								className={`${styles.header_lng_btn} ${currentLanguage !== "ua" ? styles.header_lng_btn_active : ""}`}
								onClick={() => changeLanguage({ lng: 'en' })}
							>
								{t('header.lng_en')}
							</button>
						</div>
						<div
							className={styles.header_mob_menu_cont_btn}
						>
							{!openMobMenu ? (
								<button
									className={styles.header_mob_menu_btn}
									onClick={() => setOpenMobMenu(true)}
								>
									<CiMenuBurger
										className={styles.header_mob_menu_btn_burger}
									/>
								</button>
							) : (
								<button
									className={styles.header_mob_menu_btn}
									onClick={() => setOpenMobMenu(false)}
								>
									<IoCloseOutline
										className={styles.header_mob_menu_btn_close}
									/>
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
			{openMobMenu && (
					<MobNavMenu />
				)}
		</header>
	);
};

export default Header;
