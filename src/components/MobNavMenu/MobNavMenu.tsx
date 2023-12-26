import styles from './MobNavMenu.module.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const MobNavMenu = () => {
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
            to="/about"
            className={styles.header_menu_mob_link}
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
          >
            {t('header.nav_contact')}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MobNavMenu;