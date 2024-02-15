import * as React from 'react';
import styles from '../../pages/AdminTails/TailForm.module.scss';
import Select from 'react-select';
import Button from '../../layout/Button/Button';
import { useEffect, useState } from 'react';
import ArrowIconUp from '../../assets/dropdown_arrow_up.svg';
import ArrowIconDown from '../../assets/dropdown_arrow_down.svg';

interface OptionType {
	value: string;
	label: string;
}

type FormData = {
	name?: string;
	name_en?: string;
	ready_for_adoption?: boolean;
	gender?: string;
	gender_en?: string;
	age?: string;
	age_en?: string;
	sterilization?: boolean;
	vaccination_parasite_treatment?: boolean;
	size?: string;
	size_en?: string;
	description?: string;
	description_en?: string;
	// photo: Photo; ?????
} & { [key: string]: string | boolean };

interface CustomStyles {
	control?: (provided: any, state: any) => any;
	dropdownIndicator?: (provided: any) => any;
	indicatorSeparator?: () => any;
	menu?: (provided: any) => any;
	option?: (provided: any) => any;
}

interface TailFormProps {
	changeShowForm: (b: boolean) => void;
}
const TailForm: React.FC<TailFormProps> = ({changeShowForm}) => {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		name_en: '',
		ready_for_adoption: false,
		gender: '',
		gender_en: '',
		age: '',
		age_en: '',
		sterilization: false,
		vaccination_parasite_treatment: false,
		size: '',
		size_en: '',
		description: '',
		description_en: '',
	});

	const [touched, setTouched] = useState<Record<string, boolean>>({
		name: false,
		name_en: false,
		gender: false,
		gender_en: false,
		age: false,
		age_en: false,
		size: false,
		size_en: false,
		description: false,
		description_en: false,
	});
	const [errors, setErrors] = useState<Record<string, string>>({});

	const nameRegex = /^[A-Za-zА-Яа-яҐґЄєІіЇї\s'`’ʼ-]*$/;

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
		changeShowForm(false);
	};
