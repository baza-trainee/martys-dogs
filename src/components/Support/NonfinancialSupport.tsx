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
       
          <div className={style.address__box}>
            
            <div className={style.address__position__column}>
              <div className={style.address__item__position}>
                <BiMap className={style.icon}  />
            <p className={style.caption}>{t("support.city") }</p>
              </div>
              <div className={style.address__item__position}>
                <BiUser className={style.icon} />
                <div>
              <p className={style.caption}>{t("support.name")}</p>
                  <p className={style.description}>+380 50 243 6971</p>
                  </div>
              </div>
            </div>
            
            <div  className={style.address__position__row}>
              <div>
            <p className={style.caption}>{t('support.nova_poshta') }</p>
            <p className={style.description}>{t('support.nova_poshta_point') }</p>
            <p className={style.description}>{t('support.nova_poshta_street') }</p>
              </div>
              <img src={`${novaPost}`} alt='Логотип Нової пошти'  className={style.image } />
            </div>
            
            <div  className={style.address__position__row}>
              <div>
            <p className={style.caption}>{t('support.ukr_poshta') }</p>
            <p className={style.description}>{t('support.ukr_poshta_point') }</p>
            <p className={style.description}>{t('support.ukr_poshta_street') }</p>
              </div>
              <img src={`${ukrPost}`} alt='Логотип Укр пошти' className={style.image } />
            </div>
            
          </div>
</div>
    
  
  )
}

export default NonfinancialSupport
