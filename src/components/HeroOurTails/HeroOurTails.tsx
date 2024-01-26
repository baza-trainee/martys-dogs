import hero from '../../assets/hero-catalog.webp';
import styles from './HeroOurTails.module.scss';
import { useTranslation } from 'react-i18next';

const HeroOurTails: React.FC = () => {
	const { t } = useTranslation();

	return (
		<section className={styles.tails}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1 className={styles.title}>{t('tailsHero.title')}</h1>
					<p className={styles.text}>{t('tailsHero.text')}</p>
				</div>
				<div className={styles.dog}>
					<div className={styles.tailA}>
						<h5>{t('tailsHero.tailA')}</h5>
						<div className={styles.arrow}></div>
					</div>
					<div className={styles.tailB}>
						<h5>{t('tailsHero.tailB')}</h5>
						<div className={styles.arrow}></div>
					</div>
					<img src={hero} alt='Boys with dogs' className={styles.image} />
				</div>
			</div>
		</section>
	);
};

export default HeroOurTails;
