import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import CanisTherapy from '../canisTherapy/CanisTherapy';

describe('CanisTherapy component', () => {
	it('renders CanisTherapy component', () => {
		render(
			<BrowserRouter>
				<CanisTherapy />
			</BrowserRouter>,
		);
		const container = screen.getByTestId('canis-video-container');
		expect(container).toBeInTheDocument;
	});
	it('renders CanisTherapy videoplayer', () => {
		render(
			<BrowserRouter>
				<CanisTherapy />
			</BrowserRouter>,
		);
		const player = screen.getByTestId('common-video-player');
		expect(player).toBeInTheDocument;
	});
	it('renders CanisTherapy description', () => {
		render(
			<BrowserRouter>
				<CanisTherapy />
			</BrowserRouter>,
		);
		const description = screen.getByTestId('common-video-description');
		expect(description).toBeInTheDocument;
	});
});
