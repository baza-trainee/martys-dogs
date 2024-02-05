import { useTranslation } from 'react-i18next';
import { UseQueryResult } from '@tanstack/react-query';
import { Partner, LandingData } from '../../pages/Landing/Landing';
import { Loader, ErrorAlert } from '../CommonUI/LoaderAndError/LoaderAndError';
import styles from './Partners.module.scss';

export interface LogosProps {
	partners: Partner[];
}
export interface PartnersProps {
	data: UseQueryResult<LandingData, Error>;
}

const Partners: React.FC<PartnersProps> = ({ data }) => {
	const { t } = useTranslation();
	const { isPending, isError, error, data: responseData } = data;

	if (isPending) {
		return <Loader />;
	}

	if (isError) {
		return <ErrorAlert errorMessage={error?.message} />;
	}
	if (!responseData) {
		return <div></div>;
	}

	return (<section className={styles.partnersContainer}>
			<div className={styles.loader}></div>
			<h2 className={styles.partnersTitle}>{t('partners.title')}</h2>
			<ul className={styles.partnersIconContainer}>
				{responseData?.partners?.map((partner, index) => (
					<li key={index} className={styles.partnersIcon}>
						<img
							src={partner.logo.url}
							alt={`Logo ${partner.logo.name}`}
						/>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Partners;
