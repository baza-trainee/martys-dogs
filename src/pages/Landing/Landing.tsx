import Hero from '../../components/Hero/Hero';
import News from '../../components/News/News';
import Support from '../../components/Support/Support';
import Tails from '../../components/Tails/Tails';
import Partners from '../../components/Partners/Partners';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { scrollOnTop, scrollToSection } from '../../services/scrollTo';
import MainVideo from '../../components/VideoHomePage/mainVideo/MainVideo';
import CanisTherapy from '../../components/VideoHomePage/canisTherapy/CanisTherapy';

const Landing = () => {

	const location = useLocation();

	useEffect(() => {
		//If we click go to section  - scroll to the section
		location.hash && scrollToSection(location.hash.slice(1));
		//If just change the page - go to the top of the page
		location.pathname === '/' && !location.hash ? scrollOnTop() : null;
	}, [location]);

	return (
		<main>
			<Hero/>
			<MainVideo/>
			<CanisTherapy/>
			<Tails />
			<Partners/>
			<Support />
			<News />
		</main>
	);
};

export default Landing;
