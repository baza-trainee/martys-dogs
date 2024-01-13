import { ReactNode, createContext, useState } from 'react';

interface ModalContextType {
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
}

interface ModalProviderProps {
	children: ReactNode;
}

export const ModalContext = createContext<ModalContextType | undefined>(
	undefined,
);

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const contextValue: ModalContextType = {
		isModalOpen,
		openModal,
		closeModal,
	};

	return (
		<ModalContext.Provider value={contextValue}>
			{children}
		</ModalContext.Provider>
	);
};
