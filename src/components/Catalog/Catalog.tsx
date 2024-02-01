import { useState, useEffect } from 'react';
import { OurTailsData } from '../../pages/OurTails/OurTails' ;
import { UseQueryResult } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import Button from '../../layout/Button/Button';
import Tail from '../Tail/Tail';
import { DogCard } from '../../pages/Landing/Landing';
import styles from './Catalog.module.scss';
import * as React from 'react';

interface TailsProps {
	data: UseQueryResult<OurTailsData, Error>;
	changeTerms: (newQueryString: string) => void;
}

type FilterParams = {
	age?: string;
	size?: string;
	gender?: string;
	ready_for_adoption?: boolean;
} & { [key: string]: string | boolean };

const Catalog: React.FC<TailsProps> = ({ data, changeTerms }) => {
	const [cards, setCards] = useState<DogCard[]>([]);
	const [page, setPage] = useState<number>(1);
	const [countPage, setCountPage] = useState<number>(1);
	const cardsInPage = 12;
	const { data: tails, isPending, isError, error } = data;
	const { t } = useTranslation();
	const [selectedFilters, setSelectedFilters] = useState<FilterParams>({
		age: '',
		size: '',
		gender: '',
		ready_for_adoption: false,
	});

	const newQueryString = `?age=${selectedFilters.age?.toLowerCase()}&size=${selectedFilters.size?.toLowerCase()}&gender=${selectedFilters.gender?.toLowerCase()}&ready_for_adoption=${selectedFilters.ready_for_adoption}`;

	useEffect(() => {
		if (tails) {
			setCards(tails.Cards);
		}
	}, [tails]);


	useEffect(() => {
		setCountPage(Math.ceil(cards.length / cardsInPage));
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

	/*if (isPending) {
		return (
			<div className={styles.container}>
				<div className={styles.loading}></div>
			</div>
		);
	}


	if (isError) {
		return (
			<div className={styles.container}>
				<div className={styles.alert}>{error.message}</div>
				<button onClick={handleResetFilters}>Скинути фільтри</button>
			</div>
		);
	}*/

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
						btnClasses={'filter'}
						type="submit"
						// disabled
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
							<select
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
							</select>
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
							<select
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
							</select>
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
							<select
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
							</select>
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
							))


					}


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


