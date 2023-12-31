import { BiMap } from "react-icons/bi";
import { BiUser } from "react-icons/bi";

import {
  novaPost,
  ukrPost
} from '../../assets/support';

import style from './NonfinancialSupport.module.scss';

const NonfinancialSupport = () => {
  return (
    <div className={style.container}>
      <h3 className={style.title}>Нематеріальна допомога</h3>
      <p className={style.description}>
        Допомога вуличним собакам не обмежується лише фінансами. Ми постійно потребуємо кормів, медикаментів, розповсюдження інформації тощо.
      </p>
      <div className={style.address__container}>
        <h3 className={style.title__blue}>Дані для відправки посилок:</h3>
        <div>
          <dl className={style.address__box}>
            
            <div className={style.address__position__row}>
              <div className={style.address__item__position}>
                <dt><BiMap className={style.icon}  /></dt>
                <dd className={style.caption}>м. Чернівці</dd>
              </div>
              <div className={style.address__item__position}>
                <dt> <BiUser className={style.icon} /></dt>
                <div>
                  <dd  className={style.caption}>Марта Левченко</dd>
                  <dd  className={style.description}>+380 50 243 6971</dd>
                  </div>
              </div>
            </div>
            
            <div  className={style.address__position__row}>
              <div>
                <dt className={style.caption}>Нова Пошта</dt>
                <dd className={style.description}>відділення №1</dd>
                <dd className={style.description}>вул. Руська, 248-О</dd>
              </div>
              <img src={`${novaPost}`} alt='Логотип Нової пошти'  className={style.image } />
            </div>
            
            <div  className={style.address__position__row}>
              <div>
                <dt className={style.caption}>Укр Пошта</dt>
                <dd className={style.description}>відділення №58008</dd>
                <dd className={style.description}>вул. Гагаріна Юрія, 36-А</dd>
              </div>
              <img src={`${ukrPost}`} alt='Логотип Укр пошти' className={style.image } />
            </div>
            
          </dl>
</div>
      </div>
    </div>
  )
}

export default NonfinancialSupport
