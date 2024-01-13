import Modal from '../../components/Modal/Modal';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { AppContext } from '../../components/AppContext/AppContext';
import { useContext } from 'react';

const HomeLayout = () => {
	const { isModal, setIsModal } = useContext(AppContext);
	console.log(isModal);
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<Modal isModal={isModal} setIsModal={setIsModal} />
		</>
	);
};

export default HomeLayout;
