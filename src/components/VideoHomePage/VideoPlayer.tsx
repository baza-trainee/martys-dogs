import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import styles from './Video.module.scss';

interface Poster {
	srcSet: string;
	mediaQuery: string;
	width?: string;
}

interface VideoPlayerProps {
	defaultImage: string;
	posters: Poster[];
	playButtonImage: string;
	videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
	videoUrl,
	defaultImage,
	posters,
	playButtonImage,
}) => {
	const [showControls, setShowControls] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);

	const handleReady = () => {
		setIsLoading(false);
	};

	const handleOnlineStatusChange = () => {
		if (!navigator.onLine) {
			setError(true);
			setIsLoading(false);
		}

		else if (navigator.onLine) {
			setError(false);
			setIsLoading(true);
		}
	};

	useEffect(() => {
		window.addEventListener('online', handleOnlineStatusChange);
		window.addEventListener('offline', handleOnlineStatusChange);

		return () => {
			window.removeEventListener('online', handleOnlineStatusChange);
			window.removeEventListener('offline', handleOnlineStatusChange);
		};
	}, []);

	const handleClick = () => {
		setShowControls(!showControls);
	};

	return (
		<div className={styles.videoPlayer} data-testid='common-video-player'>
			<div
				className={`${styles.posterOverlay} ${
					showControls ? styles.disappear : ''
				}`}
			>
				<button
					onClick={handleClick}
					className={`${styles.playButton} ${
						showControls ? styles.disappear : ''
					}`}
				>
					<img
						src={playButtonImage}
						alt='Play Button'
						loading='lazy'
					/>
				</button>
				<picture>
					{posters.map((poster, index) => (
						<source
							key={index}
							srcSet={poster.srcSet}
							media={poster.mediaQuery}
							width={poster.width}
							type='image/webp'
						/>
					))}
					<img
						src={defaultImage}
						alt='Default Poster'
						width='auto'
						height='auto'
						className={styles.posterImage}
						loading='lazy'
					/>
				</picture>
			</div>

			{showControls && (
				<>
					{isLoading && !error && (
						<div
							className={styles.loader}
							data-testid='loader'
						></div>
					)}
					{error && (
						<div className={styles.error} data-testid='error'>
							Unable to load the video. Please check your internet
							connection.
						</div>
					)}
					{!error && (
						<ReactPlayer
							key={videoUrl}
							url={videoUrl}
							playing
							controls
							width='100%'
							height='100%'
							className={`${styles.videoElement} ${
								showControls ? styles.showControls : ''
							}`}
							onReady={handleReady}
							onError={handleOnlineStatusChange}
						/>
					)}
				</>
			)}
		</div>
	);
};

export default VideoPlayer;
