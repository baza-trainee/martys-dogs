import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAuthContext } from '../../context/useGlobalContext';
import { getStatistics,updateStatistics } from '../../services/adminStatistics';
import { Loader,ErrorAlert } from '../../components/CommonUI/LoaderAndError/LoaderAndError';
import ModalAdminStatistics from './ModalAdminStatistics';
import styles from './AdminStatistics.module.scss';


const AdminStatistics:React.FC = () => {
	const {token} = useAuthContext();

	const data = useQuery({
		queryKey: ['about',token],
		queryFn: async () => {
			if (token !== null) {
				const statistics = await getStatistics(token);
				console.log(statistics)
				return statistics;
			} else {
				return Promise.resolve([])
			}
		},
		refetchInterval: 60000,
	});


	const {data:statistics, isPending, isError, error, isSuccess} = data
	console.log(data)

	const [animals, setAnimals] = useState<number>(0);
	const [employees, setEmployees] = useState<number>(0);
	const [adoptions, setAdoptions] = useState<number>(0);

	const [openModal, setOpenModal] = useState<boolean>(false);
	

		useEffect(() => {
	if (isSuccess) {
		setAnimals(statistics[0].quantity_of_animals);
		setEmployees(statistics[0].quantity_of_employees);
		setAdoptions(statistics[0].quantity_of_succeeds_adoptions)
	}	
	},[isSuccess,statistics])

	

	const onHandleClick = () => {
		setOpenModal(!openModal)
	}

	const onButtonClick = () => {
		setOpenModal(!openModal)
	}
		
	const handleUpdateStatistics = async(animals:number,employees:number,adoptions:number) => {
    if (token !== null) {
      try {
				await updateStatistics(token, animals, employees, adoptions);
				setOpenModal(!openModal);
				setAnimals(animals);
				setEmployees(employees);
				setAdoptions(adoptions);
			} catch {
				if(error){
				return <ErrorAlert errorMessage={error.message} />}
      }
    }
  }
	return (
	
		
			<div className={styles.main}>
			<h2 className={styles.title}>Статистика</h2>
			{isPending && <Loader />}
			{isError && <ErrorAlert errorMessage={error.message} />}
			{ isSuccess && <>
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
			{openModal && <ModalAdminStatistics animals={animals} employees={employees} adoptions={adoptions} onClick={onButtonClick} onSubmit={handleUpdateStatistics } />}
		</div>)
	
}

export default AdminStatistics;


