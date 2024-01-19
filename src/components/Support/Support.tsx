import FinancialSupport from './FinancialSupport';
import NonfinancialSupport from './NonfinancialSupport';
import style from './Support.module.scss';


const Support = () => {

	return (
		<section id='support' className={style.section}>
			<h2>Як підтримати притулок</h2>
			<p>Долучайтеся до нашої місії - допоможіть нам знайти кожній собаці теплий та люблячий дім. Ваша підтримка - це можливість змінювати життя та рятувати тих, хто потребує нашої допомоги.</p>
			<div className={style.container}>
				<FinancialSupport/>
				<NonfinancialSupport/>
				</div>
			</section>
	);
};

export default Support;
