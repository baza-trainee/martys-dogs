import { useEffect, useState } from 'react';
import Select from 'react-select';
import Button from '../../layout/Button/Button';
import { DogCard } from '../../pages/Landing/Landing';
import { OurTailsData } from '../../pages/OurTails/OurTails';
import Tail from '../Tail/Tail';
import { UseQueryResult } from '@tanstack/react-query';
import styles from './Catalog.module.scss';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import ArrowIconDown from '../../assets/dropdown_arrow_down.svg';
import ArrowIconUp from '../../assets/dropdown_arrow_up.svg';

interface CatalogProps {
	data: UseQueryResult<OurTailsData, Error>;
	changeTerms: (newQueryString: string) => void;
}

interface OptionType {
	value: string;
	label: string;
}

type FilterParams = {
	age?: string;
	size?: string;
	gender?: string;
	ready_for_adoption?: boolean;
} & { [key: string]: string | boolean };

interface CustomStyles {
	control?: (provided: any, state: any) => any;
	dropdownIndicator?: (provided: any) => any;
	indicatorSeparator?: () => any;
	menu?: (provided: any) => any;
	option?: (provided: any) => any;
}

const Catalog: React.FC<CatalogProps> = ({ data, changeTerms }) => {
	const [cards, setCards] = useState<DogCard[]>([]);
	const [page, setPage] = useState<number>(1);
	const [countPage, setCountPage] = useState<number>(1);
	const cardsInPage = 12;
	const { data: catalog, isPending, isError } = data;
	const { t } = useTranslation();
	const [selectedFilters, setSelectedFilters] = useState<FilterParams>({
		age: '',
		size: '',
		gender: '',
		ready_for_adoption: false,
	});

	const newQueryString = `?age=${selectedFilters.age?.toLowerCase()}&size=${selectedFilters.size?.toLowerCase()}&gender=${selectedFilters.gender?.toLowerCase()}&ready_for_adoption=${selectedFilters.ready_for_adoption}`;

	const optionsGender: OptionType[] = [
		{ value: t('catalog.filter_gender_label'), label: t('catalog.filter_gender_label') },
		{ value: t('catalog.filter_gender_male'), label: t('catalog.filter_gender_male') },
		{ value: t('catalog.filter_gender_female'), label: t('catalog.filter_gender_female') },
	];

	const optionsAge: OptionType[] = [
		{ value: t('catalog.filter_age_puppy'), label: t('catalog.filter_age_puppy') },
		{ value: t('catalog.filter_age_young_dog'), label: t('catalog.filter_age_young_dog') },
		{ value: t('catalog.filter_age_adult'), label: t('catalog.filter_age_adult') },
	];

	const optionsSize: OptionType[] = [
		{ value: t('catalog.filter_size_small'), label: t('catalog.filter_size_small') },
		{ value: t('catalog.filter_size_medium'), label: t('catalog.filter_size_medium') },
		{ value: t('catalog.filter_size_large'), label: t('catalog.filter_size_large') },
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

	useEffect(() => {
		if (catalog) {
			setCards(catalog.Cards);
		}
	}, [catalog]);


	useEffect(() => {
		setCountPage(Math.ceil(cards.length / cardsInPage));
	}, [cards, cardsInPage]);


	const handleChange = (field: keyof FilterParams, value: string | boolean) => {

// console.log(Object.values(selectedFilters));


	/*	if (selectedFilters) {
			for (let filterValue in selectedFilters) {
				console.log(value);
				if (filterValue === filterValue) {
					setSelectedFilters((prevFilters) => ({
						...prevFilters,
						[field]: '',

					}));
					// console.log(filterValue);
				} else {
					setSelectedFilters((prevFilters) => ({
						...prevFilters,
						[field]: value,
					}));

				}
			}
		}
*/

		if(typeof value === 'string' && value.toLowerCase() === field) {
			console.log( value.toLowerCase());
			setSelectedFilters((prevFilters) => ({
				...prevFilters,
				[field]: '',
			}));
		} else {
			setSelectedFilters((prevFilters) => ({
				...prevFilters,
				[field]: value,
			}));

		}


		let keysArr = Object.values(selectedFilters);
		keysArr.map((key) => {
			console.log(key);
			if(typeof value === 'string' && key === value.toLowerCase()) {
				console.log(`key ${key} equal value ${value}`)
			}
		})
	};


	const handleFilterSubmit = async () => {

		changeTerms(newQueryString);
		console.log(selectedFilters);
		console.log(newQueryString);

	};


	const goToPrevPage = () => {
		if (page > 1) {
			setPage(page - 1);
		}
	};

	const goToNextPage = () => {
		if (page < countPage) {
			setPage(page + 1);
		}
	};


	return (

		<section>
			<div
				className={styles.catalog_container}
			>
				<div
					className={styles.catalog_header}
				>
					<h2
						className={styles.catalog_header_title}
					>
						{t('catalog.header_title')}
					</h2>
					<Button
						name={t('catalog.header_button')}
						btnClasses={'filterPC'}
						type="submit"
						onClick={handleFilterSubmit}
					/>
				</div>
				<div
					className={styles.catalog_filter}
				>
					<div
						className={styles.catalog_inputs}
					>
						<div
							className={styles.catalog_select_container}
						>
							<label

								className={styles.catalog_select_label}>
								{t('catalog.filter_gender_label')}:
							</label>
							<Select

								options={optionsGender}
								placeholder={t('catalog.filter_gender_placeholder')}
								value={optionsGender.find((opt) => opt.value === selectedFilters.gender)}
								onChange={(selectedOption) => handleChange('gender', selectedOption?.value || '')}
								styles={customStyles}
							/>
						</div>

						<div
							className={styles.catalog_select_container}
						>
							<label

								className={styles.catalog_select_label}>
								{t('catalog.filter_age_label')}:
							</label>
							<Select

								options={optionsAge}
								placeholder={t('catalog.filter_age_placeholder')}
								value={optionsAge.find((opt) => opt.value === selectedFilters.age)}
								onChange={(selectedOption) => handleChange('age', selectedOption?.value || '')}
								styles={customStyles}
							/>
						</div>

						<div
							className={styles.catalog_select_container}
						>
							<label

								className={styles.catalog_select_label}>
								{t('catalog.filter_size_label')}:
							</label>
							<Select
								options={optionsSize}
								placeholder={t('catalog.filter_size_placeholder')}
								value={optionsSize.find((opt) => opt.value === selectedFilters.size)}
								onChange={(selectedOption) => handleChange('size', selectedOption?.value || '')}
								styles={customStyles}
							/>
						</div>
					</div>
					<div
						className={styles.catalog_checkbox_container}
					>
						<input
							type="checkbox"
							id="ready_for_adoption"
							name="ready_for_adoption"
							checked={selectedFilters.ready_for_adoption}
							onChange={(e) => handleChange('ready_for_adoption', e.target.checked)}
							className={styles.catalog_checkbox}
						/>
						<label
							htmlFor="ready_for_adoption"
							className={styles.catalog_checkbox_label}
						>
							{t('catalog.filter_checkbox')}
						</label>
					</div>
					<Button
						name={t('catalog.header_button')}
						btnClasses={'filterMob'}
						type="submit"
						onClick={handleFilterSubmit}
					/>
				</div>
				{isPending ? (
						<div className={styles.container}>
							<div className={styles.loading}></div>
						</div>
					)
					: isError ? (
							<div className={styles.container}>
								<div className={styles.alert}>
									{t('catalog.filter_error')}</div>
							</div>
						)
						: (

							<>
								<div
									className={styles.catalog_list}
								>

									{cards?.slice((cardsInPage * page) - cardsInPage, cardsInPage * page).map((tail) => (


										<div
											key={tail.id}
											className={styles.catalog_list_card}
										>
											<Tail
												{...tail}
											/>
										</div>))}
								</div>

								<div
									className={styles.catalog_pagination}
								>
									<button
										onClick={goToPrevPage}
										disabled={page === 1}
										className={styles.catalog_pagination_btn}
									>
										&lt;
									</button>
									{Array.from({ length: countPage }, (_, index) => (
										<button
											key={index + 1}
											onClick={() => setPage(index + 1)}
											disabled={page === index + 1}
											className={`${styles.catalog_pagination_btn} ${page === index + 1 ? styles.active : ''}`}
										>
											{index + 1}
										</button>
									))}
									<button
										onClick={goToNextPage}
										disabled={page === countPage}
										className={styles.catalog_pagination_btn}
									>
										&gt;
									</button>
								</div>
							</>
						)
				}
			</div>
		</section>
	);
};

export default Catalog;


