import { ReactNode, createContext, useState } from 'react';

interface ModalContextType {
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
	activeModal: 'contact' | 'thanks' | 'adoption' | null;
	activateModal: (value: 'contact' | 'thanks' | 'adoption' | null, id?: number) => void;
	modalId: number | null;
}

interface ModalProviderProps {
	children: ReactNode;
}

const initialModalContext = {
	isModalOpen: false,
	openModal: () => {},
	closeModal: () => {},
	activeModal: null,
	activateModal: () => {},
	modalId: null,
};

export const ModalContext =
	createContext<ModalContextType>(initialModalContext);

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [activeModal, setActiveModal] = useState<
		'contact' | 'thanks' | 'adoption' | null
	>(null);
	const [modalId, setModalId] = useState<number | null>(null);


	const openModal = () => {
		console.log(activeModal);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setActiveModal(null);
	};
	const activateModal = (value: 'contact' | 'thanks' | 'adoption' | null, id?: number) => {
		console.log(value);
		setActiveModal(value);
		setModalId(id || null);
	};
	const contextValue: ModalContextType = {
		isModalOpen,
		openModal,
		closeModal,
		activeModal,
		activateModal,
		modalId
	};

	return (
		<ModalContext.Provider value={contextValue}>
			{children}
		</ModalContext.Provider>
	);
};
