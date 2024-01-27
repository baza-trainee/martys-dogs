import { render, screen } from '../../utils/test-utils';

import HeroOurTails from './HeroOurTails';

describe('HeroOurTails component tests', () => {
	it('renders the image', () => {
		render(<HeroOurTails />);
		const image = screen.getByAltText('Boys with dogs');
		expect(image).toBeInTheDocument();
	});

	it('contains h1 element', () => {
		render(<HeroOurTails />);
		const h1Element = screen.getByRole('heading', { level: 1 });
		expect(h1Element).toBeInTheDocument();
	});

	it('contains two h5 elements', () => {
		render(<HeroOurTails />);
		const h5Elements = screen.getAllByRole('heading', { level: 5 });
		expect(h5Elements.length).toBe(2);
	});
});
