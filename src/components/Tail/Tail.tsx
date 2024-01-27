import { FaCakeCandles, FaCheck } from 'react-icons/fa6';

import Button from '../../layout/Button/Button';
import { GrExpand } from 'react-icons/gr';
import { scrollToSection } from '../../services/scrollTo';
import styles from './Tail.module.scss';
import { useModalContext } from '../../context/useGlobalContext';
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
	const { openModal, activateModal, activeModal } = useModalContext();
	const handleModal = () => {
		console.log(activeModal);
		openModal();
		activateModal('contact');
	};

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
					<div className={styles.donate}>
						<Button
							btnClasses={'primary'}
							type={'button'}
							name={t('tail.donate')}
							onClick={() => scrollToSection('support')}
						></Button>
					</div>
					{ready_for_adoption && (
						<div className={styles.donate}>
							<Button
								btnClasses={'secondary'}
								type={'button'}
								name={t('tail.adopt')}
								onClick={handleModal}
							></Button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Tail;
