import { FaCheck, FaDownLeftAndUpRightToCenter, FaPaw } from 'react-icons/fa6';

import styles from './Tail.module.scss';

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
	return (
		<div className={styles.card}>
			<img src={photo?.url} alt='dog' className={styles.image} />
			{ready_for_adoption && (
				<p className={styles.friend}>Готовий стати твоїм другом</p>
			)}
			<div className={styles.overlay}>
				<div className={styles.title}>
					<h4 className={styles.name}>{name}</h4>
					<p className={styles.gender}>
						{gender}, {age}
					</p>
				</div>
				<div className={styles.intro}>
					<div className={styles.about}>
						<p className={styles.vaccine}>
							Вакцинація/обробка від паразитів
							<FaCheck size={20} />
						</p>
						<p className={styles.small}>
							Вакцинація
							<FaCheck size={20} />
						</p>
						<p className={styles.vaccine}>
							Стерилізація <FaCheck size={20} />
						</p>
                        <p className={styles.small}>
							Стерилізація <FaCheck size={20} />
						</p>
						<p className={styles.size}>
							{size}
							<FaDownLeftAndUpRightToCenter size={20} />
						</p>
					</div>
					<p>{description}</p>
				</div>
				<a
					href='https://www.monobank.com.ua/'
					target='_blank'
					rel='noopener noreferrer'
					className={styles.donate}
				>
					Допомогти
					<div>
						<FaPaw />
						<FaPaw />
					</div>
				</a>
			</div>
		</div>
	);
};

export default Tail;
