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
		srcSet: `${mainMobile} 440w, ${mainTablet} 768w`,
		mediaQuery: mediaQueryCommon.mobile,
	},
	{
		srcSet: `${mainTablet} 769w, ${mainDesktop} 1200w`,
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
		srcSet: `${therapyMobile} 393w, ${therapyTablet} 768w`,
		mediaQuery: mediaQueryCommon.mobile,
	},
	{
		srcSet: `${therapyTablet} 769w, ${therapyDesktop} 1200w`,
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
	pawsImage:pawsImg
}

export const titles = {
	main: 'Подаруй собакам нову надію на щасливе життя!',
	therapy: 'Каністерапія з хвостиками'
};


export const mainDescription = [
	{
		text: "Приєднуйтесь до нашої спільноти людей з великим серцем, які допомагають цим беззахисним тваринам знайти своїх вірних друзів. Наш веб-сайт для збору пожертв є зв'язком між вами та цими тваринами, які потребують допомоги. Разом ми можемо змінити їхнє життя на краще!"
	},
	{
		text: `Кожен ваш вклад має велике значення для поліпшення їхнього добробуту. Ваша підтримка допомагає нам забезпечувати безперебійну медичну допомогу, належне харчування, безпечний притулок та всебічний догляд для собак.`
	},
	{
		text: 'Ваша допомога має велике значення для покращення життя цих тварин. Кожен ваш внесок допомагає нам забезпечити собакам необхідну медичну допомогу, належне харчування, безпечне місце проживання і належний догляд.'
	},
];

export const therapyDescription = [
	{
		text: 'Каністерапія (від лат. сanis — собака + грец. θεραπεία — лікування) — вид терапії з використанням спеціально підготовлених собак у медичній та соціальній реабілітації.'
	},
	{
		text: "Ми віримо, що кожне хвилинне спілкування з нашими пухнастими друзями може зцілити душу. Тут, серед веселих хвостів та м'яких лапок, ми створили особливий простір, де магія каністерапії оживає. У цьому місці дитячі сміхи змішуються з радісним лаєм, а кожен день наповнений чудесами взаєморозуміння та дружби."
	},
	{
		text: `Наші чотирилапі терапевти, зі своєю унікальною історією та нестримною любов'ю до життя, надихають дітей відкривати світ з нової перспективи. Вони вчать маленьких сердець щедрості, доброти та емпатії. Чи то ніжні обійми, чи радісна гра, – кожен момент, проведений з нашими «Хвостиками», підкреслює, що турбота і любов можуть знайти форму в найнесподіваніших образах.`
	},
	{
		text: 'Запрошуємо вас та ваші родини відвідати наш притулок, де серця зігріваються, дружба розцвітає, а чотирилапі друзі чекають, щоб подарувати вам щастя. Давайте разом творити добро – "Хвостики" вже готові поділитися своєю безмежною енергією та невичерпною радістю!'
	},
];

