import { FC } from 'react';
import { UseQueryResult } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import StatisticsItem from './StatisticsItem';
import style from './Statistics.module.scss';
import Loader, { ErrorAlert } from '../CommonUI/LoaderAndError/LoaderAndError';
import { AboutData } from '../../pages/About/About';
import { Heart, Paws, Person } from '../../assets/statistics';

interface StatisticsProps {
	data: UseQueryResult<AboutData[], Error>;
}

const Statistics: FC<StatisticsProps> = ({ data }) => {
	const { data: statistics, isPending, isError, error } = data;
	const { t } = useTranslation();

	if (isPending) {
		return <Loader backgroundColor={'#b6e1f2'} />;
	}

	if (isError) {
		return (
			<ErrorAlert
				errorMessage={error.message}
				backgroundColor={'#b6e1f2'}
			/>
		);
	}

	return (
		<section className={style.statistics__section}>
			<ul className={style.statistics__list}>
				<li className={style.statistics__item}>
					<StatisticsItem
						text={t('statistics.title_animal')}
						image={Paws}
						value={statistics?.[0]?.quantity_of_animals}
					/>
				</li>
				<li className={style.statistics__item}>
					<StatisticsItem
						text={t('statistics.title_employees')}
						image={Person}
						value={statistics?.[0]?.quantity_of_employees}
					/>
				</li>
				<li className={style.statistics__item}>
					<StatisticsItem
						text={t('statistics.title_adoptions')}
						image={Heart}
						value={statistics?.[0]?.quantity_of_succeeds_adoptions}
					/>
				</li>
			</ul>
		</section>
	);
};

export default Statistics;
