import { FaRegHeart } from 'react-icons/fa6';
import styles from './ContactForm.module.scss';
import Button from '../../layout/Button/Button';
import * as React from 'react';


const ContactForm: React.FC = ({onClick}) => {

	return (

		<form>

		 <div className={styles.inputsContainer}>hi</div>
			<div className={styles.btnContainer}>
				<Button
					name={'Залишити контакти'}
					btnClasses={'primary'}
					onClick={onClick}
					type={'submit'}
					children={<FaRegHeart />}
				/>
			</div>

		</form>

	);
};

export default ContactForm;
