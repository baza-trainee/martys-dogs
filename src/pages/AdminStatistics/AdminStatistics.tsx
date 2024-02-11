import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchAbout } from '../../services/fetchData';
import { Loader,ErrorAlert } from '../../components/CommonUI/LoaderAndError/LoaderAndError';
import ModalAdminStatistics from './ModalAdminStatistics';
import styles from './AdminStatistics.module.scss';

const AdminStatistics = () => {
	const data = useQuery({
		queryKey: ['about'],
		queryFn: fetchAbout,
		refetchInterval: 60000,
	});

	const { data: statistics, isPending, isError, error, isSuccess } = data;

	const dataAnimals = statistics?.about_data[0]?.quantity_of_animals;
	const dataEmployees = statistics?.about_data[0]?.quantity_of_employees;
	const dataAdoptions= statistics?.about_data[0]?.quantity_of_succeeds_adoptions
	
	const [animals, setAnimals] = useState(dataAnimals);
	const [employees, setEmployees] = useState(dataEmployees);
	const [adoptions, setAdoptions] = useState(dataAdoptions);
	const [openModal, setOpenModal] = useState(false)

	useEffect(() => {
	if (isSuccess) {
		setAnimals(dataAnimals);
		setEmployees(dataEmployees);
		setAdoptions(dataAdoptions)
	}	
	},[isSuccess,dataAnimals,dataEmployees,dataAdoptions])
	

	const onHandleClick = () => {
		setOpenModal(!openModal)
	}

	const onButtonClick = () => {
		setOpenModal(!openModal)
	}
		
	return (
	
		
			<div className={styles.main}>
			<h2 className={styles.title}>Статистика</h2>
			{isPending && <Loader />}
			{isError && <ErrorAlert errorMessage={error.message} />}
			{isSuccess && <>
				<table className={styles.table}>
				
				<thead>
					<tr>
						<th>Назва</th>
						<th>Кількість</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Кількість тварин в притулку</td>
						<td>{animals}</td>
					</tr>
					<tr>
						<td>Кількість працівників</td>
						<td>{employees}</td>
					</tr>
					<tr>
						<td>Кількість успішних адопцій</td>
						<td>{adoptions}</td>
					</tr>
				</tbody>
			</table>
				<button onClick={onHandleClick} className={styles.button}>Змінити</button>
			</> }
			{openModal && <ModalAdminStatistics animals={animals} employees={employees} adoptions={adoptions} onClick={onButtonClick}/>}
		</div>)
	
}

export default AdminStatistics;


