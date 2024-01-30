import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '../../../utils/test-utils';
import HeroAbout from '../HeroAbout';

describe('HeroAbout component tests', () => {
	it('renders title', () => {
		render(
			<BrowserRouter>
				<HeroAbout />
			</BrowserRouter>,
		);
		const title = screen.getByTestId('heroAboutTitle');
		expect(title).toBeInTheDocument();
	});

	it('renders links to catalog', () => {
		render(
			<BrowserRouter>
				<HeroAbout />
			</BrowserRouter>,
		);
		const tailsLink = screen.getByRole('link');
		// const tailsLink = screen.getByRole('link', {
		// 	name: /Подивитись всіх хвостиків/i,
		// });
		expect(tailsLink).toBeInTheDocument();
	});
});
