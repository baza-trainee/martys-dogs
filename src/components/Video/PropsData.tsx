import pawsImg from '../../assets/video_main/VectorPaws.svg';
import playButtonImg from '../../assets/video_main/Play.svg';
import mobilePoster from '../../assets/video_main/woman-posing-with-her-dog-smiling393px.webp';
import tabletPoster from '../../assets/video_main/woman-posing-with-her-dog-smiling768px.webp';
import desktopPoster from '../../assets/video_main/woman-posing-with-her-dog-smiling1440.webp';
import laptopPoster from '../../assets/video_main/woman-posing-with-her-dog-smiling1280px.webp';
import largeScreenPoster from '../../assets/video_main/woman-posing-with-her-dog-smiling1920px.webp';
import { VideoProps } from './Video';
// import { useTranslation } from 'react-i18next';
// const { t } = useTranslation();

export const defaultPosters = [
	{
		srcSet: mobilePoster,
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

export const defaultVideoProps: VideoProps = {
	videoSrc: 'q-Wy-tZFUXc',
	posters: defaultPosters,
	defaultImage: largeScreenPoster,
	playButtonImage: playButtonImg,
	pawsImage: pawsImg,
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

export default defaultVideoProps;
