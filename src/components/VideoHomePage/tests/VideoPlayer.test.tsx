import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import VideoPlayer from '../VideoPlayer';
import { BrowserRouter } from 'react-router-dom';


const mockProps = {
	videoUrl: 'https://www.facebook.com/joriksss/videos/335880469139977',
	defaultImage: 'default.jpg',
	posters: [
		{
			srcSet: 'path/to/poster1.jpg 1x, path/to/poster1@2x.jpg 2x',
			mediaQuery: '(min-width: 768px)',
			width: '800w',
		},
		{
			srcSet: 'path/to/poster2.jpg 1x, path/to/poster2@2x.jpg 2x',
			mediaQuery: '(max-width: 767px)',
			width: '400w',
		},
	],
	playButtonImage: 'default.jpg',
};

describe('VideoPlayer on the HomePage', () => {
	it('shows loader onclick and hides it when video starts to play', async () => {
		render(
			<BrowserRouter>
				<VideoPlayer {...mockProps} />
			</BrowserRouter>,
		);
		fireEvent.click(screen.getByAltText('Play Button'));

		const loader = screen.getByTestId('loader');
		expect(loader).toBeInTheDocument();
		waitFor(() => {
			expect(screen.queryByTestId('loader')).toBeNull();
		});
		
	});

	it('renders VideoPlayer component with default state', () => {
		render(
			<BrowserRouter>
				<VideoPlayer {...mockProps} />
			</BrowserRouter>,
		);
		
		const videoPlayer = screen.getByTestId('common-video-player');
		expect(videoPlayer).toBeInTheDocument();

		const defaultPoster = screen.getByAltText('Default Poster');
		expect(defaultPoster).toBeInTheDocument();

		const playButton = screen.getByAltText('Play Button');
		expect(playButton).toBeInTheDocument();
		
	});
});
