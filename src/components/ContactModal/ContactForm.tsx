import { FaRegHeart } from 'react-icons/fa6';
import styles from './ContactForm.module.scss';
import Button from '../../layout/Button/Button';
import { useModalContext } from '../../context/useGlobalContext';
import { useState } from 'react';
import * as React from 'react';

interface FormData {
	name: string;
	phoneNumber: string;
	comment: string;
}


const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		phoneNumber: '',
		comment: '',
	});
	const [errors, setErrors] = useState<Record<string, string>>({});
	const { closeModal } = useModalContext();


	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
		setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Валідація ім'я (мінімум 2 символи)
		if (formData.name.trim().length < 2) {
			setErrors((prevErrors) => ({ ...prevErrors, name: `Ім'я повинно містити щонайменше 2 символи` }));
		}

		// Валідація номеру телефону
		const phoneRegex = /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;
		if (!phoneRegex.test(formData.phoneNumber)) {
			setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: `Введіть номер телефону` }));
		}

		// Логіка обробки форми при відсутності помилок
		if (Object.keys(errors).length === 0) {
			console.log('Success. Send contacts: :', formData);
			closeModal();
			//Тут має бути функція відкриття модалки Adoption
			// Потім додати код для відправлення даних на сервер або іншої логіки
		} else {
			console.log('Error');
		}
	};

	const isSubmitDisabled = () => {
		return !!Object.values(errors).find((error) => error !== '') || !formData.name || !formData.phoneNumber;
	};


	return (

		<form onSubmit={handleSubmit}>

			<div className={styles.inputsContainer}>

				<div >
					<label
						htmlFor="name"
						className={errors.name ? styles.labelError : styles.label}
					>
						Ваше ім’я
					</label>
					<div className={styles.inputWrapper}>
						<input
							id="name"
							name="name"
							type="text"
							className={errors.name ? `${styles.input} ${styles.inputError}` : styles.input}
							placeholder="Вкажіть ваше ім’я"
							value={formData.name}
							onChange={handleChange}
							minLength={2}
							required
							// onBlur={handleBlur}
						/>

						{errors.name && <div className={styles.errorMessage}>{errors.name}</div>}
					</div>
				</div>


				<div >
					<label
						htmlFor="phoneNumber"
						className={errors.phoneNumber ? styles.labelError : styles.label}
					>
						Номер телефону
					</label>
					<div className={styles.inputWrapper}>
						<input
							type="tel"
							id="phoneNumber"
							name="phoneNumber"
							className={errors.phoneNumber ? `${styles.input} ${styles.inputError}` : styles.input}
							placeholder="Вкажіть номер телефону"
							value={formData.phoneNumber}
							onChange={handleChange}
							required
							// onBlur={handleBlur}
						/>
						{errors.phoneNumber && <div className={styles.errorMessage}>{errors.phoneNumber}</div>}

					</div>
				</div>

				<div >
					<label
						htmlFor="comment"
						className={styles.label}
					>
						Коментар
					</label>
					<div className={styles.inputWrapper}>
						<input
							id="comment"
							name="comment"
							value={formData.comment}
							className={styles.input}
							placeholder="Залишіть коментар"
							onChange={handleChange}
							// onBlur={handleBlur}
						/>

					</div>
				</div>
			</div>
			<div className={styles.btnContainer}>
				<Button
					name={'Залишити контакти'}
					btnClasses={'primary'}
					disabled={isSubmitDisabled()}
					type={'submit'}
					children={<FaRegHeart />}
				/>
			</div>

		</form>

	);
};

export default ContactForm;
