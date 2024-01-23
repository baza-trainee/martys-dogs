import { FaXmark } from 'react-icons/fa6';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import styles from './Modal.module.scss';
// import { useNavigate } from 'react-router-dom';
// import Button from '../../layout/Button/Button';
// import ThankthModal from './ThankthModal';

const modalElement = document.getElementById('modal-root') as Element;

interface ModalProps {
	children: React.ReactNode;
	isModal: boolean;
	closeModal: () => void;
	openModal: () => void;
}
interface KeyboardEvent {
	code: string;
}

const Modal: React.FC<ModalProps> = ({ isModal, closeModal, children }) => {
	const handleBackdrop = (event: React.MouseEvent<HTMLElement>) => {
		if (event.target === event.currentTarget) {
			closeModal();
		}
	};

	const handleEscape = (event: KeyboardEvent) => {
		if (event.code === 'Escape') {
			closeModal();
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
		isModal && (
			<div className={styles.backdrop} onClick={handleBackdrop}>
				<div className={isModal ? styles.active : styles.modal}>
					<button
						type='button'
						className={styles.close}
						onClick={closeModal}
					>
						<FaXmark className={styles.icon} />
					</button>
					{children}
				</div>
			</div>
		),
		modalElement,
	);
};

export default Modal;
