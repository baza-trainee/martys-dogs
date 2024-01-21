import mainMobile from '../../assets/video_main/girl/girl393.webp';
import mainTablet from '../../assets/video_main/girl/girl768.webp';
import mainDesktop from '../../assets/video_main/girl/girl1280.webp';
import mainLaptop from '../../assets/video_main/girl/girl1440.webp';
import mainLargeScreen from '../../assets/video_main/girl/girl1920.webp';
import therapyMobile from '../../assets/video_main/boy/boy393.webp';
import therapyTablet from '../../assets/video_main/boy/boy768.webp';
import therapyDesktop from '../../assets/video_main/boy/boy1280.webp';
import therapyLaptop from '../../assets/video_main/boy/boy1440.webp';
import therapyLargeScreen from '../../assets/video_main/boy/boy1920.webp';
import pawsImg from '../../assets/video_main/VectorPaws.svg';
import playButtonImg from '../../assets/video_main/Play.svg';


export const videoLinks = {
	main: 'https://www.youtube.com/watch?v=2igwkVve1nk',
	therapy: 'https://www.facebook.com/joriksss/videos/335880469139977',
};

const mediaQueryCommon = {
	mobile: '(max-width: 767px)',
	tablet: '(min-width: 768px) and (max-width:1279px)',
	laptop: '(min-width: 1280px) and (max-width:1439px)',
	desktop: '(min-width: 1440px) and (max-width:1919px)',
	largeScreen: '(min-width: 1920px)',
};

export const mainPosters = [
	{
		srcSet: `${mainMobile} 440w, ${mainTablet} 767w`,
		mediaQuery: mediaQueryCommon.mobile,
	},
	{
		srcSet: `${mainTablet} 768w, ${mainDesktop} 1200w`,
		mediaQuery: mediaQueryCommon.tablet,
		
	},
	{
		srcSet: mainDesktop,
		mediaQuery: mediaQueryCommon.laptop,
	},
	{
		srcSet: mainLaptop,
		mediaQuery: mediaQueryCommon.desktop,
	},
	{
		srcSet: mainLargeScreen,
		mediaQuery: mediaQueryCommon.largeScreen,
	},
];

export const therapyPosters = [
	{
		srcSet: `${therapyMobile} 393w, ${therapyTablet} 767w`,
		mediaQuery: mediaQueryCommon.mobile,
	},
	{
		srcSet: `${therapyTablet} 768w, ${therapyDesktop} 1200w`,
		mediaQuery: mediaQueryCommon.tablet,
	},
	{
		srcSet: therapyDesktop,
		mediaQuery: mediaQueryCommon.laptop,
	},
	{
		srcSet: therapyLaptop,
		mediaQuery: mediaQueryCommon.desktop,
	},
	{
		srcSet: therapyLargeScreen,
		mediaQuery: mediaQueryCommon.largeScreen,
	},
];


export const otherImages = {
	playButtonImage: playButtonImg,
	pawsImage: pawsImg
}

export const titles = {
	main: 'mainVideo.title',
	therapy: 'canisTherapy.title'
};


export const mainDescription = [
	{
		text: 'mainVideo.paragraph_one'
	},
	{
		text: 'mainVideo.paragraph_two'
	},
	{
		text: 'mainVideo.paragraph_three'
	},
];

export const therapyDescription = [
	{
		text: 'canisTherapy.paragraph_one'
	},
	{
		text: 'canisTherapy.paragraph_two'
	},
	{
		text: 'canisTherapy.paragraph_three'
	},
	{
		text: 'canisTherapy.paragraph_four'
	}
];