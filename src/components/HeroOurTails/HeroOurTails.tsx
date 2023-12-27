import hero from '../../assets/hero-catalog.webp';
import styles from './HeroOurTails.module.scss';

const HeroOurTails = () => {
	return (
		<section className={styles.tails}>
			<div className={styles.content}>
				<h1 className={styles.title}>Наші хвости</h1>
				<p className={styles.text}>
					Зустрічайте наших чотирилапих героїв: кожен з них шукає свій
					дім та чекає на вашу допомогу. Дізнайтеся більше про наших
					вихованців, оберіть, кому хочете допомогти, або відкрийте
					своє серце для нового друга.
				</p>
			</div>
			<div className={styles.dog}>
				<div className={styles.quote}>
					<h4>Будь відповідальним господарем </h4>
					<div className={styles.arrow}></div>
				</div>
				<img src={hero} alt='dog' className={styles.image} />
			</div>
		</section>
	);
};

export default HeroOurTails;
