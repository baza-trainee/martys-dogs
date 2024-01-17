import React from 'react';
import styles from './Video.module.scss';

interface VideoDescription {
	text: string;
}

interface VideoDescriptionProps {
	title: string;
	descriptionKeys: VideoDescription[];
	descriptionStyle?: string;
	pawImage: string;
	pawImageStyle?: string;
}

const VideoDescription: React.FC<VideoDescriptionProps> = ({
	title,
	descriptionKeys,
	descriptionStyle,
	pawImage,
	pawImageStyle,
}) => {
	return (
		<div className={styles.textContainer}>
			<h1 className={styles.videoTitle}>{title}</h1>

			{descriptionKeys.map((videoDescription, index) => (
				<p
					key={index}
					className={`${styles.videoDescription} ${
						descriptionStyle ? styles[descriptionStyle] : ''
					}`}
				>
					{videoDescription.text}
				</p>
			))}
			<img
				src={pawImage}
				alt='Paw Image'
				className={`${styles.pawImage} ${
					pawImageStyle ? styles[pawImageStyle] : ''
				}`}
			/>
		</div>
	);
};

export default VideoDescription;
