import Catalog from '../../components/Catalog/Catalog';
import HeroOurTails from '../../components/HeroOurTails/HeroOurTails';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { scrollOnTop } from '../../services/scrollTo';

const OurTails = () => {
	const location = useLocation();

	useEffect(() => {
		location.pathname === '/tails' ? scrollOnTop() : null;
	}, [location]);

	return (
		<>
			<HeroOurTails />
			<Catalog />
		</>
	);
};

export default OurTails;
