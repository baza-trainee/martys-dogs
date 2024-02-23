import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import HeroAbout from '../../components/HeroAbout/HeroAbout';
import Photos from '../../components/Photos/Photos';
import Statistics from '../../components/Statistics/Statistics';
import Support from '../../components/Support/Support';
import VideoAboutShelter from '../../components/VideoAboutShelter/VideoAboutShelter';
import { fetchAbout } from '../../services/fetchData';
import { scrollOnTop } from '../../services/scrollTo';

interface Image {
	id: string;
	name: string;
	url: string;
	category: string;
}

export interface AboutData {
	quantity_of_animals: number;
	quantity_of_employees: number;
	quantity_of_succeeds_adoptions: number;
	images: Image[];
}

const About = () => {
	const location = useLocation();
	const data = useQuery({
		queryKey: ['about'],
		queryFn: fetchAbout,
		refetchInterval: 600000,
	});

	useEffect(() => {
		location.pathname === '/about' ? scrollOnTop() : null;
	}, [location]);

	return (
		<main>
			<HeroAbout />
			<VideoAboutShelter />
			<Statistics data={data } />
			<Photos data={data} />
			<Support />
		</main>
	);
};

export default About;
