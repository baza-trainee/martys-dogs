// import { Trans } from 'react-i18next';

import HeroAbout from '../../components/HeroAbout/HeroAbout';
import Photos from '../../components/Photos/Photos';
import Support from '../../components/Support/Support';
import Partners from '../../components/Partners/Partners';
import VideoAboutShelter from '../../components/VideoAboutShelter/VideoAboutShelter';
import { Statistics } from '../../components/Statistics/Statistics';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { scrollOnTop } from '../../services/scrollTo';

const About = () => {
	const location = useLocation();

	useEffect(() => {
		location.pathname === '/about' ? scrollOnTop() : null;
	}, [location]);

	return (
		// <Trans i18nKey='description.part1'>
		// 	To get started, edit <code>src/pages/About.tsx</code> and save to reload.
		// </Trans>
		<main>
			<HeroAbout />
			<VideoAboutShelter />
			<Statistics/>
			<Partners/>
			<Photos />
			<Support />
		</main>
	);
};

export default About;
