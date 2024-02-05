import { useTranslation } from 'react-i18next';
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
	const { t } = useTranslation();
	return (
		<div className={styles.textContainer} data-testid="common-video-description">
			<h1 className={styles.videoTitle}>{t(title)}</h1>

			{descriptionKeys.map((videoDescription, index) => (
				<p
					key={index}
					className={`${styles.videoDescription} ${
						descriptionStyle ? styles[descriptionStyle] : ''
					}`}
				>
					{t(videoDescription.text)}
					
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
