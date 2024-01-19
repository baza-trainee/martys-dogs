import Button from '../../layout/Button/Button';
import { FaPaw } from 'react-icons/fa6';
import styles from './Hero.module.scss';
import { scrollToSection } from '../../services/scrollTo';

const Hero = () => {
	return (
		<section className={styles.hero}>

			<div className={styles.heroContainer}>

				<div className={styles.textBlock}>

					<div className={styles.headingContainer}>
						<h1>Собачі вітання з особливого притулку, де відбувається колообіг добра і шерсті! </h1>
					</div>

					<div className={styles.contentContainer}>
						<p>
							Ми - це Хвостики притулку для собак та центру каністерапії Міста Добра. Всі ми:
						</p>


						<div className={styles.list}>
							<div className={styles.listItem}>
								<div className={styles.listBubble}>
									<FaPaw />
									<FaPaw />
								</div>
								<span>Вакциновані</span>
							</div>
							<div className={styles.listItem}>
								<div className={styles.listBubble}>
									<FaPaw />
									<FaPaw />
								</div>
								<span>Стерилізовані</span>
							</div>
							<div className={styles.listItem}>
								<div className={styles.listBubble}>
									<FaPaw />
									<FaPaw />
								</div>
								<span>Оброблені від паразитів</span>
							</div>
							<div className={styles.listItem}>
								<div className={styles.listBubble}>
									<FaPaw />
									<FaPaw />
								</div>
								<span>Лікуємо любов’ю</span>
							</div>
						</div>

						<p>
							З відкритим серцем шукаємо дім та допомогу
						</p>
					</div>

					<div className={styles.btnContainer}>
						<Button
							btnClasses={'primary'}
							type={'button'}
							name={'Підтримати хвостиків'}
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
