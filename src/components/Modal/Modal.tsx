import { FaAngleRight, FaXmark } from 'react-icons/fa6';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import styles from './Modal.module.scss';
import { Link } from 'react-router-dom';

const modalElement = document.getElementById('modal-root') as Element;

interface ModalProps {
	// children: React.ReactNode;
	isModal: boolean;
}
interface KeyboardEvent {
	code: string;
}

// const Modal: React.FC<ModalProps> = ({ children, ismModal }) => {
// return createPortal(
// ismModalOpen && (
// 		<div className={styles.backdrop}>
// 			<div className={styles.modal}>{children}</div>
// 		</div>
// 	),
// modalElement,)};

const Modal: React.FC<ModalProps> = ({ isModal }) => {
	const handleBackdrop = (event: React.MouseEvent<HTMLElement>) => {
		if (event.target === event.currentTarget) {
			// setIsModal(false);
		}
	};

	const handleEscape = (event: KeyboardEvent) => {
		if (event.code === 'Escape') {
			// setIsModal(false);
		}
	};

	useEffect(() => {
		if (isModal) {
			window.addEventListener('keydown', handleEscape);
			return () => {
				window.removeEventListener('keydown', handleEscape);
			};
		}
	}, [isModal]);

	return createPortal(
		!isModal && (
			<div className={styles.backdrop} onClick={handleBackdrop}>
				<div className={styles.modal}>
					<div className={styles.wrapper}>
						<div className={styles.thumb}></div>
						<div className={styles.text}>
							<button
								type='button'
								className={styles.close}
								// onClick={() => setIsModal(false)}
							>
								<FaXmark size='lg' />
							</button>
							<h2 className={styles.title}>Дякуємо за донат!</h2>
							<p className={styles.info}>
								Ваша допомога має величезне значення. Завдяки
								Вашому внеску ми можемо продовжувати дбати про
								наших чотирилапих друзів, забезпечуючи їм
								необхідний догляд та шанс на краще життя.
							</p>
							<p className={styles.gratitude}>
								Щиро дякуємо від усіх наших хвостатих друзів!
							</p>
							<Link to='/' className={styles.return}>
								Повернутися на головну
								<FaAngleRight />
							</Link>
						</div>
					</div>
				</div>
			</div>
		),
		modalElement,
	);
};

export default Modal;
