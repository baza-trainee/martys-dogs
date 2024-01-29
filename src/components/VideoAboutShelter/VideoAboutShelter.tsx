import ReactPlayer from 'react-player/youtube';
import { FaPaw } from 'react-icons/fa6';

import playButtonImg from '../../assets/video_main/Play.svg';
import style from './VideoAboutShelter.module.scss'


const VideoAboutShelter = () => {
  return (
    <section className={style.section}>
      <div className={style.caption__container}>
        <h2 className={style.caption}>Зануртеся в наш світ та відчуйте безмежну собачу любов! </h2>
        <div className={style.icon}>
          <FaPaw />
          <FaPaw/>
        </div>
      </div>
      <div className={style.wrapper}>
      <div className={style.container}>
      <ReactPlayer
        className={style.react__player}
        width='100%'
        height='100%'
        url={['https://youtu.be/cG1KwA9tH9I?si=AAhUGEr1N66rpF0N']}

          light={<div className={style.image}></div>}
        playIcon={<img src={playButtonImg} alt='Play icon' className={style.play__icon } />}
        playing={true}
        />
        </div>
        </div>
    </section>
  )
}

export default VideoAboutShelter;
