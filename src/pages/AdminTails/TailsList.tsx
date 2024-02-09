import * as React from 'react';
import { FaTrash, FaUpload } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import ArrowIconUp from '../../assets/dropdown_arrow_up.svg';
import ArrowIconDown from '../../assets/dropdown_arrow_down.svg';
import { UseQueryResult } from '@tanstack/react-query';
import { AdminTailsData, TailsListData } from './AdminTails';
import styles from '../../pages/AdminTails/TailsList.module.scss';
import Tail from '../../components/Tail/Tail';

interface TailsListProps {
	data: UseQueryResult<AdminTailsData, Error>;
}

interface CustomStyles {
	control?: (provided: any, state: any) => any;
	dropdownIndicator?: (provided: any) => any;
	indicatorSeparator?: () => any;
	menu?: (provided: any) => any;
	option?: (provided: any) => any;
}


const TailsList: React.FC<TailsListProps> = ({ data }) => {
	const [cards, setCards] = useState<TailsListData[]>([]);
	const [page, setPage] = useState<number>(1);
	const [countPage, setCountPage] = useState<number>(1);
	const cardsInPage = 6;
	const { data: tails, isPending, isError } = data;


	useEffect(() => {
		if (tails) {
			setCards(tails);
		}

	}, [tails]);

	useEffect(() => {
		setCountPage(Math.ceil(cards.length / cardsInPage));
	}, [cards, cardsInPage]);


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
		<section>
			here tails
			{isPending ? (
					<div className={styles.container}>
						<div className={styles.loading}></div>
					</div>
				)
				: isError ? (
						<div className={styles.container}>
							<div className={styles.alert}>
							Щось пішло не так. Дані не завантажено.
								</div>

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

										<div className={styles.btnContainer}>
											<div className={styles.logoActions}>
												<FaTrash className={styles.deleteIcon} />
											</div>

											<div className={styles.logoActions}>
												edit
											</div>
										</div>

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

		</section>
	);
};

export default TailsList;