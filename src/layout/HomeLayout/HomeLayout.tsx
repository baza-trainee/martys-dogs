import { Outlet } from 'react-router-dom';

import AdoptionModal from '../../components/AdoptionModal/AdoptionModal';
import ContactModal from '../../components/ContactModal/ContactModal';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Modal from '../ModalLayout/Modal';
import ThanksModal from '../../components/ThanksModal/ThanksModal';
import { useModalContext } from '../../context/useGlobalContext';

const HomeLayout = () => {
	const { isModalOpen, openModal, closeModal, activeModal } =
		useModalContext();
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
				{activeModal === 'contact' && <ContactModal />}
				{activeModal === 'adoption' && <AdoptionModal />}
				{activeModal === 'thanks' && <ThanksModal />}
			</Modal>
		</>
	);
};

export default HomeLayout;
