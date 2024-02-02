import { useEffect, useState } from 'react';
import Select, { StylesConfig } from 'react-select';
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

/*interface TailsProps {
	data: UseQueryResult<OurTailsData, Error>;
	changeTerms: (newQueryString: string) => void;
interface CustomStyles extends StylesConfig {
  control?: (provided: any, state: any) => any;
}*/

type FilterParams = {
	age?: string;
	size?: string;
	gender?: string;
	ready_for_adoption?: boolean;
} & { [key: string]: string | boolean };

// const Catalog: React.FC<TailsProps> = ({ data, changeTerms }) => {
const Catalog: React.FC<CatalogProps> = ({ data, changeTerms }) => {
	const [cards, setCards] = useState<DogCard[]>([]);
	const [page, setPage] = useState<number>(1);
	const [countPage, setCountPage] = useState<number>(1);
	const cardsInPage = 12;
	const { data: catalog, isPending, isError, error } = data;
	const { t } = useTranslation();
	const [selectedFilters, setSelectedFilters] = useState<FilterParams>({
		age: '',
		size: '',
		gender: '',
		ready_for_adoption: false,
	});

	const newQueryString = `?age=${selectedFilters.age?.toLowerCase()}&size=${selectedFilters.size?.toLowerCase()}&gender=${selectedFilters.gender?.toLowerCase()}&ready_for_adoption=${selectedFilters.ready_for_adoption}`;

	const optionsSex: OptionType[] = [
		{ value: 'boy', label: t('catalog.filter_sex_male') },
		{ value: 'girl', label: t('catalog.filter_sex_female') },
	];

	const optionsAge: OptionType[] = [
		{ value: 'puppy', label: t('catalog.filter_age_puppy') },
		{ value: 'young_dog', label: t('catalog.filter_age_young_dog') },
		{ value: 'adult', label: t('catalog.filter_age_adult') }
	];

	const optionsSize: OptionType[] = [
		{ value: 'small', label: t('catalog.filter_size_small') },
		{ value: 'medium', label: t('catalog.filter_size_medium') },
		{ value: 'large', label: t('catalog.filter_size_large') }
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
/*	useEffect(() => {
		if (tails) {
			setCards(tails.dog_cards);
		}
	}, [tails]);*/

	useEffect(() => {
		setCountPage(Math.ceil(cards.length / cardsInPage))
	}, [cards, cardsInPage]);


	const handleChange = (field: keyof FilterParams, value: string | boolean) => {
		setSelectedFilters((prevFilters) => ({
			...prevFilters,
			[field]: value,
		}));
	};


	const handleFilterSubmit = async () => {


		//Anton
		changeTerms(newQueryString);
		console.log(selectedFilters);
		console.log(newQueryString);
		// setQueryString(newQueryString);


		// Використання нового значення queryKey для автоматичного оновлення даних
		/*	const { data: filteredTails, isError, error } = await queryClient.fetchQuery(['tails', { exact: false, queryString }]);

			console.log(selectedFilters);
			console.log(newQueryString);
			console.log(filteredTails);*/
		/*
				try {
					// Використовуйте новий синтаксис fetchQuery
					const filteredTails = await queryClient.fetchQuery(
						{
							queryKey: ['tails',   { exact: false, queryString: newQueryString } ],
							queryFn: fetchCatalog,
						}

					);

					// ???? slice don't work if setCard

					console.log(selectedFilters);
					console.log(newQueryString);
					console.log(filteredTails);

				} catch (error) {
					console.error('Error while fetching filtered tails:', error);
				}
		*/
		//Without try to invalidate data,clear cache even if it will be error
		/*await queryClient.invalidateQueries(['tails']);

		try {
			const filteredTails = await queryClient.fetchQuery({
				queryKey: ['tails', { filter: newQueryString }],
				queryFn: () => fetchCatalog({ queryString: newQueryString }),
			});

			console.log(selectedFilters);
			console.log(newQueryString);
			console.log(filteredTails);
		} catch (error) {
			console.error('Error while fetching filtered tails:', error);
		}*/

	};

//	повернути верстку , щоб кнопки фільтрації були, і просто меседж
	const handleResetFilters = () => {
		setSelectedFilters({
			age: '',
			size: '',
			gender: '',
			ready_for_adoption: false,
		});
		setPage(1);
		changeTerms('');
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
			className={styles.catalog}
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
						{/*Disabled logic!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
						disabled
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
								htmlFor="gender"
								className={styles.catalog_select_label}
							>
								{t('catalog.filter_gender_label')}:
							</label>
							{/*<select
								id='gender'
								value={selectedFilters.gender}
								onChange={(e) => handleChange('gender', e.target.value)}
								className={styles.catalog_select}
							>
								<option
									value=""
									disabled
								>
									{t('catalog.filter_gender_placeholder')}
								</option>
								<option
									value={t('catalog.filter_gender_male')}
								>
									{t('catalog.filter_gender_male')}
								</option>
								<option
									value={t('catalog.filter_gender_female')}
								>
									{t('catalog.filter_gender_female')}
								</option>
							</select>*/}
							<Select
								options={optionsSex}
								placeholder={t('catalog.filter_sex_placeholder')}
								onChange={() => {}}
								styles={customStyles}
							/>
						</div>
						<div
							className={styles.catalog_select_container}
						>
							<label
								htmlFor="age"
								className={styles.catalog_select_label}
							>
								{t('catalog.filter_age_label')}:
							</label>
							<Select
								options={optionsAge}
								placeholder={t('catalog.filter_age_placeholder')}
								onChange={() => {}}
								styles={customStyles}
							/>

						</div>
						<div
							className={styles.catalog_select_container}
						>
							<label
								htmlFor="age"
								className={styles.catalog_select_label}
							>
								{t('catalog.filter_age_label')}:
							</label>
							{/*<select
								id='age'
								value={selectedFilters.age}
								onChange={(e) => handleChange('age', e.target.value)}
								className={styles.catalog_select}
							>
								<option
									value=""
									disabled
								>
									{t('catalog.filter_age_placeholder')}
								</option>
								<option
									value={t('catalog.filter_age_puppy')}
								>
									{t('catalog.filter_age_puppy')}
								</option>
								<option
									value={t('catalog.filter_age_adult')}
								>
									{t('catalog.filter_age_adult')}
								</option>
								<option
									value={t('catalog.filter_age_old')}
								>
									{t('catalog.filter_age_old')}
								</option>
							</select>*/}
							<Select
								options={optionsAge}
								placeholder={t('catalog.filter_age_placeholder')}
								onChange={() => {}}
								styles={customStyles}
							/>
						</div>
						<div
							className={styles.catalog_select_container}
						>
							<label
								htmlFor="size"
								className={styles.catalog_select_label}
							>
								{t('catalog.filter_size_label')}:
							</label>
						{/*	<select
								id='size'
								value={selectedFilters.size}
								onChange={(e) => handleChange('size', e.target.value)}
								className={styles.catalog_select}
							>
								<option
									value=""
									disabled
								>
									{t('catalog.filter_size_placeholder')}
								</option>
								<option
									value={t('catalog.filter_size_small')}
								>
									{t('catalog.filter_size_small')}
								</option>
								<option
									value={t('catalog.filter_size_medium')}
								>
									{t('catalog.filter_size_medium')}
								</option>
								<option
									value={t('catalog.filter_size_large')}
								>
									{t('catalog.filter_size_large')}
								</option>
							</select>*/}
							<Select
								options={optionsSize}
								placeholder={t('catalog.filter_size_placeholder')}
								onChange={() => {}}
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
						{/*Disabled logic!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
						disabled
						onClick={handleFilterSubmit}
					/>
				</div>
				<div
					className={styles.catalog_list}
				>
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
							: cards?.slice((cardsInPage * page) - cardsInPage, cardsInPage * page).map((tail) => (
								<div
									key={tail.id}
									className={styles.catalog_list_card}
								>
									<Tail
										{...tail}
									/>
								</div>
							))}
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
			</div>
		</section>
	);
};

export default Catalog;


