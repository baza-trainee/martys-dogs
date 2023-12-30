import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import pawsImg from '../../assets/videoImg/VectorPaws.svg';
import playButtonImg from '../../assets/videoImg/Play.svg';
import defaultImg from '../../assets/videoImg/woman-posing-with-her-dog-smiling 1920px.webp';
import smallMobilePoster from '../../assets/videoImg/woman-posing-with-her-dog-smiling 393px.webp';
import tabletPoster from '../../assets/videoImg/woman-posing-with-her-dog-smiling 768px.webp';
import desktopPoster from '../../assets/videoImg/woman-posing-with-her-dog-smiling 1440.webp';
import laptopPoster from '../../assets/videoImg/woman-posing-with-her-dog-smiling 1280px.webp';
import largeScreenPoster from '../../assets/videoImg/woman-posing-with-her-dog-smiling 1920px.webp';
import styles from './Video.module.scss';

// import { useTranslation } from 'react-i18next';

export interface Poster {
	srcSet: string;
	mediaQuery: string;
}

export interface VideoProps {
	videoSrc: string;
	posters: Poster[];
	title: string;
	descriptionKeys: { text: string; style: keyof typeof styles }[];
}

export const VideoHomePage: React.FC<VideoProps> = ({
	videoSrc,
	posters,
	title,
	descriptionKeys,
}) => {
	// const { t } = useTranslation();

	const [showControls, setShowControls] = useState(false);
	const [selectedPoster, setSelectedPoster] = useState<string>('');

	const handleClick = () => {
		setShowControls(true);
	};

	useEffect(() => {
		const selectPosterByMediaQuery = () => {
			const matchedPoster = posters.find(
				(poster) => window.matchMedia(poster.mediaQuery).matches,
			);

			if (matchedPoster) {
				setSelectedPoster(matchedPoster.srcSet);
			} else {
				setSelectedPoster(defaultImg);
			}
		};

		selectPosterByMediaQuery();
		window.addEventListener('resize', selectPosterByMediaQuery);

		return () => {
			window.removeEventListener('resize', selectPosterByMediaQuery);
		};
	}, [posters]);

	return (
		<div className={styles.videoOverlay}>
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
										src={playButtonImg}
										alt='Play Button'
										className={styles.playButtonImg}
										loading="lazy"
									/>
								</div>
								<img
									src={selectedPoster}
									alt='Default Poster'
									className={styles.posterImage}
									loading="lazy"
								/>
							</div>
						)}
						{showControls && (
							<div className={styles.videoElementOverlay}>
								<img
									src={selectedPoster}
									alt='Default Fake Poster'
									className={styles.fakePosterImage}
									loading="lazy"
								/>
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
					src={pawsImg}
					alt='Paw Image'
					className={styles.pawImage}
				/>
			</div>
		</div>
	);
};

const Video: React.FC = () => {
	const customPosters: Poster[] = [
		{
			srcSet: smallMobilePoster,
			mediaQuery: '(max-width: 767px)',
		},
		{
			srcSet: tabletPoster,
			mediaQuery: '(min-width: 768px) and (max-width:1279px)',
		},
		{
			srcSet: laptopPoster,
			mediaQuery: '(min-width: 1280px) and (max-width:1439px)',
		},
		{
			srcSet: desktopPoster,
			mediaQuery: '(min-width: 1440px) and (max-width:1919px)',
		},
		{
			srcSet: largeScreenPoster,
			mediaQuery: '(min-width: 1920px)',
		},
	];

	const customVideoProps: VideoProps = {
		videoSrc: 'q-Wy-tZFUXc',
		posters: customPosters,
		title: 'Подаруй собакам нову надію на щасливе життя!',
		descriptionKeys: [
			{
				text: "Приєднуйтесь до нашої спільноти людей з великим серцем, які допомагають цим беззахисним тваринам знайти своїх вірних друзів. Наш веб-сайт для збору пожертв є зв'язком між вами та цими тваринами, які потребують допомоги. Разом ми можемо змінити їхнє життя на краще!",
				style: 'descriptionParagraphOne',
			},
			{
				text: `Кожен ваш вклад має велике значення для поліпшення їхнього добробуту. Ваша підтримка допомагає нам забезпечувати безперебійну медичну допомогу, належне харчування, безпечний притулок та всебічний догляд для собак.`,
				style: 'descriptionParagraphTwo',
			},
			{
				text: 'Ваша допомога має велике значення для покращення життя цих тварин. Кожен ваш внесок допомагає нам забезпечити собакам необхідну медичну допомогу, належне харчування, безпечне місце проживання і належний догляд.',
				style: 'descriptionParagraphThree',
			},
		],
	};

	return (
		<section>
			<VideoHomePage {...customVideoProps} />
		</section>
	);
};

export default Video;
