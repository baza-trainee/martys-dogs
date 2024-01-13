import ErrorBlock from '../../components/ErrorBlock/ErrorBlock';
import Footer from '../../layout/Footer/Footer';
import Header from '../../layout/Header/Header';
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
