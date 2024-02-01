import Catalog from '../../components/Catalog/Catalog';
import HeroOurTails from '../../components/HeroOurTails/HeroOurTails';
import { fetchCatalog } from '../../services/fetchData';
import { scrollOnTop } from '../../services/scrollTo';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { DogCard } from '../Landing/Landing';

export interface OurTailsData {
	Cards: DogCard[];
}

const OurTails: React.FC = () => {
	const [filterTerms, setFilterTerms] = useState<string>('');

	const location = useLocation();

	const data = useQuery<OurTailsData>({
		queryKey: ['tails', {filter: filterTerms || ''}],
		queryFn: () => fetchCatalog(filterTerms),
	});

	useEffect(() => {
		location.pathname === '/tails' ? scrollOnTop() : null;
	}, [location]);


	const handleChangeFilterTerms = (terms: string) => {
		setFilterTerms(terms);
	}
	return (
		<>
			<HeroOurTails />
			<Catalog data={data} changeTerms={handleChangeFilterTerms}/>
		</>
	);
};

export default OurTails;


