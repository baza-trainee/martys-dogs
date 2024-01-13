import { createContext, useState, Dispatch, SetStateAction } from 'react';
interface IAppContextType {
	isModal: boolean;
	setIsModal: Dispatch<SetStateAction<boolean>>;
}

type ContextProps = {
	children: React.ReactNode;
};

const initialContext = {
	isModal: true,
	setIsModal: () => {},
} as IAppContextType;

export const AppContext = createContext(initialContext);

const AppContextProvider = ({ children }: ContextProps) => {
	const [isModal, setIsModal] = useState(true);

	const value = { isModal, setIsModal };
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
