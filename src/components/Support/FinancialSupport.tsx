import { FaPaw } from "react-icons/fa6";
import style from './FinancialSupport.module.scss'

const FinancialSupport = () => {
  return (
    <div className={style.container}>
      <div className={style.information}>
        <h3 className={style.title}>Зробіть грошовий внесок</h3>
        <div>
        <p className={style.text}>Допоможіть нам творити добро вашими пожертвами. Кожен ваш внесок допомагає нам надавати турботу та підтримку нашим чотирилапим підопічним. 
        </p>
        <p  className={style.text}>
          Під час здійснення донату ви маєте можливість вказати, кому саме ви бажаєте допомогти, назвавши ім'я собаки. Ваша щедрість робить світ кращим для них.
          </p>
          </div>
        <a
          className={style.link}
         target='_blank'>
          Допомогти фінансово
          <div>
            <FaPaw />
            <FaPaw/>
        </div>
        </a>
      </div>
      <div className={style.image_box}>
        <picture>
          <source
            srcSet="/src/assets/support/cute-white-little-puppy-desktop-1x.webp 1280w, /src/assets/support/cute-white-little-puppy-desktop-2x.webp 2560w"
            media='(min-width:1280px)'
            sizes='(min-width:1280px) 200px'
            type="image/webp"
          />
          <source
            srcSet="/src/assets/support/cute-white-little-puppy-tablet-1x.webp 768w, /src/assets/support/cute-white-little-puppy-tablet-2x.webp  1536w"
            media='(min-width:768px)'
            sizes='(min-width:768px) 200px'
            type="image/webp"
          />
          <source
            srcSet="/src/assets/support/cute-white-little-puppy-mobile-1x.webp 393w, /src/assets/support/cute-white-little-puppy-mobile-2x.webp 786w"
            media='(min-width:393px)'
            sizes='(min-width:393px) 353px'
            type="image/webp"
          />
          <img
            src='/src/assets/support/cute-white-little-puppy-mobile-1x.webp'
            alt='Cute white little puppy '
            loading='lazy'
            className={style.image }
          />
</picture>
      </div>
    </div>
  )
}

export default FinancialSupport;