const handleShowFormStatus = () => {
	changeShowForm(false);
	console.log('Закрити форму редагування')
}
/*	const isSubmitDisabled = () => {
		return !!Object.values(errors).find((error) => error !== '') || !formData.name;
	};*/

	const optionsGenderUA: OptionType[] = [
		{ value: 'хлопчик', label: 'Хлопчик' },
		{ value: 'дівчинка', label: 'Дівчинка' },
	];

	const optionsAgeUA: OptionType[] = [
		{ value: 'щеня', label: 'Щеня' },
		{ value: 'молода собака', label: 'Молода собака' },
		{ value: 'доросла собака', label: 'Доросла собака' },
	];

	const optionsSizeUA: OptionType[] = [
		{ value: 'маленький', label: 'Маленький' },
		{ value: 'середній', label: 'Середній' },
		{ value: 'великий', label: 'Великий' },
	];


	const optionsGenderEN: OptionType[] = [
		{ value: 'boy', label: 'Boy' },
		{ value: 'girl', label: 'Girl' },
	];

	const optionsAgeEN: OptionType[] = [
		{ value: 'puppy', label: 'Puppy' },
		{ value: 'young dog', label: 'Young dog' },
		{ value: 'adult dog', label: 'Adult dog' },
	];

	const optionsSizeEN: OptionType[] = [
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
							   className={ styles.catalog_select_label}>
							Опис українською 🇺🇦:
						</label>
						<div className={styles.inputWrapper}>
						<textarea id='description'
							   onChange={(e) => handleChange('description', e.target.value)}
							   placeholder={`Введіть опис Хвостика`}
							   className={errors.name ? `${styles.input} ${styles.inputError}` : styles.input}
							   type="text"
							   value={formData.description}/>
							{errors.name && <div className={styles.errorMessage}>{errors.name}</div>}
						</div>
					</div>
				</div>

				<div className={styles.catalog_inputs}>

					<div className={styles.inputBoxName}>
						<label htmlFor="name_en"
							   className={ styles.catalog_select_label}
						>
							Ім'я англійською:
						</label>
						<div className={styles.inputWrapper}>
						<input id='name_en' onChange={(e) => handleChange('name_en', e.target.value)}
							   placeholder={`Вкажіть ім'я Хвостика`}
							   className={errors.name ? `${styles.input} ${styles.inputError}` : styles.input}
							   type="text"
							   value={formData.name_en}/>
							{errors.name && <div className={styles.errorMessage}>{errors.name}</div>}
						</div>
					</div>

					<div className={styles.inputBox} >
						<label htmlFor="description_en"
							   className={ styles.catalog_select_label}>
							Опис англійською:
						</label>
						<div className={styles.inputWrapper}>
						<textarea id='description_en'
							   onChange={(e) => handleChange('description_en', e.target.value)}
							   placeholder={`Вкажіть опис Хвостика`}
							   className={errors.name ? `${styles.input} ${styles.inputError}` : styles.input}
							   type="text"
							   value={formData.description_en}/>
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
						<label

							className={styles.catalog_select_label}>
							Вік українською 🇺🇦:
						</label>
						<Select

							options={optionsAgeUA}
							placeholder={'Оберіть вік'}
							value={optionsAgeUA.find((opt) => opt.value === formData.age)}
							onChange={(selectedOption) => handleChange('age', selectedOption?.value || '')}
							styles={customStyles}
						/>
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
							value={optionsGenderEN.find((opt) => opt.value === formData.gender)}
							onChange={(selectedOption) => handleChange('gender', selectedOption?.value || '')}
							styles={customStyles}
						/>
					</div>

					<div
						className={styles.catalog_select_container}
					>
						<label

							className={styles.catalog_select_label}>
							Вік англійською:
						</label>
						<Select

							options={optionsAgeEN}
							placeholder={'Оберіть вік'}
							value={optionsAgeEN.find((opt) => opt.value === formData.age)}
							onChange={(selectedOption) => handleChange('age', selectedOption?.value || '')}
							styles={customStyles}
						/>
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
							value={optionsSizeEN.find((opt) => opt.value === formData.size)}
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

					<div className={styles.catalog_checkbox_box}>
						<input
							type="checkbox"
							id="sterilization"
							name="sterilization"
							checked={formData.sterilization}
							onChange={(e) => handleChange('sterilization', e.target.checked)}
							className={styles.catalog_checkbox}
						/>
						<label
							htmlFor="sterilization"
							className={styles.catalog_checkbox_label}
						>
							Стерилізація
						</label>
					</div>

					<div className={styles.catalog_checkbox_box}>
						<input
							type="checkbox"
							id="vaccination_parasite_treatment"
							name="vaccination_parasite_treatment"
							checked={formData.vaccination_parasite_treatment}
							onChange={(e) => handleChange('vaccination_parasite_treatment', e.target.checked)}
							className={styles.catalog_checkbox}
						/>
						<label
							htmlFor="vaccination_parasite_treatment"
							className={styles.catalog_checkbox_label}
						>
							Вакцинація/обробка від паразитів
						</label>
					</div>

				</div>

				<div>
					<h2>Завантажити фото</h2>
				</div>
				<Button
					name={'Зберегти'}
					btnClasses={'filterMob'}
					type="submit"
					// disabled={isSubmitDisabled()}
				/>
				<Button
					name={'Відмінити'}
					btnClasses={'filterMob'}
					type="button"
					onClick={handleShowFormStatus}
				/>

			</div>


			<Button
				name={'Зберегти'}
				btnClasses={'filterPC'}
				type="submit"
				// disabled={isSubmitDisabled()}
			/>

			<Button
				name={'Відмінити'}
				btnClasses={'filterPC'}
				type="button"
				onClick={handleShowFormStatus}
			/>
		</form>
	);
};

export default TailForm;