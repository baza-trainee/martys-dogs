import ContactForm from './ContactForm';
import styles from './ContactModal.module.scss';

// import { useModalContext } from '../../context/useGlobalContext';



const ContactModal: React.FC = () => {

	return (
		<div className={styles.wrapper}>
			<div className={styles.imgBlock}></div>

			<div className={styles.contentBlock}>
				<div className={styles.textBlock}>
					<h2>Ваша любов до тварин – справжній подарунок! Дякуємо вам за вирішення
						подарувати дім хвостику</h2>
					<p>
						Ми скоро зв'яжемося, щоб розповісти вам більше і обговорити наступні кроки.
					</p>
				</div>

				<ContactForm  />
			</div>
		</div>
	);
};

export default ContactModal;
