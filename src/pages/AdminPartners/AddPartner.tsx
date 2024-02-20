import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaUpload } from 'react-icons/fa';
import {
	Loader,
	ErrorAlert,
} from '../../components/CommonUI/LoaderAndError/LoaderAndError';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { requestAdminPage } from '../../services/adminPartners';
import { useAuthContext } from '../../context/useGlobalContext';
import styles from './AddPartners.module.scss';

interface PartnersStateType {
	name: string;
	logo: FileList | null;
	website: string | null;
}

const createFormData = (data: PartnersStateType): FormData => {
	
	const formData = new FormData();
	formData.append('name', data.name);
  
	if (data.logo !== null && data.logo.length > 0) {
	  const logoFile = data.logo[0];
	  formData.append('logo', logoFile, logoFile.name);
	}
	if (data.website !== null && data.website.trim() !== '') {
		formData.append('website', data.website);
	  }
	return formData;
  };

const AddPartner: React.FC = () => {
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
		reset,
	} = useForm<PartnersStateType>({
		defaultValues: {},
	});
	const { token } = useAuthContext();
	
	const addPartnerMutation = useMutation({
		mutationFn: async (data: PartnersStateType) => {
			const formData = createFormData(data);
			return requestAdminPage(token ?? '', 'POST', '/partners', formData, true);
		},
	});

	const queryClient = useQueryClient();

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errorAlert, setErrorAlert] = useState(false);

	
	const handleCancel = () => {
		setValue('name', '');
		setValue('logo', null);
		setValue('website', '');
		console.log('Cancel clicked!');
	};

	const navigate = useNavigate();

	const submitHandler: SubmitHandler<PartnersStateType> = async (data) => {
		console.log('Form data submitted:', data);
		setIsSubmitting(true);

		try {
			await addPartnerMutation.mutateAsync(data, {
				onSuccess: () => {
					console.log('Add partner successful!');
					queryClient.invalidateQueries({ queryKey: ['partners'] });
					navigate('/admin/partners');
				},
				onError: () => {
					console.error('Add partner failed!');
				},
			});

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
			<h2>Додати партнера</h2>

			<form
				onSubmit={handleSubmit(submitHandler)}
				className={styles.form}
			>
				<div className={styles.inputRow}>
					<div className={styles.inputContainer}>
						<label htmlFor='nameInput'>Назва:</label>
						<input
							type='text'
							id='nameInput'
							{...register('name', {
								required: "Назва обов'язкова",
								maxLength: {
									value: 50,
									message:
										'Назва повинна бути менше або дорівнювати 50 символам',
								},
							})}
							placeholder='Введіть назву'
						/>
						{errors.name && (
							<div className={styles.validationError}>
								{errors.name.message}
							</div>
						)}
					</div>

					<div className={styles.inputContainer}>
						<label htmlFor='logoInput'>
							Логотип:
							<p><FaUpload className={styles.icon} />
							
								<span className={styles.text}>
									{watch('logo')?.[0]?.name ||
										' Завантажте зображення'}
								</span>
							</p>
						</label>
						<input
							type='file'
							id='logoInput'
							{...register('logo', {
								required: 'Зображення не обране',
								validate: {
									validImageFormat: (value: FileList | null) => {
										if (!value) return true;
										const supportedImageFormats = [
											'image/jpeg',
											'image/png',
											'image/webp',
										];
										return (
											supportedImageFormats.includes(
												value[0].type,
											) ||
											'Виберіть дійсний файл зображення (JPEG, PNG або WebP)'
										);
									},
									validImageSize: (value: FileList | null) => {
										if (!value) return true;
										const maxSize = 5 * 1024 * 1024; // 5MB
										return (
											value[0].size <= maxSize ||
											`Розмір файлу повинен бути менше або рівний ${
												maxSize / (1024 * 1024)
											} MB`
										);
									},
								},
							})}
						
							accept='image/*'
						/>
						{errors.logo && (
							<div className={styles.validationError}>
								{errors.logo.message}
							</div>
						)}
					</div>

					<div className={styles.inputContainer}>
						<label htmlFor='website'>Сайт партнера:</label>
						<input
							type='text'
							id='website'
							{...register('website', {
								pattern: {
									value: /^(https?:\/\/)?([\w-]+\.)+[\w]{2,}(\/[\w-]*)*$/,
									message: 'Введіть дійсний URL веб-сайту',
								},
								
							})}
							placeholder='Додайте посилання'
						/>
						{errors.website && (
							<div className={styles.validationError}>
								{errors.website.message}
							</div>
						)}
						</div>
				</div>
				
				<div className={styles.buttonRow}>
					<button type='submit'>Додати</button>
					<button type='button' onClick={handleCancel}>
						Скасувати
					</button>
				</div>
				{isSubmitting && <Loader backgroundColor='#dbdbdb' />}
				{errorAlert && (
					<ErrorAlert
						errorMessage='Логотип не додано. Перезавантажте, будь ласка, сторінку.'
						backgroundColor='#dbdbdb'
					/>
				)}
			</form>
		</div>
	);
};

export default AddPartner;
