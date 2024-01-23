import Button from '../../layout/Button/Button';
import { FaPaw } from 'react-icons/fa6';
import styles from './Hero.module.scss';
import { scrollToSection } from '../../services/scrollTo';
import { useTranslation } from 'react-i18next';


const Hero = () => {
	const { t } = useTranslation();

	return (
		<section className={styles.hero}>

			<div className={styles.heroContainer}>

				<div className={styles.textBlock}>

					<div className={styles.headingContainer}>
						<h1>{t('hero.title')}</h1>
					</div>

					<div className={styles.contentContainer}>
						<p>
							{t('hero.about')}
						</p>


						<div className={styles.list}>
							<div className={styles.listItem}>
								<div className={styles.listBubble}>
									<FaPaw />
									<FaPaw />
								</div>
								<span>{t('hero.point_1')}</span>
							</div>
							<div className={styles.listItem}>
								<div className={styles.listBubble}>
									<FaPaw />
									<FaPaw />
								</div>
								<span>{t('hero.point_2')}</span>
							</div>
							<div className={styles.listItem}>
								<div className={styles.listBubble}>
									<FaPaw />
									<FaPaw />
								</div>
								<span>{t('hero.point_3')}</span>
							</div>
							<div className={styles.listItem}>
								<div className={styles.listBubble}>
									<FaPaw />
									<FaPaw />
								</div>
								<span>{t('hero.point_4')}</span>
							</div>
						</div>

						<p>
							{t('hero.CTA')}
						</p>
					</div>

					<div className={styles.btnContainer}>
						<Button
							btnClasses={'primary'}
							type={'button'}
							name={t('hero.button')}
							onClick={() => scrollToSection('support')}
							children={
								<div>
									<FaPaw />
									<FaPaw />
								</div>
							}
						/>
					</div>
				</div>

				<div className={styles.imageBlock}></div>

			</div>
		</section>
	);
};
export default Hero;
