import { FaAngleRight } from 'react-icons/fa6';
import styles from './AdoptionModal.module.scss';
import Button from '../../layout/Button/Button';
// import { Link } from 'react-router-dom';
import { useModalContext } from '../../context/useGlobalContext';
import { useNavigate } from 'react-router-dom';

const AdoptionModal: React.FC = () => {
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
				<h2 className={styles.title}>Ваше серце стало більшим!</h2>
				<p className={styles.info}>
					Дякуємо, що підготувати свій відкритий дім і свою душу для
					нового чотирилапого друга. Наша команда "Хвостики" вже не
					може дочекатися, щоб зв'язатися з вами та допомогти вам
					знайти ідеального пухнастого компаньйона..
				</p>
				<p className={styles.gratitude}>
					Ми скоро зателефонуємо вам, щоб обговорити наступні кроки і
					відповісти на ваші питання.
				</p>
				<div className={styles.return}>
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

export default AdoptionModal;
