import {
	whitePuppyDesktop1x,
	whitePuppyDesktop2x,
	whitePuppyMobile1x,
	whitePuppyMobile2x,
	whitePuppyTablet1x,
	whitePuppyTablet2x,
} from '../../assets/support';

import Button from '../../layout/Button/Button';
import { FaPaw } from 'react-icons/fa6';
import style from './FinancialSupport.module.scss';

const FinancialSupport = () => {

	return (
		<div className={style.container}>
			<div className={style.information}>
				<h3 className={style.title}>Зробіть грошовий внесок</h3>
				<div>
					<p className={style.text}>
						Допоможіть нам творити добро вашими пожертвами. Кожен
						ваш внесок допомагає нам надавати турботу та підтримку
						нашим чотирилапим підопічним.
					</p>
					<p className={style.text}>
						Під час здійснення донату ви маєте можливість вказати,
						кому саме ви бажаєте допомогти, назвавши ім'я собаки.
						Ваша щедрість робить світ кращим для них.
					</p>
				</div>
				<Button
					btnClasses='primary'
					type='button'
					name='Допомогти фінансово'
					onClick={() => {
						console.log('I am the Button from Support section');
					}}
					children={
						<div className={style.icon}>
							<FaPaw />
							<FaPaw />
						</div>
					}
				></Button>
			</div>
			<div className={style.image_box}>
				<picture>
					<source
						srcSet={`${whitePuppyDesktop1x} 1280w, ${whitePuppyDesktop2x} 2560w`}
						media='(min-width:1280px)'
						sizes='(min-width:1280px) 200px'
						type='image/webp'
					/>
					<source
						srcSet={`${whitePuppyTablet1x} 768w, ${whitePuppyTablet2x}  1536w`}
						media='(min-width:768px)'
						sizes='(min-width:768px) 200px'
						type='image/webp'
					/>
					<source
						srcSet={`${whitePuppyMobile1x} 393w, ${whitePuppyMobile2x} 786w`}
						media='(min-width:393px)'
						sizes='(min-width:393px) 353px'
						type='image/webp'
					/>
					<img
						src={`${whitePuppyMobile1x}`}
						alt='Cute white little puppy '
						loading='lazy'
						className={style.image}
					/>
				</picture>
			</div>
		</div>
	);
};

export default FinancialSupport;
