import { FaRegHeart } from 'react-icons/fa6';
import Button from '../../layout/Button/Button';
import { useModalContext } from '../../context/useGlobalContext';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as React from 'react';

import styles from './ContactForm.module.scss';
import { FormUserData, sendFormData } from '../../services/fetchData';
import { MiniErrorAlert, MiniLoader } from '../CommonUI/LoaderAndError/LoaderAndError';


interface FormData {
	name: string;
	phoneNumber: string;
	comment: string;
}

const ContactForm: React.FC = () => {
	const { activateModal, modalId } = useModalContext();
	const { t } = useTranslation();

	const [showLoader, setShowLoader] = useState<boolean>(false);
	const [showError, setShowError] = useState<string>('');
	const [formData, setFormData] = useState<FormData>({
		name: '',
		phoneNumber: '',
		comment: '',

	});
	const [touched, setTouched] = useState<Record<string, boolean>>({
		name: false,
		phoneNumber: false,
		comment: false,
	});
	const [errors, setErrors] = useState<Record<string, string>>({});


	const nameRegex = /^[A-Za-zА-Яа-яҐґЄєІіЇї\s'`’ʼ-]*$/;
	const phoneRegex = /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
		setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
		setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
	};

	const validateName = () => {
		if (touched.name && formData.name.trim().length < 2) {
			setErrors((prevErrors) => ({ ...prevErrors, name: t('contactModal.name_length_error') }));
		} else if (touched.name && !nameRegex.test(formData.name)) {
			setErrors((prevErrors) => ({
				...prevErrors,
				name: t('contactModal.name_character_error'),
			}));
		} else {
			setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
		}
	};

	const validateNumber = () => {
		if (touched.phoneNumber && !phoneRegex.test(formData.phoneNumber)) {
			setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: t('contactModal.tel_error') }));
		} else {
			setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: '' }));
		}
	};

	useEffect(() => {
		validateName();

	}, [formData.name]);

	useEffect(() => {
		validateNumber();
	}, [formData.phoneNumber]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setShowLoader(true);
		setShowError('');
		validateName();
		validateNumber();

		setFormData({
			name: '',
			phoneNumber: '',
			comment: '',
		});
		setTouched({
			name: false,
			phoneNumber: false,
			comment: false,
		});


		const formDataToSend: FormUserData = {
			name: formData.name,
			phone_number: formData.phoneNumber,
			comment: formData.comment,
			id_dog: modalId,
		};

		try {
			await sendFormData(formDataToSend);
			setShowLoader(false);
			setShowError('');
			activateModal('adoption');
		} catch (error: Error) {
			setShowLoader(false);
			setShowError(error.message);
		}
	};

	const isSubmitDisabled = () => {
		return !!Object.values(errors).find((error) => error !== '') || !formData.name || !formData.phoneNumber;
	};

	return (
		<>
			<form className={styles.form} onSubmit={handleSubmit}>

				<div className={styles.inputsContainer}>

					<div className={styles.inputBox}>
						<label
							htmlFor="name"
							className={errors.name ? styles.labelError : styles.label}
						>
							{t('contactModal.name_label')}
						</label>
						<div className={styles.inputWrapper}>
							<input
								id="name"
								name="name"
								type="text"
								className={errors.name ? `${styles.input} ${styles.inputError}` : styles.input}
								placeholder={t('contactModal.name_placeholder')}
								value={formData.name}
								onChange={handleChange}
								minLength={2}
								required
							/>

							{errors.name && <div className={styles.errorMessage}>{errors.name}</div>}
						</div>
					</div>


					<div className={styles.inputBox}>
						<label
							htmlFor="phoneNumber"
							className={errors.phoneNumber ? styles.labelError : styles.label}
						>
							{t('contactModal.tel_label')}
						</label>
						<div className={styles.inputWrapper}>
							<input
								type="tel"
								id="phoneNumber"
								name="phoneNumber"
								className={errors.phoneNumber ? `${styles.input} ${styles.inputError}` : styles.input}
								placeholder={t('contactModal.tel_placeholder')}
								value={formData.phoneNumber}
								onChange={handleChange}
								required
							/>
							{errors.phoneNumber && <div className={styles.errorMessage}>{errors.phoneNumber}</div>}

						</div>
					</div>

					<div className={styles.inputBox}>
						<label
							htmlFor="comment"
							className={styles.label}
						>
							{t('contactModal.comment_label')}
						</label>
						<div className={styles.inputWrapper}>
							<input
								id="comment"
								name="comment"
								value={formData.comment}
								className={styles.input}
								placeholder={t('contactModal.comment_placeholder')}
								onChange={handleChange}
							/>

						</div>
					</div>
				</div>
				<div className={styles.btnContainer}>
					<Button
						name={t('contactModal.button')}
						btnClasses={'primary'}
						disabled={isSubmitDisabled()}
						type={'submit'}
						children={<FaRegHeart />}
					/>
				</div>


			</form>
			{showLoader && <MiniLoader />}
			{showError && <MiniErrorAlert errorMessage={showError} backgroundColor="rgba(255, 0, 0, 0.3)" />}</>
	);
};

export default ContactForm;
