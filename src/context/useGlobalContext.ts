import { AuthContext } from './AuthContext';
import { ModalContext } from './ModalContext';
import { useContext } from 'react';

export const useAuthContext = () => useContext(AuthContext);

export const useModalContext = () => useContext(ModalContext);