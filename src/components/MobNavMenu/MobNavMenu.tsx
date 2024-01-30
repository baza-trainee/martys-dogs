import { Link } from 'react-router-dom';
import styles from './MobNavMenu.module.scss';
import { useTranslation } from 'react-i18next';

export interface MobNavMenuProps {
  currentLanguage: string;
  changeLanguage: ({ lng }: { lng: string }) => void;
  closeMenu: () => void;
}

const MobNavMenu = ({currentLanguage, changeLanguage, closeMenu}: MobNavMenuProps) => {
  const { t } = useTranslation();

  return (
    <nav
      className={styles.header_menu_mob}
    >
      <ul
        className={styles.header_menu_mob_cont}
      >
        <li
          className={styles.header_menu_mob_cat}
        >
          <Link 
            to="/"
            className={styles.header_menu_mob_link}
            onClick={closeMenu}
          >
            {t('header.nav_main')}
          </Link>
        </li>
        <li
          className={styles.header_menu_mob_cat}
        >
          <Link 
            to="/about"
            className={styles.header_menu_mob_link}
            onClick={closeMenu}
          >
            {t('header.nav_about')}
          </Link>
        </li>
        <li
          className={styles.header_menu_mob_cat}
        >
          <Link
            to="/tails"
            className={styles.header_menu_mob_link}
            onClick={closeMenu}
          >
            {t('header.nav_pets')}
          </Link>
        </li>
        <li
          className={styles.header_menu_mob_cat}
        >
          <Link
            to="/contacts"
            className={styles.header_menu_mob_link}
            onClick={closeMenu}
          >
            {t('header.nav_contact')}
          </Link>
        </li>
      </ul>
      <div
        className={styles.header_lng}
      >
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
    </nav>
  );
}

export default MobNavMenu;