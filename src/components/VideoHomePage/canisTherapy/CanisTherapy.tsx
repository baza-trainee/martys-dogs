import React from 'react';
import styles from '../Video.module.scss';
import VideoDescription from '../VideoDescription';
import VideoPlayer from '../VideoPlayer';
import {
	therapyPosters,
	therapyDescription,
	titles,
	videoLinks,
	otherImages,
} from '../data';

const CanisTherapy: React.FC = () => {
	return (
		<section className={`${styles.videoContainerWrapper} ${styles.therapy}`}>
			<div className={`${styles.videoContainer} ${styles.therapy}`}>
				<VideoDescription
					title={titles.therapy}
					descriptionStyle="therapy"
					descriptionKeys={therapyDescription}
					pawImage={otherImages.pawsImage}
					pawImageStyle='therapy'
				/>
				<VideoPlayer
					videoUrl={videoLinks.therapy}
					defaultImage={therapyPosters[0].srcSet}
					posters={therapyPosters}
					playButtonImage={otherImages.playButtonImage}
				/>
			</div>
		</section>
	);
};

export default CanisTherapy;