import style from './Statistics.module.scss';
import StatisticsItem from './StatisticsItem';
import { Paws,Person,Heart } from '../../assets/statistics';

const dataLabels = [
  { text: 'Кількість тварин в притулку', image: Paws },
  { text: 'Кількість працівників', image: Person },
  { text: 'Кількість успішних адопцій', image: Heart }];

const dataValues = [
  { id: 1, value: 20 },
  { id: 2, value: 8 },
  {id:3, value:12},
]

export const Statistics = () => {
  const dataStatistics = dataLabels.map((label, index) => {
    const { text, image } = label;
    const { id, value } = dataValues[index]
    
    return{text,image,id,value}
})

  return (
    <section className={style.statistics__section}>
      <ul className={style.statistics__list}>
      {dataStatistics.map(({text,image,id,value}) => (
        <li key={id} className={style.statistics__item}><StatisticsItem text={text} image={image} value={value} /></li>))}
      </ul>
    </section>
  )
}
