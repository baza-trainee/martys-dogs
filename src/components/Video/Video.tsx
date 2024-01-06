import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import defaultVideoProps from './PropsData';
import styles from './Video.module.scss';

export interface Poster {
	srcSet: string;
	mediaQuery: string;
}

export interface VideoProps {
	videoSrc: string;
	posters: Poster[];
	title: string;
	defaultImage: string;
	playButtonImage: string;
	pawsImage: string;
	descriptionKeys: { text: string; style: keyof typeof styles }[];
}

export const VideoHomePage: React.FC<VideoProps> = ({
	videoSrc,
	posters,
	defaultImage,
	playButtonImage,
	pawsImage,
	title,
	descriptionKeys,
}) => {
	const [showControls, setShowControls] = useState(false);

	const handleClick = () => {
		setShowControls(true);
	};

	return (
		<section className={styles.videoContainerWrapper}>
			<div className={styles.videoContainer}>
				<div className={styles.videoPlayer}>
					<div className={styles.videoWrapper}>
						{!showControls && (
							<div
								className={styles.posterOverlay}
								onClick={handleClick}
							>
								<div className={styles.playButton}>
									<img
										src={playButtonImage}
										alt='Play Button'
										className={styles.playButtonImg}
										loading='lazy'
									/>
								</div>
								<picture>
									{posters.map((poster, index) => (
										<source
											key={index}
											srcSet={poster.srcSet}
											media={poster.mediaQuery}
											type='image/webp'
										/>
									))}
									<img
										src={defaultImage}
										alt='Default Poster'
										className={styles.posterImage}
										loading='lazy'
									/>
								</picture>
							</div>
						)}
						{showControls && (
							<div className={styles.videoElementOverlay}>
								<picture>
									{posters.map((poster, index) => (
										<source
											key={index}
											srcSet={poster.srcSet}
											media={poster.mediaQuery}
											type='image/webp'
										/>
									))}
									<img
										src={defaultImage}
										alt='Default Fake Poster'
										className={styles.fakePosterImage}
										loading='lazy'
									/>
								</picture>
								<ReactPlayer
									url={`https://www.youtube.com/watch?v=${videoSrc}`}
									playing={showControls}
									controls={showControls}
									width='100%'
									height='100%'
									className={`${styles.videoElement} ${
										showControls ? styles.showControls : ''
									}`}
									onClick={handleClick}
								/>
							</div>
						)}
					</div>
				</div>

				<h1 className={styles.videoTitle}>{title}</h1>

				{descriptionKeys.map((videoDescription, index) => (
					<p
						key={index}
						className={`${styles.videoDescription} ${
							styles[videoDescription.style]
						}`}
					>
						{videoDescription.text}
					</p>
				))}

				<img
					src={pawsImage}
					alt='Paw Image'
					className={styles.pawImage}
				/>
			</div>
		</section>
	);
};

const Video: React.FC = () => {
	return <VideoHomePage {...defaultVideoProps} />;
};

export default Video;
