import { useTranslation } from 'react-i18next';
import { UseQueryResult } from '@tanstack/react-query';
import { Partner, LandingData } from '../../pages/Landing/Landing';
import { Loader, ErrorAlert } from '../common/LoaderAndError';
import styles from './Partners.module.scss';

export interface LogosProps {
	partners: Partner[];
}
export interface PartnersProps {
	data: UseQueryResult<LandingData, Error>;
}

export const Logos: React.FC<LogosProps> = ({ partners }) => {
	const { t } = useTranslation();

	return (
		<section className={styles.partnersContainer}>
			<h2 className={styles.partnersTitle} data-testid='partners-title'>
				{t('partners.title')}
			</h2>
			<div className={styles.partnersIconContainer}>
				{partners.map((partner, index) => (
					<div key={index} className={styles.partnersIcon}>
						<img
							src={partner.logo.url}
							alt={`Logo ${partner.logo.name}`}
						/>
					</div>
				))}
			</div>
		</section>
	);
};

const Partners: React.FC<PartnersProps> = ({ data }) => {
	const { isFetching, isError, error, data: responseData } = data;

	if (isFetching) {
		return <Loader />;
	}

	if (isError) {
		return <ErrorAlert errorMessage={error?.message} />;
	}
	if (!responseData) {
		return <div></div>;
	}

	return <Logos partners={responseData.partners} />;
};

export default Partners;
