import { ReactNode, createContext, useState } from 'react';

interface AuthContextType {
	token: string | null;
	login: (newToken: string) => void;
	logout: () => void;
}

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined,
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [token, setToken] = useState<string | null>(null);

	const login = (newToken: string) => {
		setToken(newToken);
	};

	const logout = () => {
		setToken(null);
	};

	const contextValue: AuthContextType = {
		token,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{children}
		</AuthContext.Provider>
	);
};
