import Tail, { TailProps } from './Tail';
import { render, screen } from '../../utils/test-utils';

const mockTailProps: TailProps = {
	id: 1,
	name: 'Brenda',
	ready_for_adoption: true,
	gender: 'female',
	age: '1 year',
	sterilization: true,
	vaccination_parasite_treatment: true,
	size: 'small',
	description: 'It is the best dog',
	photo: {
		id: '1',
		name: 'Dog Brenda',
		url: 'www.brenda.com',
		category: 'dogs',
	},
};

describe('Tail component tests', () => {
	it('renders the image', () => {
		render(<Tail {...mockTailProps} />);
		const image = screen.getByAltText('dog');
		expect(image).toBeInTheDocument();
	});

	it('displays name information', () => {
		render(<Tail {...mockTailProps} />);
		const name = screen.getByText(/Brenda/i);
		expect(name).toBeInTheDocument();
	});

	it('displays description information', () => {
		render(<Tail {...mockTailProps} />);
		const description = screen.getByText(/It is the best dog/i);
		expect(description).toBeInTheDocument();
	});
});
