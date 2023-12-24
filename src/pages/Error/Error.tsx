import ErrorBlock from '../../components/ErrorBlock/ErrorBlock';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Support from '../../components/Support/Support';

const Error = () => {
	return (
		<>
			<Header />
			<main>
				<ErrorBlock />
				<Support />
			</main>
			<Footer />
		</>
	);
};

export default Error;
