import { useForm } from 'react-hook-form';
import { IoMdCloseCircleOutline } from "react-icons/io";
import  style  from './ModalAdminStatistics.module.scss';

interface ModalAdminStatisticsProps {
	animals: number;
	employees: number;
  adoptions: number;
  onClick:()=>void
}

const ModalAdminStatistics = ({animals,employees,adoptions,onClick}: ModalAdminStatisticsProps ) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      animals: animals,
      employees: employees,
      adoptions: adoptions,
    }
  })

  return (
    <>
      <div className={style.modal_wrap} onClick={onClick}></div>
      <div className={style.modal}>
		<form onSubmit={handleSubmit((numbers) => { console.log(numbers) })} className={style.form}>
          <label htmlFor='animals'>Кількість тварин в притулку</label>
          <input {...register('animals', { required: 'Заповніть, будь-ласка, поле' })} id='animals' />
          <p className={style.error_message}>{ errors.animals?.message}</p>
          
          <label htmlFor='employees'>Кількість працівників</label>
          <input {...register('employees', { required: 'Заповніть, будь-ласка, поле' })} id='employees' />
          <p className={style.error_message}>{errors.employees?.message }</p>
		
          <label htmlFor='adoptions'>Кількість успішних адопцій</label>
          <input {...register('adoptions', { required: 'Заповніть, будь-ласка, поле' })} id='adoptions' />
          <p className={style.error_message}>{errors.adoptions?.message }</p>
	
          <input type='submit' value='Відправити' className={style.submit } />
        </form>
        <button className={style.button} onClick={onClick}><IoMdCloseCircleOutline size={30} /></button>
        </div>
      </>
	)
}

export default ModalAdminStatistics