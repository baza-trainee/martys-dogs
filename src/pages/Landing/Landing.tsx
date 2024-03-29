import { scrollOnTop, scrollToSection } from '../../services/scrollTo';

import CanisTherapy from '../../components/VideoHomePage/canisTherapy/CanisTherapy';
import Hero from '../../components/Hero/Hero';
import MainVideo from '../../components/VideoHomePage/mainVideo/MainVideo';
import News from '../../components/News/News';
import Partners from '../../components/Partners/Partners';
import Support from '../../components/Support/Support';
import Tails from '../../components/Tails/Tails';
import { fetchHome } from '../../services/fetchData';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

interface Photo {
	id: string;
	name: string;
	url: string;
	category: string;
}

interface NewsItem {
	id: number;
	title: string;
	post_at: string;
	update_at: string;
	sub_text: string;
	url: string;
	photo: Photo;
}

export interface DogCard {
	id: number;
	name: string;
	ready_for_adoption: boolean;
	gender: string;
	age: string;
	sterilization: boolean;
	vaccination_parasite_treatment: boolean;
	size: string;
	description: string;
	photo: Photo;
}

export interface LogoData {
	id: string;
	name: string;
	url: string;
	category: string;
}

export interface Partner {
	id: number;
	name: string;
	logo: LogoData;
	website: string | null;
}

export interface LandingData {
	news: NewsItem[];
	dog_cards: DogCard[];
	partners: Partner[];
}

const Landing: React.FC = () => {
	const { i18n } = useTranslation();
	const language = i18n.language;
	const location = useLocation();
	const data = useQuery<LandingData, Error>({
		queryKey: ['landing', language],
		queryFn: () => fetchHome(language),
		refetchInterval: 600000,
	});

	useEffect(() => {
		//If we click go to section  - scroll to the section
		location.hash && scrollToSection(location.hash.slice(1));
		//If just change the page - go to the top of the page
		location.pathname === '/' && !location.hash ? scrollOnTop() : null;
	}, [location]);

	return (
		<main>
			<Hero />
			<MainVideo />
			<CanisTherapy />
			<Tails data={data} />
			<Support />
			<Partners data={data} />
			<News data={data} />
		</main>
	);
};

export default Landing;
