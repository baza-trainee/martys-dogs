import styles from '../Video.module.scss';
import VideoDescription from '../VideoDescription';
import VideoPlayer from '../VideoPlayer';
import {
	mainPosters,
	titles,
	mainDescription,
	videoLinks,
	otherImages,
} from '../data';

const MainVideo: React.FC = () => {
	return (
		<section className={`${styles.videoContainerWrapper} ${styles.main}`}>
			<div className={`${styles.videoContainer} ${styles.main}`}>
				<VideoPlayer
					videoUrl={videoLinks.main}
					defaultImage={mainPosters[0].srcSet}
					posters={mainPosters}
					playButtonImage={otherImages.playButtonImage}
				/>

				<VideoDescription
					title= {titles.main}
					descriptionStyle="main"
					descriptionKeys={mainDescription}
					pawImage={otherImages.pawsImage}
					pawImageStyle='main'
				/>
			</div>
		</section>
	);
};

export default MainVideo;
