import style from './StatisticsItem.module.scss';


interface StatistiItemProps {
  text: string;
  image: string;
  value: number|undefined;
}



const StatisticsItem:React.FC<StatistiItemProps> = ({ text, image, value }) => {
  return (
   
      <div className={style.statistics__item__box}>
        <div className={style.item__title__box}>
        <p className={style.item__title}>{text}</p>
          <img src={image}  className={style.item__image}></img>
        </div>
        <p className={style.item__value}>{value}</p>
      </div>
   
  )
}

export default StatisticsItem;
