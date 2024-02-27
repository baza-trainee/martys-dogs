import * as React from 'react';
import styles from '../../pages/AdminTails/TailForm.module.scss';
import Select from 'react-select';
import Button from '../../layout/Button/Button';
import { useEffect, useState } from 'react';
import ArrowIconUp from '../../assets/dropdown_arrow_up.svg';
import ArrowIconDown from '../../assets/dropdown_arrow_down.svg';
import { IAddNews } from '../../services/adminNews';
import { FaUpload } from 'react-icons/fa';

interface OptionType {
	value: string;
	label: string;
}

type FormData = {
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
	photo?: {
		id: string;
		name: string;
		url: string;
		category: string;
	};
}

interface CustomStyles {
	control?: (provided: any, state: any) => any;
	dropdownIndicator?: (provided: any) => any;
	indicatorSeparator?: () => any;
	menu?: (provided: any) => any;
	option?: (provided: any) => any;
}

interface TailFormProps {
	changeShowForm: (a: boolean, b: string) => void;
	formType: string;
}

const TailForm: React.FC<TailFormProps> = ({ changeShowForm, formType, cards, dogId }) => {

	console.log(cards);
	console.log(dogId);
	const [formData, setFormData] = useState<FormData>({
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
	});

	const [touched, setTouched] = useState<Record<string, boolean>>({
		name: false,
		name_en: false,
		description: false,
		description_en: false,
		age: false,
		age_en: false,
	});
	const [errors, setErrors] = useState<Record<string, string>>({});

	const nameRegex = /^[А-Яа-яҐґЄєІіЇї\s'`’ʼ-]*$/;
	const nameEngRegex = /^[A-Za-z\s'`’ʼ-]*$/;


	useEffect(() => {
		if (formType === 'edit' && cards.length > 0) {
			const editedCard = cards.find(card => card.id === dogId);
			if (editedCard) {
				setFormData({
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
				});
			}
		}
	}, [formType, cards, dogId]);

	const optionsGenderUA: OptionType[] = [
		{ value: '', label: 'Оберіть стать' },
		{ value: 'хлопчик', label: 'Хлопчик' },
		{ value: 'дівчинка', label: 'Дівчинка' },
	];



	const optionsSizeUA: OptionType[] = [
		{ value: '', label: 'Оберіть розмір' },
		{ value: 'маленький', label: 'Маленький' },
		{ value: 'середній', label: 'Середній' },
		{ value: 'великий', label: 'Великий' },
	];


	const optionsGenderEN: OptionType[] = [
		{ value: '', label: 'Оберіть стать' },
		{ value: 'boy', label: 'Boy' },
		{ value: 'girl', label: 'Girl' },
	];


	const optionsSizeEN: OptionType[] = [
		{ value: '', label: 'Оберіть розмір' },
		{ value: 'small', label: 'Small' },
		{ value: 'medium', label: 'Medium' },
		{ value: 'large', label: 'Large' },
	];

	const optionsAgeEN: OptionType[] = [
		{ value: '', label: 'Оберіть розмір' },
		{ value: 'small', label: 'Small' },
		{ value: 'medium', label: 'Medium' },
		{ value: 'large', label: 'Large' },
	];

	const customStyles: CustomStyles = {
		control: (provided, state) => ({
			...provided,
			padding: '6px 16px',
			borderRadius: '40px',
			borderColor: '#b6e1f2',
			color: '#858585',
			fontSize: '20px',
			fontWeight: 500,
			cursor: 'pointer',
			position: 'relative',
			'&:hover': {
				borderColor: '#b6e1f2',
			},
			'&:before': {
				content: '""',
				backgroundImage: state.menuIsOpen ? `url(${ArrowIconUp})` : `url(${ArrowIconDown})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: '24px 24px',
				width: '24px',
				height: '24px',
				position: 'absolute',
				right: '8px',
				top: '50%',
				transform: 'translateY(-50%)',
			},
		}),
		indicatorSeparator: () => ({
			display: 'none',
		}),
		dropdownIndicator: (provided) => ({
			...provided,
			display: 'none',
		}),
		menu: (provided) => ({
			...provided,
			borderRadius: '24px',
			boxShadow: '0 0 0 1px #b6e1f2',
		}),
		option: (provided) => ({
			...provided,
			backgroundColor: 'white',
			cursor: 'pointer',
			color: '#0D0031',
			borderRadius: '24px',
			'&:hover': {
				color: '#009cd9',
			},
		}),
	};


	/*	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const { name, value } = e.target;
			setFormData((prevData) => ({ ...prevData, [name]: value }));
			setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
			setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
		};*/

	/*	const validateName = () => {
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
		};*/


	/*	useEffect(() => {
			validateName();

		}, [formData.name]);*/

	const handleChange = (field: keyof FormData, value: string | boolean) => {
		setFormData((prevData) => ({
			...prevData,
			[field]: value,
		}));
		setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
		setTouched((prevTouched) => ({ ...prevTouched, [field]: true }));
	};


	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// validateName();

		/*	setFormData({
				name: '',
				phoneNumber: '',
				comment: '',
			});*/
		/*	setTouched({
				name: false,
				phoneNumber: false,
				comment: false,
			});*/
		// activateModal('adoption');
		console.log(formData);
		changeShowForm(false, '');
	};

	const handleShowFormStatus = () => {
		changeShowForm(false, '');
		console.log('Закрити форму редагування');
	};
	/*	const isSubmitDisabled = () => {
			return !!Object.values(errors).find((error) => error !== '') || !formData.name;
		};*/

	return (
		<form onSubmit={handleSubmit}>
			<div className={styles.catalog_filter}>

				<div className={styles.catalog_inputs}>

					<div className={styles.inputBoxName}>
						<label
							htmlFor="name"
							className={errors.name ? styles.labelError : styles.catalog_select_label}
						>
							Ім'я українською 🇺🇦:
						</label>
						<div className={styles.inputWrapper}>
							<input
								id='name'
								onChange={(e) => handleChange('name', e.target.value)}
								name="name"
								maxLength={15}
								placeholder={`Вкажіть ім'я Хвостика`}
								className={errors.name ? `${styles.input} ${styles.inputError}` : styles.input}
								type="text"
								value={formData.name}


							/>

							{errors.name && <div className={styles.errorMessage}>{errors.name}</div>}
						</div>
					</div>


					<div className={styles.inputBox}>
						<label htmlFor="description"
							   className={styles.catalog_select_label}>
							Опис українською 🇺🇦:
						</label>
						<div className={styles.inputWrapper}>
						<textarea id='description'
								  onChange={(e) => handleChange('description', e.target.value)}
								  placeholder={`Введіть опис Хвостика`}
								  className={errors.name ? `${styles.input} ${styles.inputError}` : styles.input}
								  type="text"
								  maxLength={381}
								  value={formData.description} />
							{errors.name && <div className={styles.errorMessage}>{errors.name}</div>}
						</div>
					</div>
				</div>

				<div className={styles.catalog_inputs}>

					<div className={styles.inputBoxName}>
						<label htmlFor="name_en"
							   className={styles.catalog_select_label}
						>
							Ім'я англійською:
						</label>
						<div className={styles.inputWrapper}>
							<input id='name_en' onChange={(e) => handleChange('name_en', e.target.value)}
								   placeholder={`Вкажіть ім'я Хвостика`}
								   className={errors.name ? `${styles.input} ${styles.inputError}` : styles.input}
								   type="text"
								   value={formData.name_en} />
							{errors.name && <div className={styles.errorMessage}>{errors.name}</div>}
						</div>
					</div>

					<div className={styles.inputBox}>
						<label htmlFor="description_en"
							   className={styles.catalog_select_label}>
							Опис англійською:
						</label>
						<div className={styles.inputWrapper}>
						<textarea id='description_en'
								  onChange={(e) => handleChange('description_en', e.target.value)}
								  placeholder={`Вкажіть опис Хвостика`}
								  className={errors.name ? `${styles.input} ${styles.inputError}` : styles.input}
								  type="text"
								  value={formData.description_en} />
							{errors.name && <div className={styles.errorMessage}>{errors.name}</div>}
						</div>
					</div>
				</div>

				<div className={styles.catalog_inputs}>

					<div className={styles.catalog_select_container}>

						<label
							className={styles.catalog_select_label}>
							Cтать українською 🇺🇦:
						</label>
						<Select

							options={optionsGenderUA}
							placeholder={'Оберіть стать'}
							value={optionsGenderUA.find((opt) => opt.value === formData.gender)}
							onChange={(selectedOption) => handleChange('gender', selectedOption?.value || '')}
							styles={customStyles}
						/>
					</div>

					<div
						className={styles.catalog_select_container}
					>
						{/*<label

							className={styles.catalog_select_label}>
							Вік українською 🇺🇦:
						</label>
						<Select

							options={optionsAgeUA}
							placeholder={'Оберіть вік'}
							value={optionsAgeUA.find((opt) => opt.value === formData.age)}
							onChange={(selectedOption) => handleChange('age', selectedOption?.value || '')}
							styles={customStyles}
						/>*/}

							<label
								htmlFor="age"
								className={errors.age ? styles.labelError : styles.catalog_select_label}
							>
								Вік українською 🇺🇦:
							</label>
							<div className={styles.inputWrapper}>
								<input
									id='age'
									onChange={(e) => handleChange('age', e.target.value)}
									name="age"
									maxLength={15}
									placeholder={`Вкажіть вік Хвостика`}
									className={errors.age ? `${styles.input} ${styles.inputError}` : styles.input}
									type="text"
									value={formData.age}


								/>

								{errors.age && <div className={styles.errorMessage}>{errors.age}</div>}
							</div>

					</div>

					<div
						className={styles.catalog_select_container}
					>
						<label

							className={styles.catalog_select_label}>
							Розмір українською 🇺🇦:
						</label>
						<Select
							options={optionsSizeUA}
							placeholder={'Оберіть розмір'}
							value={optionsSizeUA.find((opt) => opt.value === formData.size)}
							onChange={(selectedOption) => handleChange('size', selectedOption?.value || '')}
							styles={customStyles}
						/>
					</div>
				</div>

				<div
					className={styles.catalog_inputs}
				>
					<div
						className={styles.catalog_select_container}
					>
						<label

							className={styles.catalog_select_label}>
							Стать англійською:
						</label>
						<Select
							options={optionsGenderEN}
							placeholder={'Оберіть стать'}
							value={optionsGenderEN.find((opt) => opt.value === formData.gender_en)}
							onChange={(selectedOption) => handleChange('gender', selectedOption?.value || '')}
							styles={customStyles}
						/>
					</div>

					<div
						className={styles.catalog_select_container}
					>
					{/*	<label

							className={styles.catalog_select_label}>
							Вік англійською:
						</label>
						<Select

							options={optionsAgeEN}
							placeholder={'Оберіть вік'}
							value={optionsAgeEN.find((opt) => opt.value === formData.age_en)}
							onChange={(selectedOption) => handleChange('age', selectedOption?.value || '')}
							styles={customStyles}
						/>*/}
						<label
							htmlFor="age_en"
							className={errors.age_en ? styles.labelError : styles.catalog_select_label}
						>
							Вік англійською:
						</label>
						<div className={styles.inputWrapper}>
							<input
								id='age_en'
								onChange={(e) => handleChange('age_en', e.target.value)}
								name="age_en"
								maxLength={15}
								placeholder={`Вкажіть вік Хвостика`}
								className={errors.age_en ? `${styles.input} ${styles.inputError}` : styles.input}
								type="text"
								value={formData.age_en}


							/>

							{errors.age && <div className={styles.errorMessage}>{errors.age}</div>}
						</div>
					</div>

					<div
						className={styles.catalog_select_container}
					>
						<label

							className={styles.catalog_select_label}>
							Розмір англійською:
						</label>
						<Select
							options={optionsSizeEN}
							placeholder={'Оберіть розмір'}
							value={optionsSizeEN.find((opt) => opt.value === formData.size_en)}
							onChange={(selectedOption) => handleChange('size', selectedOption?.value || '')}
							styles={customStyles}
						/>


					</div>
				</div>

				<div
					className={styles.catalog_checkbox_container}
				>
					<div className={styles.catalog_checkbox_box}>
						<input
							type="checkbox"
							id="ready_for_adoption"
							name="ready_for_adoption"
							checked={formData.ready_for_adoption}
							onChange={(e) => handleChange('ready_for_adoption', e.target.checked)}
							className={styles.catalog_checkbox}
						/>
						<label
							htmlFor="ready_for_adoption"
							className={styles.catalog_checkbox_label}
						>
							Готовність до всиновлення
						</label>
					</div>


				</div>

				<div>
					<Button
						onClick={() => console.log('завантажити фото')}
						type={'button'}
						btnClasses={'filterPC'} name={'Завантажити фото'} children={<FaUpload />} />

				</div>


			</div>


			<div className={styles.submit_buttons_container}>
				<div className={styles.submit_buttons_box}>
					<Button
						name={'Зберегти'}
						btnClasses={'primary'}
						type="submit"
						// disabled={isSubmitDisabled()}
					/>

					<Button
						name={'Відмінити'}
						btnClasses={'secondary'}
						type="button"
						onClick={handleShowFormStatus}
					/>
				</div>

			</div>
		</form>
	);
};

export default TailForm;