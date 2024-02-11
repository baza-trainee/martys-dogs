import React, {useState} from 'react';
import { useForm, SubmitHandler} from 'react-hook-form';
import { FaUpload } from 'react-icons/fa';
import {Loader, ErrorAlert} from '../../components/CommonUI/LoaderAndError/LoaderAndError';
import styles from './ChangePartners.module.scss';

export interface PartnersStateType {
	inputName: string;
	inputWeb: string;
	image: File | null;
}

interface Props {
	title: string;
	submitButtonName: string;
	onSubmit: (state: PartnersStateType) => void;
}

export const createFormData = (data: PartnersStateType): FormData => {
	const formData = new FormData();
	formData.append('inputName', data.inputName);
	formData.append('inputWeb', data.inputWeb);
	if (data.image !== null) {
		formData.append('image', data.image as Blob);
	  }
	return formData;
  };

export const transformFormData = (
	data: FormData,
): { inputName: string; inputWeb: string; image: File | null } => {
	return {
		inputName: data.get('inputName') as string,
		inputWeb: data.get('inputWeb') as string,
		image: data.get('image') instanceof File ? data.get('image') as File : null,
	};
};

const ChangePartners: React.FC<Props> = ({
	title,
	submitButtonName,
	onSubmit,
}) => {

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors, isSubmitted },
		getValues,
		reset
	} = useForm<PartnersStateType>({
		defaultValues: {
			inputName: '',
			inputWeb: '',
			image: null,
		},
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
	const watchImage = watch('image');

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		setValue('image', file || null);
		console.log('Form State:', getValues());
		console.log('watchImage:', file);
	};

	const handleCancel = () => {
		setValue('inputName', '');
		setValue('inputWeb', '');
		setValue('image', null);
		console.log('Cancel clicked!');
	};

	
	const submitHandler: SubmitHandler<PartnersStateType> =  (data) => {
		console.log('Form data submitted:', data);
		setIsSubmitting(true);

		try {
		   onSubmit(data);

		  reset();
		  setIsSubmitting(false);
		  console.log('Submit clicked!');
		} catch (error) {

		  setIsSubmitting(false);
		  console.error('Error during form submission:', error);
		  setErrorAlert(true);
		}
	  };
	return (
		<div className={styles.container}>
			<h2>{title}</h2>
			
			<form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
				<div className={styles.inputRow}>
					<div className={styles.inputContainer}>
						<label htmlFor='name'>Назва:</label>
						<input
							type='text'
							id='name'
							{...register('inputName', {
								required: "Назва обов'язкова",
								maxLength: {
									value: 50,
									message:
										'Назва повинна бути менше або дорівнювати 50 символам',
								},
							})}
							placeholder='Введіть назву'
						/>
						{errors.inputName && (
							<div className={styles.validationError}>
								{errors.inputName.message}
							</div>
						)}
					</div>

					<div className={styles.inputContainer}>
						<label htmlFor='imageInput'>
							Логотип:
							<span className={styles.uploadLabel}>
								<FaUpload className={styles.uploadIcon} />
								{watchImage?.name || 'Завантажте зображення'}
							</span>
						</label>
						<input
							type='file'
							id='imageInput'
							{...register('image', {
								required: isSubmitted ?  false:'Зображення не обране',
								validate: {
									validImageFormat: (value: File | null) => {
										if (!value) return true;
										const supportedImageFormats = [
											'image/jpeg',
											'image/png',
											'image/webp',
										];
										return (
											supportedImageFormats.includes(
												value.type,
											) ||
											'Виберіть дійсний файл зображення (JPEG, PNG або WebP)'
										);
									},
									validImageSize: (value: File | null) => {
										if (!value) return true;
										const maxSize = 5 * 1024 * 1024; // 5MB
										return (
											value.size <= maxSize ||
											`Розмір файлу повинен бути менше або рівний ${
												maxSize / (1024 * 1024)
											} MB`
										);
									},
								},
							})}
							onChange={handleImageChange}
							accept='image/*'
						/>
						{errors.image && (
							<div className={styles.validationError}>
								{errors.image.message}
							</div>
						)}
					</div>

					<div className={styles.inputContainer}>
						<label htmlFor='website'>Сайт партнера:</label>
						<input
							type='text'
							id='website'
							{...register('inputWeb', {
								required: "Веб-сайт обов'язковий",
								pattern: {
									value: /^(https?:\/\/)?([\w-]+\.)+[\w]{2,}(\/[\w-]*)*$/,
									message: 'Введіть дійсний URL веб-сайту',
								},
							})}
							placeholder='Додайте посилання'
						/>
						{errors.inputWeb && (
							<div className={styles.validationError}>
								{errors.inputWeb.message}
							</div>
						)}
					</div>
				</div>
				{isSubmitting && <Loader backgroundColor='#EEEEEE'/>}
				{errorAlert && <ErrorAlert errorMessage="Submission failed." backgroundColor='#EEEEEE'/>}
				<div className={styles.buttonRow}>
					<button type='submit'>{submitButtonName}</button>
					<button type='button' onClick={handleCancel}>
						Скасувати
					</button>
				</div>
			</form>
		</div>
	);
};

export default ChangePartners;
