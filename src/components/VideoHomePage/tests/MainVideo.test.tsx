import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import MainVideo from '../mainVideo/MainVideo';

describe('Main video component', () => {
	it('renders MainVideo component', () => {
		render(
			<BrowserRouter>
				<MainVideo />
			</BrowserRouter>,
		);
		const container = screen.getByTestId('main-video-container');
		expect(container).toBeInTheDocument;
	});
	it('renders MainVideo videoplayer', () => {
		render(
			<BrowserRouter>
				<MainVideo />
			</BrowserRouter>,
		);
		const player = screen.getByTestId('common-video-player');
		expect(player).toBeInTheDocument;
	});
	it('renders MainVideo description', () => {
		render(
			<BrowserRouter>
				<MainVideo />
			</BrowserRouter>,
		);
		const description = screen.getByTestId('common-video-description');
		expect(description).toBeInTheDocument;
	});
});
