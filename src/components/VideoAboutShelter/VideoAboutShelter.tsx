import ReactPlayer from 'react-player/youtube';
// import { pictureThumbnailMobile1x, pictureThumbnailMobile2x, pictureThumbnailTablet1x, pictureThumbnailTablet2x } from '../../assets/videoAboutShelter';
import playButtonImg from '../../assets/videoImg/Play.svg';
import style from './VideoAboutShelter.module.scss'


const VideoAboutShelter = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
      <ReactPlayer
        // style={{ width: '393px', height: '100%'}}
        className={style.react__player}
        width='100%'
          height='100%'
        url={['https://youtu.be/cG1KwA9tH9I?si=AAhUGEr1N66rpF0N']}

          light={<div className={style.image}></div>}
        playIcon={<img src={playButtonImg} alt='Play icon' className={style.play__icon } />}
        playing={true}
        />
        </div>
    </section>
  )
}

export default VideoAboutShelter;
