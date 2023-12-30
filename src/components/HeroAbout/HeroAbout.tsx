import { Link } from 'react-router-dom';
import styles from './HeroAbout.module.scss';
import Button from '../../layout/Button/Button';
const HeroAbout = () => {
	return (
		<>
			<section className={styles.hero}>
				<div className={styles.hero_wrapper}>
					<div className={styles.name}></div>
					<h1 className={styles.title}>
						Тут кожна тварина знаходить порятунок та допомогу!
					</h1>
					<p className={styles.text}>
						Ласкаво просимо до нашого притулку. Ми забезпечуємо
						тимчасовий притулок, турботу та пошук нових, люблячих
						сімей для наших чотирилапих друзів.
					</p>
				</div>
				<div className={styles.photo}></div>
			</section>
			<section className={styles.info}>
				<div className={styles.info_wrapper}>
					<h2 className={styles.goal}>
						Наша мета - створити комфортне та безпечне середовище
						для кожної тварини, де вони можуть відчувати тепло,
						увагу та любов.
					</h2>
					<p className={styles.goal_text}>
						У нас знаходяться собаки різних порід, розмірів та
						характерів, які шукають свій дім. Ми працюємо з
						добровольцями та ветеринарними фахівцями, щоб
						забезпечити кожну собаку необхідною медичною допомогою,
						вакцинацією та відповідною доглядом. <br /> Процес
						адопції у нас надзвичайно простий. Ви можете завітати до
						нашого притулку, зустрітися з нашими собаками, пізнати
						їхні характери та обрати нового друга для вашої родини.
						Кожна собака заслуговує на щасливе життя, і ми
						допоможемо вам знайти того, хто стане вашим вірним
						компаньйоном.
					</p>
					<div className={styles.button}>
						<Link to='/tails'>
							<Button
								name={'Подивитись всіх хвостиків'}
								btnClasses={'primary'}
								onClick={() => console.log('click')}
								type={'button'}
								children={<div className={styles.icon}></div>}
							/>
						</Link>
					</div>
				</div>
				<div className={styles.logo}></div>
			</section>
		</>
	);
};

export default HeroAbout;
