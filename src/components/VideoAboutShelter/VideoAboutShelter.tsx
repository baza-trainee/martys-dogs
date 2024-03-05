import ReactPlayer from 'react-player/youtube';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { FaPaw } from 'react-icons/fa6';
import Loader from '../CommonUI/LoaderAndError/LoaderAndError';
import playButtonImg from '../../assets/video_main/Play.svg';
import style from './VideoAboutShelter.module.scss'


const VideoAboutShelter = () => {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true)
  const [error,setError] = useState(false)
  
  const onHandleClick = () => {
    setIsLoading(false);
  }
  
  const onHandleError = () => {
    setError(true);
    setIsLoading(false)
  }
  
  return (
    <section className={style.section}>
      <div className={style.caption__container}>
        <h2 className={style.caption}>{t('aboutVideo.title') }</h2>
        <div className={style.icon}>
          <FaPaw />
          <FaPaw/>
        </div>
      </div>
      <div className={style.wrapper}>
        
        <div className={style.container}>
          {isLoading && <div className={style.loader}><Loader /></div>}
          {error && <p className={`${style.error__text} ${style.caption}`}>{t('aboutVideo.error') }</p>}
      { <ReactPlayer
        className={style.react__player}
        width='100%'
        height='100%'
        url={['https://youtu.be/cG1KwA9tH9I?si=AAhUGEr1N66rpF0N']}
        onReady={onHandleClick}
        onError={onHandleError}
        light={<div className={style.image}></div>}
        playIcon={<img src={playButtonImg} alt='Play icon' className={style.play__icon } />}
        playing={true}
        />}
        </div>
        </div>
    </section>
  )
}

export default VideoAboutShelter;
