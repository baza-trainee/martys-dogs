import Hero from '../../components/Hero/Hero';
import News from '../../components/News/News';
import Support from '../../components/Support/Support';
import Tails from '../../components/Tails/Tails';
import Video from '../../components/Video/Video';

const Landing = () => {
	return (
		<main>
			<Hero />
			<Video />
			{/* <Tails /> */}
			<Support />
			{/* <News /> */}
		</main>
	);
};

export default Landing;
