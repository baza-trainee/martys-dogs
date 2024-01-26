import { render, screen } from '../../utils/test-utils';

import ContactsBlock from './ContactsBlock';

describe('HeroOurTails component tests', () => {
	it('renders the image', () => {
		render(<ContactsBlock />);
		const image = screen.getByAltText('shelter');
		expect(image).toBeInTheDocument();
	});

	it('contains h1 element', () => {
		render(<ContactsBlock />);
		const h1Element = screen.getByRole('heading', { level: 1 });
		expect(h1Element).toBeInTheDocument();
	});

	it('displays contact information', () => {
		render(<ContactsBlock />);
		const emailContact = screen.getByText(/cityofgoodnessua@gmail.com/i);
		const phoneContact = screen.getByText(/\+380 95 053 60 09/i);
		expect(emailContact).toBeInTheDocument();
		expect(phoneContact).toBeInTheDocument();
	});
});
