import Catalog from '../../components/Catalog/Catalog';
import HeroOurTails from '../../components/HeroOurTails/HeroOurTails';
import { fetchCatalog, fetchHome } from '../../services/fetchData';
import { scrollOnTop } from '../../services/scrollTo';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const OurTails: React.FC = () => {
	const location = useLocation();
	const data = useQuery({
		queryKey: ['tails'],
		queryFn: fetchCatalog,
		refetchInterval: 600000,
	});

	useEffect(() => {
		location.pathname === '/tails' ? scrollOnTop() : null;
	}, [location]);

	return (
		<>
			<HeroOurTails />
			<Catalog data={data} />
		</>
	);
};

export default OurTails;
