import styles from './Catalog.module.scss';

const Catalog = ({ data }) => {
	const { data: tails, isPending, isError, error } = data;

	console.log(tails.dog_cards);
	
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
