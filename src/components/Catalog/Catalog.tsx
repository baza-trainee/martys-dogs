import { LandingData } from '../../pages/Landing/Landing';
import { UseQueryResult } from '@tanstack/react-query';
import styles from './Catalog.module.scss';

interface TailsProps {
	data: UseQueryResult<LandingData, Error>;
}

const Catalog: React.FC<TailsProps> = ({ data }) => {
	const { data: tails, isPending, isError, error } = data;

	console.log(tails?.dog_cards);
	
	if (isPending) {
		return (
			<div className={styles.container}>
				<div className={styles.loading}></div>
			</div>
		);
	}

	if (isError) {
		return (
			<div className={styles.container}>
				<div className={styles.alert}>{error.message}</div>
			</div>
		);
	}

	return (
		<div>
			<p>Loading was successfully</p>
		</div>
	);
};

export default Catalog;
