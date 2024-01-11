import Hero from '../../components/Hero/Hero';
import News from '../../components/News/News';
import Support from '../../components/Support/Support';
import Tails from '../../components/Tails/Tails';
import Video from '../../components/Video/Video';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { scrollOnTop } from '../../services/scrollTo';

const Landing = () => {
	const location = useLocation();

	useEffect(() => {
		location.pathname === '/' ? scrollOnTop() : null;
	}, [location]);

	return (
		<main>
			<Hero />
			<Video />
			<Tails />
			<Support />
			<News />
		</main>
	);
};

export default Landing;
