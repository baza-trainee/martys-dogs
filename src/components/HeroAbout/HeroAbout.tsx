import Button from '../../layout/Button/Button';
import { Link } from 'react-router-dom';
import styles from './HeroAbout.module.scss';
import { useTranslation } from 'react-i18next';

const HeroAbout = () => {
	const { t } = useTranslation();
	return (
		<>
			<section className={styles.hero}>
				<div className={styles.hero_container}>
					<div className={styles.hero_wrapper}>
						<div className={styles.name}></div>
						<h1
							className={styles.title}
							data-testid='heroAboutTitle'
						>
							{t('heroAbout.title')}
						</h1>
						<p className={styles.text}>{t('heroAbout.text')}</p>
					</div>
					<div className={styles.photo}></div>
				</div>
			</section>
			<section className={styles.info}>
				<div className={styles.info_container}>
					<div className={styles.logo}></div>
					<div className={styles.info_wrapper}>
						<h2 className={styles.goal}>{t('heroAbout.goal')}</h2>
						<p className={styles.goal_text}>
							{t('heroAbout.goal_text')}
						</p>
						<p className={styles.goal_text_bottom}>
							{t('heroAbout.goal_text_bottom')}
						</p>
						<div className={styles.button}>
							<Link to='/tails'>
								<Button
									name={t('heroAbout.button')}
									btnClasses={'primary'}
									onClick={() => console.log('to tail')}
									type={'button'}
									children={
										<div className={styles.icon}></div>
									}
								/>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroAbout;
