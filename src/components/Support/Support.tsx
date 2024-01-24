import { useTranslation } from 'react-i18next';

import ContainerSupport from './ContainerSupport';
import FinancialSupport from './FinancialSupport';
import NonfinancialSupport from './NonfinancialSupport';
import style from './Support.module.scss';


const Support = () => {
	const { t } = useTranslation();
	return (
		<section id='support' className={style.section}>
			<h2 className={style.title}>{t('support.title')}</h2>
			<p className={style.description}>{t('support.description') }</p>
			<div className={style.container}>
				<ContainerSupport
					title={t('support.financial_title')}
					description={t('support.financial_description')}
					containerSupportClasses='financial'
				>
					<FinancialSupport/>
				</ContainerSupport>
				<ContainerSupport
					title={t('support.nonfinancial_title')}
					description={t('support.nonfinancial_description')}
					containerSupportClasses='nonfinancial'
				>
					<NonfinancialSupport />
				</ContainerSupport>
				</div>
			</section>
	);
};

export default Support;
