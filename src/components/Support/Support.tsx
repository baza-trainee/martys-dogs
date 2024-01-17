import FinancialSupport from './FinancialSupport';
import NonfinancialSupport from './NonfinancialSupport';
import style from './Support.module.scss';


const Support = () => {

	return (
		<section id='support' className={style.section}>
			<h2>Як підтримати притулок</h2>
			<div className={style.container}>
				<FinancialSupport />
				<NonfinancialSupport />
			</div>
		</section>
	);
};

export default Support;
