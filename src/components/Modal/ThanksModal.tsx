import { FaAngleRight } from 'react-icons/fa6';
import styles from './ThanksModal.module.scss';
import Button from '../../layout/Button/Button';
// import { Link } from 'react-router-dom';
import { useModalContext } from '../../context/useGlobalContext';
import { useNavigate } from 'react-router-dom';

const ThanksModal: React.FC = () => {
	// const modalContext = useModalContext();
	// const closeModal = modalContext?.closeModal || (() => {});
	const { closeModal } = useModalContext();
	const navigate = useNavigate();
	const returnToHome = () => {
		closeModal();
		navigate('/');
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.thumb}></div>
			<div className={styles.text}>
				<h2 className={styles.title}>Дякуємо за донат!</h2>
				<p className={styles.info}>
					Ваша допомога має величезне значення. Завдяки Вашому внеску
					ми можемо продовжувати дбати про наших чотирилапих друзів,
					забезпечуючи їм необхідний догляд та шанс на краще життя.
				</p>
				<p className={styles.gratitude}>
					Щиро дякуємо від усіх наших хвостатих друзів!
				</p>
				<div className={styles.button}>
					{/* <Link to='/'> */}
					<Button
						name={'Повернутися на головну'}
						btnClasses={'primary'}
						onClick={returnToHome}
						type={'button'}
						children={<FaAngleRight />}
					/>
					{/* </Link> */}
				</div>
			</div>
		</div>
	);
};

export default ThanksModal;
