import { useState } from 'react';
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

	const handleReady = () => {
		setIsLoading(false);
	};

	const handleBuffer = () => {
		setIsLoading(true);
	};

	const handlePlay = () => {
		setIsLoading(false);
	};

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
						width="auto"
						height="auto"
						className={styles.posterImage}
						loading='lazy'
					/>
				</picture>
			</div>

			{showControls && (
				<>
					{isLoading && (
						<div
							className={styles.loader}
							data-testid='loader'
						></div>
					)}
					<ReactPlayer
						url={videoUrl}
						playing
						controls
						width='100%'
						height='100%'
						className={`${styles.videoElement} ${
							showControls ? styles.showControls : ''
						}`}
						onReady={handleReady}
						onBuffer={handleBuffer}
						onPlay={handlePlay}
					/>
				</>
			)}
		</div>
	);
};

export default VideoPlayer;
