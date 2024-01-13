import { ReactNode, createContext, useState } from 'react';

interface ModalContextType {
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
}

interface ModalProviderProps {
	children: ReactNode;
}

const initialModalContext = {
	isModalOpen: false,
	openModal: () => {},
	closeModal: () => {},
};

// export const ModalContext = createContext<ModalContextType | undefined>(
// 	undefined,
// );

export const ModalContext =
	createContext<ModalContextType>(initialModalContext);

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
