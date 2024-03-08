import { FaRegPlusSquare } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';

import Button from '../../layout/Button/Button';
import TailForm from './TailForm';
import TailsList from './TailsList';
import styles from '../AdminPhotos/AdminPhotos.module.scss';
import { deleteTail, fetchTails } from '../../services/fetchAdminTails';
import { queryClient } from '../../App';
import { scrollOnTop } from '../../services/scrollTo';
import { useAuthContext } from '../../context/useGlobalContext';

export interface TailsListData {
	id: number;
	name: string;
	name_en?: string;
	ready_for_adoption: boolean;
	gender: string;
	gender_en?: string;
	age: string;
	age_en?: string;
	size: string;
	size_en?: string;
	description: string;
	description_en?: string;
	// photo?: File;
	photo: {
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
	const [dogId, setDogId] = useState<number | null>(null);
	const location = useLocation();
	const { token } = useAuthContext();
	const [cards, setCards] = useState<AdminTailsData>([]);

	const {
		data: tails,
		isPending,
		isError,
	} = useQuery<AdminTailsData>({
		queryKey: ['tailslist'],
		queryFn: () =>
			typeof token === 'string' ? fetchTails(token) : Promise.resolve([]),
		retry: 1,
		refetchInterval: 600000,
		enabled: !!token,
	});

	const { mutate: deleteMutate } = useMutation({
		mutationFn: deleteTail,
		// variables are arguments that were passed to mutation
		// onSuccess: (data, variables) => {
		onSuccess: (variables) => {
			setShowLoader(false);
			setShowError('');
			queryClient.invalidateQueries({
				queryKey: ['tailslist'],
				exact: true,
			});
			setCards((prevCards) =>
				prevCards.filter((tail) => tail.id !== variables.tailId),
			);
			setShowForm(false);
		},
		onError: () => {
			setShowLoader(false);
			setShowError('Видалення не вдалося, перезавантажте сторінку');
		},
	});

	useEffect(() => {
		location.pathname === '/' && !location.hash ? scrollOnTop() : null;
	}, [location]);

	useEffect(() => {
		if (tails) {
			setCards(tails);
		}
	}, [tails]);

	const handleShowForm = (formStatus: boolean, type: string, id?: number) => {
		setShowForm(formStatus);
		setFormType(type);
		if (id) {
			setDogId(id);
		}

		scrollOnTop();
	};

	const handleErrLoader = (loaderStatus: boolean, error: string) => {
		setShowLoader(loaderStatus);
		setShowError(error);
	};

	const handleDeleteTail = async (id: number) => {
		setDogId(id);
		if (token) {
			setShowLoader(true);
			await deleteMutate({ tailId: id, token });
		}
		console.log('Delete ' + id);
		setFormType('delete');
		console.log(formType);
	};

	return (
		<div className={styles.container}>
			<div>
				<h2 className={styles.title}>Хвостики</h2>
			</div>

			<div>
				{showForm ? (
					<TailForm
						updateCards={setCards}
						showLoader={showLoader}
						showError={showError}
						cards={cards}
						dogId={dogId}
						formType={formType}
						changeShowForm={handleShowForm}
						changeErrLoader={handleErrLoader}
					/>
				) : (
					<div className={styles.buttonsWrapper}>
						<div>
							<Button
								onClick={() => handleShowForm(true, 'add')}
								type={'button'}
								btnClasses={'add'}
								name={'Додати Хвостика'}
								children={<FaRegPlusSquare />}
							/>
						</div>
					</div>
				)}
			</div>

			<TailsList
				formType={formType}
				dogId={dogId}
				showLoader={showLoader}
				showError={showError}
				handleDeleteTail={handleDeleteTail}
				cards={cards}
				isPending={isPending}
				isError={isError}
				changeShowForm={handleShowForm}
			/>
		</div>
	);
};

export default AdminTails;
