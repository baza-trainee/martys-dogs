import styles from '../AdminPhotos/AdminPhotos.module.scss';
import Button from '../../layout/Button/Button';
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { scrollOnTop } from '../../services/scrollTo';
import { fetchTails } from '../../services/fetchAdminTails';
import TailsList from './TailsList';
import TailForm from './TailForm';
import { FaRegPlusSquare } from 'react-icons/fa';


export interface Photo {
	id: string;
	name: string;
	url: string;
	category: string;
}

export interface TailsListData {
	id: number;
	name: string;
	name_en: string;
	ready_for_adoption: boolean;
	gender: string;
	gender_en: string;
	age: string;
	age_en: string;
	sterilization: boolean;
	vaccination_parasite_treatment: boolean;
	size: string;
	size_en: string;
	description: string;
	description_en: string;
	photo: Photo;
}


export type AdminTailsData = TailsListData[];


const AdminTails = () => {
	const [showForm, setShowForm] = useState(false);
	const location = useLocation();
	const data = useQuery<AdminTailsData>({
		queryKey: ['tailslist'],
		queryFn: fetchTails,
		retry: 1,
	});

	useEffect(() => {
		location.pathname === '/' && !location.hash ? scrollOnTop() : null;
	}, [location]);


	const handleShowForm = () => {
		setShowForm(true);
	};
	return (
		<div
			className={styles.container}>
			<div>
				<h2 className={styles.title}>
					Хвостики
				</h2>
			</div>

			<div className={styles.buttonsWrapper}>
				<div>
					<Button
						onClick={handleShowForm}
						type={'button'}
						btnClasses={'primary'} name={'Додати Хвостика'} children={<FaRegPlusSquare />}/>

				</div>
			</div>

			{showForm && (<TailForm/>)}

			<TailsList data={data} />


		</div>

	);
};

export default AdminTails;
