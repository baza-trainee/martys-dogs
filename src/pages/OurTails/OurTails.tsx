import Catalog from '../../components/Catalog/Catalog';
import HeroOurTails from '../../components/HeroOurTails/HeroOurTails';
import { fetchCatalog } from '../../services/fetchData';
import Support from '../../components/Support/Support';
import { fetchCatalog } from '../../services/fetchData';
import { scrollOnTop } from '../../services/scrollTo';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { DogCard } from '../Landing/Landing';
import { useTranslation } from 'react-i18next';


export interface OurTailsData {
	Cards: DogCard[];
}

const OurTails: React.FC = () => {
	const [filterTerms, setFilterTerms] = useState<string>('');
	const { i18n } = useTranslation();
	const language = i18n.language;
	const location = useLocation();


	const data = useQuery<OurTailsData>({
		queryKey: ['tails', language, { filter: filterTerms || '' }],
		queryFn: () => fetchCatalog({ queryKey: ['tails', language, { filter: filterTerms || '' }] }),
		retry: 1,
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
			<Support/>
		</>
	);
};

export default OurTails;


