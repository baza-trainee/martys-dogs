import Select from 'react-select';
import { FC, useEffect, useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import { useMutation } from '@tanstack/react-query';

import * as options from './optionsInfo';
import * as val from './validationSchema';
import Button from '../../layout/Button/Button';
import styles from '../../pages/AdminTails/TailForm.module.scss';
import { AdminTailsData } from './AdminTails';
import {
	MiniErrorAlert,
	MiniLoader,
} from '../../components/CommonUI/LoaderAndError/LoaderAndError';
import { addTail, changeTail } from '../../services/fetchAdminTails';
import { queryClient } from '../../App';
import { useAuthContext } from '../../context/useGlobalContext';

export type FormData = {
	id?: number;
	name: string;
	name_en?: string;
	ready_for_adoption: boolean;
	gender: string;
	gender_en?: string;
	age: string;
	age_en?: string;
	size: string;
	size_en?: string;
	description: string;
	description_en?: string;
	photo?: File;
};

interface TailFormProps {
	changeShowForm: (a: boolean, b: string) => void;
	changeErrLoader: (loaderStatus: boolean, error: string) => void;
	formType: string;
	cards: AdminTailsData;
	dogId: number | null;
	showLoader?: boolean;
	showError?: string;
	updateCards: React.Dispatch<React.SetStateAction<AdminTailsData>>;
}

const TailForm: FC<TailFormProps> = ({
	changeShowForm,
	changeErrLoader,
	formType,
	cards,
	dogId,
	showLoader,
	showError,
	updateCards,
}) => {
	const { token } = useAuthContext();

	const initialFormData: FormData = {
		name: '',
		name_en: '',
		ready_for_adoption: false,
		gender: '',
		gender_en: '',
		age: '',
		age_en: '',
		size: '',
		size_en: '',
		description: '',
		description_en: '',
	};
	const [formData, setFormData] = useState<FormData>(initialFormData);

	const [touched, setTouched] = useState<Record<string, boolean>>({
		name: false,
		name_en: false,
		description: false,
		description_en: false,
		age: false,
		age_en: false,
		gender: false,
		size: false,
		photo: false,
	});
	const [errors, setErrors] = useState<Record<string, string>>({});

	const { mutate: addMutate } = useMutation({
		mutationFn: addTail,
		onSuccess: (data) => {
			changeErrLoader(false, '');
			changeShowForm(false, '');
			queryClient.invalidateQueries({
				queryKey: ['tailslist'],
				exact: true,
			});
			//to make rerender for showing updates
			updateCards((prevState) => [...prevState, data]);
		},
		onError: () => {
			changeErrLoader(
				false,
				'Додавання не вдалося, перезавантажте сторінку',
			);
		},
	});

	const { mutate: changeMutate } = useMutation({
		mutationFn: changeTail,
		onSuccess: () => {
			changeErrLoader(false, '');
			changeShowForm(false, '');
			queryClient.invalidateQueries({
				queryKey: ['tailslist'],
				exact: true,
			});
		},
		onError: () => {
			changeErrLoader(false, 'Зміна не вдалась, перезавантажте сторінку');
		},
	});

	useEffect(() => {
		val.validateName(formData, touched, setErrors);
		val.validateDescription(formData, touched, setErrors);
		val.validateAge(formData, touched, setErrors);
		val.validateSelects(formData, touched, setErrors);
		val.validateFile(formData, touched, setErrors);
	}, [formData, touched, setErrors]);

	useEffect(() => {
		if (formType === 'edit' && cards.length > 0) {
			const editedCard = cards.find((card) => card.id === dogId);
			if (editedCard) {
				setFormData({
					id: editedCard.id,
					name: editedCard.name || '',
					name_en: editedCard.name_en || '',
					ready_for_adoption: editedCard.ready_for_adoption || false,
					gender: editedCard.gender || '',
					gender_en: editedCard.gender_en || '',
					age: editedCard.age || '',
					age_en: editedCard.age_en || '',
					size: editedCard.size || '',
					size_en: editedCard.size_en || '',
					description: editedCard.description || '',
					description_en: editedCard.description_en || '',
					photo: editedCard.photo,
				});
			}
		}
	}, [formType, cards, dogId]);

	const handleChange = (
		field: keyof FormData,
		value: string | boolean | FileList | null | undefined,
	) => {
		// const file = value?.[0];
		const file = value instanceof FileList ? value[0] : null;
		if (field === 'photo' && file) {
			setFormData((prevData) => ({
				...prevData,
				photo: file,
			}));
		} else {
			setFormData((prevData) => ({
				...prevData,
				[field]: value,
			}));
		}
		setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
		setTouched((prevTouched) => ({ ...prevTouched, [field]: true }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (token) {
			changeErrLoader(true, '');
			if (formType === 'edit' && formData.id !== undefined) {
				const changedDog = await changeMutate({
					tailId: formData.id,
					formDogData: formData,
					token,
				});
				//to make rerender for showing updates
				updateCards((prevCards) =>
					prevCards.map((tail) => {
						if (tail.id === formData.id) {
							return { ...tail, ...changedDog };
						}
						return tail;
					}),
				);
			} else {
				await addMutate({ formDogData: formData, token });
			}
		} else {
			console.error('handleSubmit failed because of no Auth token ');
		}
	};

	const handleShowFormStatus = () => {
		changeShowForm(false, '');
	};

	const isSubmitDisabled = () => {
		return (
			!!Object.values(errors).find((error) => error !== '') ||
			!formData.name ||
			!formData.description ||
			!formData.gender ||
			!formData.age ||
			!formData.size ||
			!formData.photo
		);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className={styles.catalog_filter}>
				<div className={styles.catalog_inputs}>
					<div className={styles.inputBoxName}>
						<label
							htmlFor='name'
							className={
								errors.name
									? styles.labelError
									: styles.catalog_select_label
							}
						>
							Ім'я українською* 🇺🇦:
						</label>
						<div className={styles.inputWrapper}>
							<input
								id='name'
								onChange={(e) =>
									handleChange('name', e.target.value)
								}
								name='name'
								required
								maxLength={15}
								placeholder={`Вкажіть ім'я Хвостика`}
								className={
									errors.name
										? `${styles.input} ${styles.inputError}`
										: styles.input
								}
								type='text'
								value={formData.name}
							/>

							{errors.name && (
								<div className={styles.errorMessage}>
									{errors.name}
								</div>
							)}
						</div>
					</div>

					<div className={styles.inputBox}>
						<label
							htmlFor='description'
							className={styles.catalog_select_label}
						>
							Опис українською* 🇺🇦:
						</label>
						<div className={styles.inputWrapper}>
							<textarea
								id='description'
								onChange={(e) =>
									handleChange('description', e.target.value)
								}
								placeholder={`Введіть опис Хвостика`}
								className={
									errors.description
										? `${styles.input} ${styles.inputError}`
										: styles.input
								}
								required
								maxLength={381}
								value={formData.description}
							/>
							{errors.description && (
								<div className={styles.errorMessage}>
									{errors.description}
								</div>
							)}
						</div>
					</div>
				</div>

				<div className={styles.catalog_inputs}>
					<div className={styles.inputBoxName}>
						<label
							htmlFor='name_en'
							className={styles.catalog_select_label}
						>
							Ім'я англійською:
						</label>
						<div className={styles.inputWrapper}>
							<input
								id='name_en'
								onChange={(e) =>
									handleChange('name_en', e.target.value)
								}
								placeholder={`Вкажіть ім'я Хвостика`}
								className={
									errors.name_en
										? `${styles.input} ${styles.inputError}`
										: styles.input
								}
								type='text'
								value={formData.name_en}
							/>
							{errors.name_en && (
								<div className={styles.errorMessage}>
									{errors.name_en}
								</div>
							)}
						</div>
					</div>

					<div className={styles.inputBox}>
						<label
							htmlFor='description_en'
							className={styles.catalog_select_label}
						>
							Опис англійською:
						</label>
						<div className={styles.inputWrapper}>
							<textarea
								id='description_en'
								onChange={(e) =>
									handleChange(
										'description_en',
										e.target.value,
									)
								}
								placeholder={`Вкажіть опис Хвостика`}
								className={
									errors.description_en
										? `${styles.input} ${styles.inputError}`
										: styles.input
								}
								value={formData.description_en}
							/>
							{errors.description_en && (
								<div className={styles.errorMessage}>
									{errors.description_en}
								</div>
							)}
						</div>
					</div>
				</div>

				<div className={styles.catalog_inputs}>
					<div className={styles.catalog_select_container}>
						<label className={styles.catalog_select_label}>
							Стать українською* 🇺🇦:
						</label>
						<Select
							options={options.optionsGenderUA}
							placeholder={'Оберіть стать'}
							value={options.optionsGenderUA.find(
								(opt) => opt.value === formData.gender,
							)}
							onChange={(selectedOption) =>
								handleChange('gender', selectedOption?.value)
							}
							styles={options.customStyles}
						/>
						{errors.gender && (
							<div className={styles.errorMessage}>
								{errors.gender}
							</div>
						)}
					</div>

					<div className={styles.catalog_select_container}>
						<label
							htmlFor='age'
							className={
								errors.age
									? styles.labelError
									: styles.catalog_select_label
							}
						>
							Вік українською* 🇺🇦:
						</label>
						<div className={styles.inputWrapper}>
							<input
								id='age'
								onChange={(e) =>
									handleChange('age', e.target.value)
								}
								name='age'
								required
								maxLength={15}
								placeholder={`Вкажіть вік Хвостика`}
								className={
									errors.age
										? `${styles.input} ${styles.inputError}`
										: styles.input
								}
								type='text'
								value={formData.age}
							/>

							{errors.age && (
								<div className={styles.errorMessage}>
									{errors.age}
								</div>
							)}
						</div>
					</div>

					<div className={styles.catalog_select_container}>
						<label className={styles.catalog_select_label}>
							Розмір українською* 🇺🇦:
						</label>
						<Select
							options={options.optionsSizeUA}
							placeholder={'Оберіть розмір'}
							value={options.optionsSizeUA.find(
								(opt) => opt.value === formData.size,
							)}
							onChange={(selectedOption) =>
								handleChange('size', selectedOption?.value)
							}
							styles={options.customStyles}
						/>
						{errors.size && (
							<div className={styles.errorMessage}>
								{errors.size}
							</div>
						)}
					</div>
				</div>

				<div className={styles.catalog_inputs}>
					<div className={styles.catalog_select_container}>
						<label className={styles.catalog_select_label}>
							Стать англійською:
						</label>
						<Select
							options={options.optionsGenderEN}
							placeholder={'Оберіть стать'}
							value={options.optionsGenderEN.find(
								(opt) => opt.value === formData.gender_en,
							)}
							onChange={(selectedOption) =>
								handleChange('gender_en', selectedOption?.value)
							}
							styles={options.customStyles}
						/>
					</div>

					<div className={styles.catalog_select_container}>
						<label
							htmlFor='age_en'
							className={
								errors.age_en
									? styles.labelError
									: styles.catalog_select_label
							}
						>
							Вік англійською:
						</label>
						<div className={styles.inputWrapper}>
							<input
								id='age_en'
								onChange={(e) =>
									handleChange('age_en', e.target.value)
								}
								name='age_en'
								maxLength={15}
								placeholder={`Вкажіть вік Хвостика`}
								className={
									errors.age_en
										? `${styles.input} ${styles.inputError}`
										: styles.input
								}
								type='text'
								value={formData.age_en}
							/>

							{errors.age_en && (
								<div className={styles.errorMessage}>
									{errors.age_en}
								</div>
							)}
						</div>
					</div>

					<div className={styles.catalog_select_container}>
						<label className={styles.catalog_select_label}>
							Розмір англійською:
						</label>
						<Select
							options={options.optionsSizeEN}
							placeholder={'Оберіть розмір'}
							value={options.optionsSizeEN.find(
								(opt) => opt.value === formData.size_en,
							)}
							onChange={(selectedOption) =>
								handleChange('size_en', selectedOption?.value)
							}
							styles={options.customStyles}
						/>
					</div>
				</div>

				<div className={styles.catalog_checkbox_container}>
					<div className={styles.catalog_checkbox_box}>
						<input
							type='checkbox'
							id='ready_for_adoption'
							name='ready_for_adoption'
							checked={formData.ready_for_adoption}
							onChange={(e) =>
								handleChange(
									'ready_for_adoption',
									e.target.checked,
								)
							}
							className={styles.catalog_checkbox}
						/>
						<label
							htmlFor='ready_for_adoption'
							className={styles.catalog_checkbox_label}
						>
							Готовність до всиновлення
						</label>
					</div>
				</div>

				<div className={styles.inputBoxName}>
					<span className={styles.catalog_checkbox_label}>
						*Оберіть зображення:
					</span>
					<div>
						<label
							htmlFor='photo'
							className={
								errors.photo
									? `${styles.uploadInput} ${styles.uploadError}`
									: styles.uploadInput
							}
						>
							{formData.photo?.name.slice(0, 21) ||
								'Завантажте зображення'}
							{/* {console.log(formData.photo)} */}
							<FaUpload />
						</label>
						<div className={styles.inputWrapper}>
							<input
								type='file'
								id='photo'
								onChange={(e) =>
									handleChange('photo', e.target.files)
								}
							/>
							{errors.photo && (
								<div className={styles.errorMessage}>
									{errors.photo}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>

			<div className={styles.submit_buttons_container}>
				<div className={styles.submit_buttons_box}>
					<Button
						name={'Зберегти'}
						btnClasses={'primary'}
						type='submit'
						disabled={isSubmitDisabled()}
					/>

					<Button
						name={'Відмінити'}
						btnClasses={'secondary'}
						type='button'
						onClick={handleShowFormStatus}
					/>
				</div>
			</div>
			<div className={styles.errLoaderBox}>
				{showLoader && formType !== 'delete' ? <MiniLoader /> : null}

				{showError && formType !== 'delete' ? (
					<MiniErrorAlert
						errorMessage={showError}
						backgroundColor='rgba(255, 0, 0, 0.3)'
					/>
				) : null}
			</div>
		</form>
	);
};
export default TailForm;
