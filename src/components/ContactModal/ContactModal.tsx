import styles from './ContactModal.module.scss';
import { useModalContext } from '../../context/useGlobalContext';
import ContactForm from './ContactForm';


const ContactModal: React.FC = () => {
	const { closeModal } = useModalContext();

	const handleSubmit = () => {
		closeModal();
		console.log('Send contacts: ');
	};
	return (
		<div className={styles.wrapper}>
			<div className={styles.imgBlock}></div>

			<div className={styles.contentBlock}>
				<div className={styles.textBlock}>
					<h2  >Ваша любов до тварин – справжній подарунок! Дякуємо вам за вирішення
						подарувати дім хвостику</h2>
					<p  >
						Ми скоро зв'яжемося, щоб розповісти вам більше і обговорити наступні кроки.
					</p>
				</div>

			<ContactForm onClick={handleSubmit}/>
			</div>
		</div>
	);
};

export default ContactModal;
