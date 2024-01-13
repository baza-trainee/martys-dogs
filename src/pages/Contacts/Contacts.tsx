import ContactsBlock from '../../components/ContactsBlock/ContactsBlock';
import Support from '../../components/Support/Support';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { scrollOnTop } from '../../services/scrollTo';

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
