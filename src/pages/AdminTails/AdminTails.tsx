import styles from '../AdminPhotos/AdminPhotos.module.scss';
import { FaTrash, FaUpload } from 'react-icons/fa';
import Button from '../../layout/Button/Button';
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchHome } from '../../services/fetchData';
import { useEffect } from 'react';
import { scrollOnTop, scrollToSection } from '../../services/scrollTo';
import { DogCard } from '../Landing/Landing';

export interface AdminDogsData {
	dog_card: DogCard[];
}

const AdminTails = () => {
	const location = useLocation();
	const data = useQuery<AdminDogsData>({
		queryKey: ['dogs'],
		queryFn: () => fetchHome(),
		retry: 1,
	});

	useEffect(() => {

		location.pathname === '/' && !location.hash ? scrollOnTop() : null;
	}, [location]);

	return (
		<div
			className={styles.container}
		>
			<div

			>
				<h2
					className={styles.title}
				>
					Хвостики
				</h2>
			</div>
			<div
				className={styles.buttonsWrapper}
			>

				<div
					className={styles.buttonRow}
				>
					<Button
						onClick={() => console.log('open modal for adding new dog')}
						type={'button'}
						btnClasses={'primary'} name={'Додати Хвостика'} />

				</div>
			</div>
			<div className={styles.logoContainer}>
				<TailsList data={data}/>
				{/*{visibleLogos.map((logo, index) => (
					<div key={index} className={styles.logo}>
						<img src={logo.image} />
						<div className={styles.logoActions}>
							<FaTrash className={styles.deleteIcon} />
						</div>
					</div>
				))}*/}
			</div>

		</div>

	);
};

export default AdminTails;
