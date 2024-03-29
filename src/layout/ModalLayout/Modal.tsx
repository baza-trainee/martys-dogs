import { FaXmark } from 'react-icons/fa6';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import styles from './Modal.module.scss';

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

	if (!isModal) {
		return null; // Return null when the modal is closed
	}

	return createPortal(
		<div
			className={styles.backdrop}
			onClick={handleBackdrop}
			data-testid='backdrop'
		>
			<div
				className={isModal ? styles.active : styles.modal}
				data-testid='modal'
			>
				<button
					type='button'
					data-testid='close'
					className={styles.close}
					onClick={closeModal}
				>
					<FaXmark className={styles.icon} />
				</button>
				{children}
			</div>
		</div>,
		document.getElementById('modal-root') as Element,
	);
};

export default Modal;
