import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchAbout } from '../../services/fetchData';
import ModalAdminStatistics from './ModalAdminStatistics';

const AdminStatistics = () => {
	const data = useQuery({
		queryKey: ['about'],
		queryFn: fetchAbout,
		refetchInterval: 60000,
	});

	const { data: statistics, isPending, isError, error, status } = data;
	console.log(data)
	const [animals, setAnimals] = useState(statistics?.about_data[0]?.quantity_of_animals);
	const [employees, setEmployees] = useState(statistics?.about_data[0]?.quantity_of_employees);
	const [adoptions, setAdoptions] = useState(statistics?.about_data[0]?.quantity_of_succeeds_adoptions);
	const [openModal, setOpenModal] = useState(false)

	useEffect(() => {
	if (status === 'success') {
		setAnimals(statistics?.about_data[0]?.quantity_of_animals);
		setEmployees(statistics?.about_data[0]?.quantity_of_employees);
		setAdoptions(statistics?.about_data[0]?.quantity_of_succeeds_adoptions)
	}	
	},[status,statistics?.about_data])
	console.log(data)
	
	
	if (isPending) {
		return <div>Loading...</div>
	}

	if (isError) {
		<div >{error.message}</div>
	}

	const onHandleClick = () => {
		setOpenModal(!openModal)
	}
		
	return (
		status === 'success' && (<div>
			<table>
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
			<button onClick={onHandleClick}>Змінити</button>
			{openModal && <ModalAdminStatistics animals={animals} employees={employees} adoptions={adoptions} />}
		</div>)
	)
}

export default AdminStatistics;


