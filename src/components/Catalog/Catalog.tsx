import { fetchTails } from '../../services/fetchData';
import styles from './Catalog.module.scss';
import { useQuery } from '@tanstack/react-query';

const Catalog = () => {
	const {
		data: tails,
		isPending,
		isError,
		error,
	} = useQuery({
		queryKey: ['tails'],
		queryFn: fetchTails,
		refetchInterval: 600000,
	});

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

	console.log(tails);

	return (
		<div>
			<p>Loading was successfully</p>
		</div>
	);
};

export default Catalog;
