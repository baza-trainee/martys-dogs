import { StoryFn, Meta } from '@storybook/react';
import {VideoHomePage,VideoProps } from './Video';
import smallMobilePoster from "../../assets/videoImg/woman-posing-with-her-dog-smiling 393px.webp";
import tabletPoster from "../../assets/videoImg/woman-posing-with-her-dog-smiling 768px.webp";
import laptopPoster from "../../assets/videoImg/woman-posing-with-her-dog-smiling 1280px.webp";
import desktopPoster from "../../assets/videoImg/woman-posing-with-her-dog-smiling 1440.webp";
import largeScreenPoster from "../../assets/videoImg/woman-posing-with-her-dog-smiling 1920px.webp";

export default {
  title: 'Components/Video',
  component: VideoHomePage,
} as Meta;

const Template: StoryFn<VideoProps> = (args) => <VideoHomePage {...args} />;

export const Default = Template.bind({});
Default.args = {
  videoSrc: 'path/to/default/video.mp4',
  posters: [
    {
      srcSet: 'poster-mobile.jpg',
      mediaQuery: '(max-width: 393px)',
    },
    {
      srcSet: 'poster-mobile.jpg',
      mediaQuery: '(min-width: 394px) and (max-width: 768px)',
    },
    {
      srcSet: 'poster-desktop.jpg', 
      mediaQuery: '(min-width: 769px) and (max-width: 1440px)',
    },
    {
      srcSet: 'poster-desktop.jpg', 
      mediaQuery: '(min-width: 1441px) and (max-width: 1920px)',
    },
    {
      srcSet: './poster-desktop.jpg', 
      mediaQuery: '(min-width: 1921px)',
    },
  ],
  title: 'Default Video',
  descriptionKeys: [
    { text: 'First paragraph', style: 'descriptionParagraphOne' },
    { text: 'Second paragraph', style: 'descriptionParagraphTwo' },
    { text: 'Third paragraph', style: 'descriptionParagraphThree' },
  ],
};

export const CustomVideo = Template.bind({});
CustomVideo.args = {
  videoSrc: 'cG1KwA9tH9I',
    posters: [
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
    ],
  title: 'Подаруй собакам нову надію на щасливе життя!',
  descriptionKeys: [
    { text:'Приєднуйтесь до нашої спільноти людей з великим серцем, які допомагають цим беззахисним тваринам знайти своїх вірних друзів. Наш веб-сайт для збору пожертв є зв\'язком між вами та цими тваринами, які потребують допомоги. Разом ми можемо змінити їхнє життя на краще!', 
    style: 'descriptionParagraphOne' 
  },
    { text: `Кожен ваш вклад має велике значення для поліпшення їхнього добробуту. Ваша підтримка допомагає нам забезпечувати безперебійну медичну допомогу, належне харчування, безпечний притулок та всебічний догляд для собак.`, 
    style: 'descriptionParagraphTwo' },
    { text: `Ваша допомога має велике значення для покращення життя цих тварин. Кожен ваш внесок допомагає нам забезпечити собакам необхідну медичну допомогу, належне харчування, безпечне місце проживання і належний догляд.`, 
    style: 'descriptionParagraphThree' },
  ],
};
