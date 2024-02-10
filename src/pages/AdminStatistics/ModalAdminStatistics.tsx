import { useForm } from 'react-hook-form';
import  style  from './ModalAdminStatistics.module.scss';

interface ModalAdminStatisticsProps {
	animals: number;
	employees: number;
	adoptions: number;
}

const ModalAdminStatistics = ({animals,employees,adoptions}: ModalAdminStatisticsProps ) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      animals: animals,
      employees: employees,
      adoptions: adoptions,
    }
  })

  return (
    <>
      <div className={style.modal_wrap}></div>
      <div className={style.modal}>
		<form onSubmit={handleSubmit((numbers) => { console.log(numbers) })}>
          <label htmlFor='animals'>Кількість тварин в притулку</label>
          <input {...register('animals', { required: 'Заповніть, будь-ласка, поле' })} id='animals' />
          <p>{ errors.animals?.message}</p>
  <label htmlFor='employees'>Кількість працівників</label>
          <input {...register('employees', { required: 'Заповніть, будь-ласка, поле' })} id='employees' />
          <p>{errors.employees?.message }</p>
		<label htmlFor='adoptions'>Кількість успішних адопцій</label>
          <input {...register('adoptions', { required: 'Заповніть, будь-ласка, поле' })} id='adoptions' />
          <p>{errors.adoptions?.message }</p>
		<input type='submit'/>
        </form>
        </div>
      </>
	)
}

export default ModalAdminStatistics