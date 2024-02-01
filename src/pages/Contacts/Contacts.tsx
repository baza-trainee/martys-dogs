import ContactsBlock from '../../components/ContactsBlock/ContactsBlock';
import Support from '../../components/Support/Support';
import { scrollOnTop } from '../../services/scrollTo';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Contacts = () => {
	const location = useLocation();

	useEffect(() => {
		location.pathname === '/contacts' ? scrollOnTop() : null;
	}, [location]);

	return (
		<main>
			<ContactsBlock />
			<Support />
		</main>
	);
};

export default Contacts;
