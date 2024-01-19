import { FaCakeCandles, FaCheck } from 'react-icons/fa6';

import { GrExpand } from 'react-icons/gr';
import styles from './Tail.module.scss';
import { useTranslation } from 'react-i18next';

export interface TailProps {
	id: number;
	name: string;
	ready_for_adoption: boolean;
	gender: string;
	age: string;
	sterilization: boolean;
	vaccination_parasite_treatment: boolean;
	size: string;
	description: string;
	photo: {
		id: string;
		name: string;
		url: string;
		category: string;
	};
}

const Tail: React.FC<TailProps> = ({
	// id,
	name,
	ready_for_adoption,
	gender,
	age,
	// sterilization,
	// vaccination_parasite_treatment,
	size,
	description,
	photo,
}) => {
	const { t } = useTranslation();

	return (
		<div className={styles.card}>
			<img src={photo?.url} alt='dog' className={styles.image} />
			{ready_for_adoption && (
				<p className={styles.friend}>{t('tail.ready')}</p>
			)}
			<div className={styles.overlay}>
				<div className={styles.title}>
					<div className={styles.left}>
						<h4 className={styles.name}>{name}</h4>
						<p className={styles.dark}>{gender}</p>
					</div>
					<div className={styles.box}>
						<p className={styles.gender}>
							<FaCakeCandles size={20} />
							<span className={styles.year}>{age}</span>
						</p>
						<p className={styles.size}>
							<GrExpand size={16} />
							<span className={styles.dark}>{size}</span>
						</p>
					</div>
				</div>
				<div className={styles.intro}>
					<div className={styles.about}>
						<p className={styles.vaccine}>
							{t('tail.vaccine')}
							<FaCheck size={20} />
						</p>
						<p className={styles.small}>
							{t('tail.small')}
							<FaCheck size={20} />
						</p>
						<p className={styles.vaccine}>
							{t('tail.sterilization')} <FaCheck size={20} />
						</p>
						<p className={styles.small}>
							{t('tail.sterilization')} <FaCheck size={20} />
						</p>
					</div>
					<p>{description}</p>
				</div>
				<div className={styles.container}>
					<a
						href='https://www.monobank.com.ua/'
						target='_blank'
						rel='noopener noreferrer'
						className={styles.donate}
					>
						{t('tail.donate')}
					</a>
					{ready_for_adoption && (
						<a
							href='https://www.monobank.com.ua/'
							target='_blank'
							rel='noopener noreferrer'
							className={styles.adopt}
						>
							{t('tail.adopt')}
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default Tail;
