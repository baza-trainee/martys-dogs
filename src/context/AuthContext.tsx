import { ReactNode, createContext, useState, useEffect } from 'react';
import { loginUser, getIsAuth } from '../services/fetchData';

interface AuthContextType {
	token: string | null;
	isLoggedIn: boolean;
	isPending: boolean;
	login: (email: string, password: string) => Promise<string>;
	logout: () => void;
}

interface AuthProviderProps {
	children: ReactNode;
}

const initialAuthContext = {
	token: null,
	isLoggedIn: false,
	isPending: false,
	login: async (email: string, password: string) => {
    return Promise.resolve('');
  },
	logout: () => {},
};

export const AuthContext = createContext<AuthContextType>(initialAuthContext);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [token, setToken] = useState<string | null>(null);
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const [isPending, setIsPending] = useState<boolean>(false);

	const login = async (email: string, password: string) => {
		try {
			setIsPending(true);
			const { access_token } = await loginUser(email, password);

			if (access_token) {
				setToken(access_token);
				setIsLoggedIn(true);
				localStorage.setItem('auth-token', access_token);
				setIsPending(false);
				return 'User login';
			} else {
				setIsPending(false);
				console.error('The access token was not received');
				throw new Error('The access token was not received');
			}
		} catch (error) {
			setIsPending(false);
			console.error('Login Error:', error);
			throw new Error('Login Error');
		}
	};

	const isAuth = async () => {
		const token = localStorage.getItem('auth-token');

    if (!token) {
      return;
		}
		
		try {
			setIsPending(true);
			const { tokenIsValid } = await getIsAuth(token);

			if (tokenIsValid) {
				setIsLoggedIn(true);
				setToken(token);
			}

			setIsPending(false);
		} catch (error) {
			setIsPending(false);
			console.error('isAuth Error:', error);
		}
	}

	const logout = () => {
		setIsPending(true);
		setToken(null);
		setIsLoggedIn(false);
		localStorage.removeItem('auth-token');
		setIsPending(false);
	};

	const contextValue: AuthContextType = {
		token,
		isLoggedIn,
		isPending,
		login,
		logout,
	};

	useEffect(() => { 
    // isAuth();
  }, []);

	return (
		<AuthContext.Provider value={contextValue}>
			{children}
		</AuthContext.Provider>
	);
};
