import Modal from '../../components/Modal/Modal';
import ThankthModal from '../../components/Modal/ThankthModal';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
// import { useContext } from 'react';
// import { ModalContext } from '../../context/ModalContext';
import { useModalContext } from '../../context/useGlobalContext';

const HomeLayout = () => {
	// const modalContext = useModalContext();
	// const isModalOpen = modalContext?.isModalOpen || false;
	// const openModal = modalContext?.openModal || (() => {});
	// const closeModal = modalContext?.closeModal || (() => {});
	const { isModalOpen, openModal, closeModal } = useModalContext();
	console.log(isModalOpen);
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<Modal
				isModal={isModalOpen}
				openModal={openModal}
				closeModal={closeModal}
			>
				<ThankthModal />
			</Modal>
		</>
	);
};

export default HomeLayout;
