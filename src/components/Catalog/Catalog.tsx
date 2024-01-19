import { useState, useEffect } from 'react';
import { LandingData } from '../../pages/Landing/Landing';
import { UseQueryResult } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import Button from '../../layout/Button/Button';
import Tail from '../Tail/Tail';
import { DogCard } from '../../pages/Landing/Landing';
import styles from './Catalog.module.scss';

interface TailsProps {
	data: UseQueryResult<LandingData, Error>;
}

const Catalog: React.FC<TailsProps> = ({ data }) => {
	const [cards, setCards] = useState<DogCard[]>([]);
	const [page, setPage] = useState<number>(1);
	const [countPage, setCountPage] = useState<number>(1);
	const cardsInPage = 12;
	const { data: tails, isPending, isError, error } = data;
	const { t } = useTranslation();

	useEffect(() => {
		if (tails) {
			setCards(tails.dog_cards);
		}
	}, [tails]);

	useEffect(() => {
		setCountPage(Math.ceil(cards.length / cardsInPage))
	}, [cards, cardsInPage]);
	
	if (isPending) {
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
			</div>
		);
	}

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
		<section
			className={styles.catalog}
		>
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
						disabled
						onClick={() => {}}
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
								htmlFor="sex"
								className={styles.catalog_select_label}
							>
								{t('catalog.filter_sex_label')}:
							</label>
							<select
								id='sex'
								value=""
								onChange={() => {}}
								className={styles.catalog_select}
							>
								<option
									value=""
									disabled
								>
									{t('catalog.filter_sex_placeholder')}
								</option>
								<option
									value={t('catalog.filter_sex_male')}
								>
									{t('catalog.filter_sex_male')}
								</option>
								<option
									value={t('catalog.filter_sex_female')}
								>
									{t('catalog.filter_sex_female')}
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
								value=""
								onChange={() => {}}
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
								value=""
								onChange={() => {}}
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
							id="myCheckbox"
							name="myCheckbox"
							className={styles.catalog_checkbox}
						/>
						<label
							htmlFor="myCheckbox"
							className={styles.catalog_checkbox_label}
						>
							{t('catalog.filter_checkbox')}
						</label>
					</div>
				</div>
				<div
					className={styles.catalog_list}
				>
					{cards.slice((cardsInPage * page) - cardsInPage, cardsInPage * page).map((tail) => (
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
