import Button from '../../layout/Button/Button';
// import { ReactComponent as Login } from 'src/assets/icons/header/log-in-icon.svg';
import { FaPaw } from 'react-icons/fa6';

import styles from './Hero.module.scss';

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.leftBlock}>
				<div className={styles.textBlock}>
					<h1>Разом ми можемо більше</h1>
					<p>Допоможіть нам надати тепло та догляд нашим собакам. Ваш внесок рятує життя!</p>
				</div>

				<div className={styles.btnWrapper}>
					<Button
						btnClasses={'primary'}
						type={'button'}
						name={'Підтримати хвостатих'}
						onClick={() => console.log('click')}
						children={
							<div>
								<FaPaw />
								<FaPaw />
							</div>
						}
					/>
				</div>

			</div>
			<div className={styles.rightBlock}></div>

		</div>

	);
};
export default Hero;
