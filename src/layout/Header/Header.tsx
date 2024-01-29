import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import MobNavMenu from '../../components/MobNavMenu/MobNavMenu';
import headerLogo from '../../assets/header_logo.webp';
import styles from './Header.module.scss';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface ChangeLanguageParams {
	lng: string;
}

export type ChangeLanguageFunction = (params: ChangeLanguageParams) => void;

const Header: React.FC = () => {
	const [openMobMenu, setOpenMobMenu] = useState(false);
	const { t, i18n } = useTranslation();

	const currentLanguage: string = i18n.language;

	const handlerChangeLanguage: ChangeLanguageFunction = ({ lng }) => {
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
									to="/"
									className={styles.header_nav_link}
								>
									{t('header.nav_main')}
								</Link>
							</li>
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
						<div
							className={styles.header_lng}
						>
							<button
								className={`${styles.header_lng_btn} ${currentLanguage === "ua" ? styles.header_lng_btn_active : ""}`}
								onClick={() => handlerChangeLanguage({ lng: 'ua' })}
								data-testid="langBtnUa"
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
								onClick={() => handlerChangeLanguage({ lng: 'en' })}
								data-testid="langBtnEn"
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
									aria-label="CiMenuBurger"
								>
									<CiMenuBurger
										className={styles.header_mob_menu_btn_burger}
									/>
								</button>
							) : (
								<button
									className={styles.header_mob_menu_btn}
									onClick={() => setOpenMobMenu(false)}
									aria-label="IoCloseOutline"
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
			<TransitionGroup>
				{openMobMenu && (
					<CSSTransition
						key="mobNavMenu"
						timeout={300}
						classNames={{
							enter: styles.mobMenuEnter,
							enterActive: styles.mobMenuEnterActive,
							exit: styles.mobMenuExit,
							exitActive: styles.mobMenuExitActive,
						}}
					>
						<MobNavMenu
							currentLanguage={currentLanguage}
							changeLanguage={handlerChangeLanguage}
						/>
					</CSSTransition>
				)}
			</TransitionGroup>
		</header>
	);
};

export default Header;
