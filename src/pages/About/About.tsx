// import { Trans } from 'react-i18next';

import HeroAbout from '../../components/HeroAbout/HeroAbout';
import Photos from '../../components/Photos/Photos';
import Support from '../../components/Support/Support';
import Partners from '../../components/Partners/Partners';

const About = () => {
	return (
		// <Trans i18nKey='description.part1'>
		// 	To get started, edit <code>src/pages/About.tsx</code> and save to reload.
		// </Trans>
		<main>
			<HeroAbout />
			<Partners/>
			<Photos />
			<Support />
		</main>
	);
};

export default About;
