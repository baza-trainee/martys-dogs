import Modal from '../../components/Modal/Modal';
import ThanksModal from '../../components/Modal/ThanksModal';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
// import { useContext } from 'react';
// import { ModalContext } from '../../context/ModalContext';
import { useModalContext } from '../../context/useGlobalContext';
import AdoptionModal from '../../components/Modal/AdoptionModal';

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
				{/* <ThanksModal /> */}
				<AdoptionModal />
			</Modal>
		</>
	);
};

export default HomeLayout;
