import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AdminPartners.module.scss';
import { useQuery } from '@tanstack/react-query';
import {  FaRegPlusSquare, FaTrash } from 'react-icons/fa';
import {
	Loader,
	ErrorAlert,
} from '../../components/CommonUI/LoaderAndError/LoaderAndError';
import { requestAdminPage } from '../../services/adminPartners';
import { useMutation, useQueryClient } from '@tanstack/react-query';

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
}

const AdminPartners: React.FC = () => {
	//get items
	const fetchDataQuery = useQuery<Partner[]>({
		queryKey: ['partners'],
		queryFn: () => requestAdminPage('GET', '/partners'),
	});

	const { data: partners, isPending, isError, error } = fetchDataQuery;
	//delete item
	const queryClient = useQueryClient();
	const deletePartnerMutation = useMutation({
		mutationFn: (id: string) =>
			requestAdminPage('DELETE', `/partners/${id}`),
		onSuccess: () => {
			console.log('Delete partner successful!');
			queryClient.invalidateQueries({ queryKey: ['partners'] });
		},
		onError: (error) => {
			console.error('Delete partner failed!', error);
		},
	});
	const handleDeleteClick = (id: string) => {
		deletePartnerMutation.mutate(id);
	};

	console.log(partners);

	if (isPending) {
		return <Loader backgroundColor='#dbdbdb'/>;
	}

	if (isError) {
		return <ErrorAlert errorMessage={error?.message} backgroundColor='#dbdbdb'/>;
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
				{partners?.map((partner) => (
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
		</div>
	);
};

export default AdminPartners;
