import Catalog from '../../components/Catalog/Catalog';
import { DogCard } from '../Landing/Landing';
import HeroOurTails from '../../components/HeroOurTails/HeroOurTails';
import Support from '../../components/Support/Support';
import { fetchCatalog } from '../../services/fetchData';
import { scrollOnTop } from '../../services/scrollTo';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

export interface OurTailsData {
	Cards: DogCard[];
}

const OurTails: React.FC = () => {
	const { i18n } = useTranslation();
	const language = i18n.language;
	const location = useLocation();
	const data = useQuery({
		queryKey: ['tails', language],
		queryFn: () => fetchCatalog(language),
		refetchInterval: 600000,
	});

	useEffect(() => {
		location.pathname === '/tails' ? scrollOnTop() : null;
	}, [location]);

	return (
		<>
			<HeroOurTails />
			<Catalog data={data} />
			<Support/>
		</>
	);
};

export default OurTails;
