import styles from '../AdminPhotos/AdminPhotos.module.scss';
import Button from '../../layout/Button/Button';
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { scrollOnTop } from '../../services/scrollTo';
import TailsList from './TailsList';
import TailForm from './TailForm';
import { FaRegPlusSquare } from 'react-icons/fa';
import { useAuthContext } from '../../context/useGlobalContext';
import { queryClient } from '../../App';
import { fetchTails, addTail, deleteTail } from '../../services/fetchAdminTails';

export interface TailsListData {
	id: number;
	name: string;
	name_en?: string;
	ready_for_adoption: boolean;
	gender: string;
	gender_en?: string;
	age: string;
	age_en?: string;
	sterilization?: boolean;
	vaccination_parasite_treatment?: boolean;
	size: string;
	size_en?: string;
	description: string;
	description_en?: string;
	photo?: {
		id: string;
		name: string;
		url: string;
		category: string;
	};
}


export type AdminTailsData = TailsListData[];


const AdminTails = () => {
	const [showLoader, setShowLoader] = useState<boolean>(false);
	const [showError, setShowError] = useState<string>('');
	const [showForm, setShowForm] = useState<boolean>(false);
	const [formType, setFormType] = useState<string>('');
	const [dogId, setDogId] = useState<undefined | number>(null);
	const location = useLocation();
	const { token } = useAuthContext();
	const [cards, setCards] = useState<TailsListData[]>([]);
	// const { data: tails, isPending, isError } = data;

	const { data: tails, isPending, isError } = useQuery<AdminTailsData>({
		queryKey: ['tailslist'],
		queryFn: () => typeof token === 'string' ? fetchTails(token) : Promise.resolve([]),
		retry: 1,
		enabled: !!token,
	});
	const { mutate: deleteMutate } = useMutation({
		mutationFn: deleteTail,
		onSuccess: () => {
			setShowLoader(false);
			setShowError('');
			console.log('succesfully deleted' + id)
			queryClient.invalidateQueries({ queryKey: ['tailslist'], exact: true });
		},
		onError: () => {
			setShowLoader(false);
			setShowError('Видалення не вдалося, перезавантажте сторінку');
		}
	});

	useEffect(() => {
		location.pathname === '/' && !location.hash ? scrollOnTop() : null;
	}, [location]);

	useEffect(() => {
		if (tails) {
			setCards(tails);
		}

	}, [tails, deleteMutate]);


	const handleShowForm = (formStatus: boolean, type: string, id?: number) => {
		setShowForm(formStatus);
		setFormType(type);
		setDogId(id);
		scrollOnTop();
	};

const handleErrLoader = (error: string, loaderStatus: boolean) => {
	setShowLoader(loaderStatus);
	setShowError(error);
};

	const handleDeleteTail = async (id: number) => {
		console.log('Delete ' + id);
		setDogId(id);
		if (token) {
			setShowLoader(true);
			//DELETE TO STRING METHOD WHEN BACKEND WILL BE READY
			deleteMutate({ tailId: id.toString(), token });

		}


	};



	return (
		<div
			className={styles.container}>
			<div>
				<h2 className={styles.title}>
					Хвостики
				</h2>
			</div>


			<div>
				{showForm ? (
						<TailForm cards={cards} dogId={dogId} formType={formType} changeShowForm={handleShowForm} changeErrLoader={handleErrLoader}
						/>)
					: (
						<div className={styles.buttonsWrapper}>
							<div>
								<Button
									onClick={() => handleShowForm(true, 'add')}
									type={'button'}
									btnClasses={'add'} name={'Додати Хвостика'} children={<FaRegPlusSquare />} />
							</div>
						</div>
					)}


			</div>


			<TailsList dogId={dogId} showLoader={showLoader} showError={showError} handleDeleteTail={handleDeleteTail} cards={cards} isPending={isPending} isError={isError} changeShowForm={handleShowForm}
					   />


		</div>

	);
};

export default AdminTails;
