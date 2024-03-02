import * as React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import { UseQueryResult } from '@tanstack/react-query';
import { AdminTailsData } from './AdminTails';
import styles from '../../pages/AdminTails/TailsList.module.scss';
import Tail from '../../components/Tail/Tail';
import Button from '../../layout/Button/Button';

interface TailsListProps {
	data: UseQueryResult<AdminTailsData, Error>;
	changeShowForm: (a: boolean, b: string, c: number) => void;
}


const TailsList: React.FC<TailsListProps> = ({ cards, isPending, isError, changeShowForm }) => {
	const [page, setPage] = useState<number>(1);
	const [countPage, setCountPage] = useState<number>(1);
	const cardsInPage = 6;

	useEffect(() => {

		setCountPage(Math.ceil(cards?.length / cardsInPage));
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

const handleEdit = (id) => {
	changeShowForm(true, "edit", id);
};

	const handleDelete = () => {
		console.log('Delete');

	};


	return (
		<section>

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
										<Tail disabled={true}
											{...tail}
										/>

										<div className={styles.btnContainer}>
											<div className={styles.btnBox}>
												<Button
													onClick={handleDelete}
													type={'button'}
													btnClasses={'delete'}  children={<FaTrash  className={styles.deleteIcon}/>}/>
											</div>

											<div className={styles.btnBox}>
												<Button
													onClick={() => handleEdit(tail.id)}
													type={'button'}

													btnClasses={'primary'}  children={<FaEdit />}/>
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