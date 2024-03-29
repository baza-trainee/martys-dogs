import { FC, useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

import Button from '../../layout/Button/Button';
import Tail from '../../components/Tail/Tail';
import styles from '../../pages/AdminTails/TailsList.module.scss';
import Loader, {
	ErrorAlert,
	MiniErrorAlert,
	MiniLoader,
} from '../../components/CommonUI/LoaderAndError/LoaderAndError';
import { AdminTailsData } from './AdminTails';

interface TailsListProps {
	cards: AdminTailsData;
	isPending: boolean;
	isError: boolean;
	changeShowForm: (a: boolean, b: string, c: number) => void;
	handleDeleteTail: (id: number) => void;
	showLoader: boolean;
	showError: string;
	dogId: number | null;
	formType: string;
}

const TailsList: FC<TailsListProps> = ({
	cards,
	isPending,
	isError,
	changeShowForm,
	handleDeleteTail,
	showLoader,
	showError,
	dogId,
	formType,
}) => {
	const [page, setPage] = useState<number>(1);
	const [countPage, setCountPage] = useState<number>(1);
	const cardsInPage = 8;

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

	const handleEditTail = (id: number) => {
		changeShowForm(true, 'edit', id);
	};

	return (
		<section>
			{isPending ? (
				<Loader backgroundColor={'#fff'} />
			) : isError ? (
				<ErrorAlert
					errorMessage={
						'Щось пішло не так. Дані не завантажено. Спробуйте пізніше.'
					}
					backgroundColor={'#fff'}
				/>
			) : (
				<>
					<div className={styles.catalog_list}>
						{cards
							?.slice(
								cardsInPage * page - cardsInPage,
								cardsInPage * page,
							)
							.map((tail: any) => (
								<div
									key={tail.id}
									className={styles.catalog_list_card}
								>
									<Tail disabled={true} {...tail} />
									{formType === 'delete' &&
									showLoader &&
									dogId === tail.id ? (
										<MiniLoader />
									) : null}
									{formType === 'delete' &&
									showError &&
									dogId === tail.id ? (
										<MiniErrorAlert
											errorMessage={showError}
											backgroundColor='rgba(255, 0, 0, 0.3)'
										/>
									) : null}
									<div className={styles.btnContainer}>
										<div className={styles.btnBox}>
											<Button
												onClick={() =>
													tail.id !== undefined &&
													handleDeleteTail(tail.id)
												}
												type={'button'}
												btnClasses={'delete'}
												children={
													<FaTrash
														className={
															styles.deleteIcon
														}
													/>
												}
											/>
										</div>

										<div className={styles.btnBox}>
											<Button
												onClick={() =>
													handleEditTail(tail.id)
												}
												type={'button'}
												btnClasses={'primary'}
												children={<FaEdit />}
											/>
										</div>
									</div>
								</div>
							))}
					</div>

					<div className={styles.catalog_pagination}>
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
								className={`${styles.catalog_pagination_btn} ${
									page === index + 1 ? styles.active : ''
								}`}
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
			)}
		</section>
	);
};

export default TailsList;
