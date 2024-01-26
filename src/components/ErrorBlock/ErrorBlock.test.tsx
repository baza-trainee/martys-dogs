import { render, screen } from '../../utils/test-utils';

import ErrorBlock from './ErrorBlock';
import { MemoryRouter } from 'react-router-dom';

describe('ErrorBlock component tests', () => {
	it('contains h1 with data-testid="test-title"', () => {
		render(
			<MemoryRouter>
				<ErrorBlock />
			</MemoryRouter>,
		);
		const h1Element = screen.getByTestId('test-title');
		expect(h1Element).toBeInTheDocument();
	});

	it('contains h1 element', () => {
		render(
			<MemoryRouter>
				<ErrorBlock />
			</MemoryRouter>,
		);
		const h1Element = screen.getByRole('heading', { level: 1 });
		expect(h1Element).toBeInTheDocument();
	});

	it('displays error information', () => {
		render(
			<MemoryRouter>
				<ErrorBlock />
			</MemoryRouter>,
		);
		const error = screen.getByText(/404/i);
		expect(error).toBeInTheDocument();
	});
});
