import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import VideoPlayer from './VideoPlayer';
import { BrowserRouter } from 'react-router-dom';
import { mainPosters, videoLinks, otherImages } from './data';

const mockProps = {
	videoUrl: videoLinks.main,
	defaultImage: 'default.jpg',
	posters: [
		{
			srcSet: mainPosters[1].srcSet,
			mediaQuery: '(min-width: 768px)',
			width: '800w',
		},
		{
			srcSet: mainPosters[0].srcSet,
			mediaQuery: '(max-width: 767px)',
			width: '400w',
		},
	],
	playButtonImage: otherImages.playButtonImage,
};

describe('VideoPlayer on the HomePage', () => {
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

	it('renders VideoPlayer component with default state', () => {
		render(
			<BrowserRouter>
				<VideoPlayer {...mockProps} />
			</BrowserRouter>,
		);
		fireEvent.click(screen.getByAltText('Play Button'));

		const loader = screen.getByTestId('loader');
		expect(loader).toBeInTheDocument();
/*
		await waitFor(() => {
			expect(screen.queryByTestId('loader')).toBeNull();
		});*/
	});
});
