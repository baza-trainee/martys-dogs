import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './AdminPartners.module.scss';
import { useQuery } from '@tanstack/react-query';
import { FaRegPlusSquare, FaTrash, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import {
	Loader,
	ErrorAlert,
} from '../../components/CommonUI/LoaderAndError/LoaderAndError';
import { requestAdminPage } from '../../services/adminPartners';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthContext } from '../../context/useGlobalContext';

export interface LogoData {
	id: string;
	name: string;
	url: string;
	category: string;
}

export interface Partner {
	id: number;
	name: string;
	logo: LogoData;
	website: null | string;
}

const AdminPartners: React.FC = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errorAlert, setErrorAlert] = useState(false);
	const { token } = useAuthContext();
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 4;

	//get items
	const fetchDataQuery = useQuery<Partner[]>({
		queryKey: ['partners'],
		queryFn: () =>
			typeof token === 'string'
				? requestAdminPage(token, 'GET', '/partners')
				: Promise.resolve([]),
		refetchInterval: 600000,
		enabled: !!token,
	});

	const { data: partners, isPending, isError, error } = fetchDataQuery;

	//delete item
	const queryClient = useQueryClient();
	const deletePartnerMutation = useMutation({
		mutationFn: (id: string) => {
			setIsSubmitting(true);
			setErrorAlert(false);
			if (token) {
				return requestAdminPage(token, 'DELETE', `/partners/${id}`);
			} else {
				console.error('Token is null. Delete partner failed!');
				return Promise.resolve();
			}
		},
		onSuccess: () => {
			setIsSubmitting(false);
			console.log('Delete partner successful!');
			queryClient.invalidateQueries({ queryKey: ['partners'] });
		},
		onError: (error) => {
			setIsSubmitting(false);
			setErrorAlert(true);
			console.error('Delete partner failed!', error);
		},
	});

	const handleDeleteClick = (id: string) => {
		deletePartnerMutation.mutate(id);
	};

	//pagination
	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage);
	};
	const startIndex = (currentPage - 1) * pageSize;
	const endIndex = startIndex + pageSize;
	const displayedPartners = partners?.slice(startIndex, endIndex);

	if (isPending) {
		return <Loader />;
	}

	if (isError) {
		return <ErrorAlert errorMessage={error?.message} />;
	}

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Лого партнерів</h2>

			<div className={styles.buttonsWrapper}>
				<Link to='/admin/partner_add' className={styles.link}>
					<button className={styles.addButton}>
						<FaRegPlusSquare />
						Додати партнера{' '}
					</button>
				</Link>
			</div>
			<div className={styles.logoContainer}>
				{errorAlert && (
					<ErrorAlert errorMessage='Логотип не видалено. Перезавантажте, будь ласка, сторінку.' />
				)}
				{isSubmitting && <Loader />}
				{displayedPartners?.map((partner) => (
					<div key={partner.id} className={styles.logo}>
						<img src={partner.logo.url} alt={`${partner.name}`} />
						<div className={styles.logoActions}>
							<FaTrash
								key={partner.id}
								className={styles.deleteIcon}
								onClick={() =>
									handleDeleteClick(partner.id.toString())
								}
							/>
						</div>
					</div>
				))}
			</div>
			<div className={styles.pagination}>
				<button
					disabled={currentPage === 1}
					onClick={() => handlePageChange(currentPage - 1)}
				>
					<FaChevronLeft/>
				</button>
				<span> Сторінка {currentPage}</span>
				<button
					disabled={!partners || endIndex >= partners.length}
					onClick={() => handlePageChange(currentPage + 1)}
				>
					<FaChevronRight/>
				</button>
			</div>
		</div>
	);
};

export default AdminPartners;
