import { BiMap } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { useTranslation } from "react-i18next";

import {
  novaPost,
  ukrPost
} from '../../assets/support';

import style from './NonfinancialSupport.module.scss';

const NonfinancialSupport = () => {
  const { t } = useTranslation();

  return (
    
      <div className={style.address__container}>
      <h3 className={`${style.address__title} ${style.title}`}>{t('support.parcel')}</h3>
       
          <dl className={style.address__box}>
            
            <div className={style.address__position__column}>
              <div className={style.address__item__position}>
                <dt><BiMap className={style.icon}  /></dt>
            <dd className={style.caption}>{t("support.city") }</dd>
              </div>
              <div className={style.address__item__position}>
                <dt> <BiUser className={style.icon} /></dt>
                <div>
              <dd className={style.caption}>{t("support.name")}</dd>
                  <dd  className={style.description}>+380 50 243 6971</dd>
                  </div>
              </div>
            </div>
            
            <div  className={style.address__position__row}>
              <div>
            <dt className={style.caption}>{t('support.nova_poshta') }</dt>
            <dd className={style.description}>{t('support.nova_poshta_point') }</dd>
            <dd className={style.description}>{t('support.nova_poshta_street') }</dd>
              </div>
              <img src={`${novaPost}`} alt='Логотип Нової пошти'  className={style.image } />
            </div>
            
            <div  className={style.address__position__row}>
              <div>
            <dt className={style.caption}>{t('support.ukr_poshta') }</dt>
            <dd className={style.description}>{t('support.ukr_poshta_point') }</dd>
            <dd className={style.description}>{t('support.ukr_poshta_street') }</dd>
              </div>
              <img src={`${ukrPost}`} alt='Логотип Укр пошти' className={style.image } />
            </div>
            
          </dl>
</div>
    
  
  )
}

export default NonfinancialSupport
