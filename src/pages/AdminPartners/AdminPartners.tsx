import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaTrash, FaEdit, FaRegPlusSquare } from 'react-icons/fa';
import Logo1Image from '../../assets/partners_about/PurinaLogo.svg';
import Logo2Image from '../../assets/partners_about/RoyalCanineLogo.svg';
import styles from './AdminPartners.module.scss';

interface Logo {
	id: number;
	src: string;
	alt?: string;
}

const logos: Logo[] = [
	{ id: 1, src: Logo1Image, alt: 'Пуріна' },
	{ id: 2, src: Logo1Image, alt: 'Пуріна' },
	{ id: 3, src: Logo2Image, alt: 'Роял Канін' },
	{ id: 4, src: Logo1Image },
	{ id: 5, src: Logo2Image },
	{ id: 6, src: Logo1Image },
	{ id: 7, src: Logo2Image },
	{ id: 8, src: Logo1Image },
	{ id: 9, src: Logo2Image },
	{ id: 10, src: Logo1Image },
	{ id: 11, src: Logo2Image },
	{ id: 12, src: Logo1Image },
	{ id: 13, src: Logo2Image },
	{ id: 14, src: Logo1Image },
	{ id: 15, src: Logo2Image },
];

const AdminPartners: React.FC = () => {
	const itemsPerPage = 5;
	const [visibleLogos, setVisibleLogos] = useState(
		logos.slice(0, itemsPerPage),
	);

	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);

		const filteredLogos = logos.filter(
			(logo) =>
				logo.alt?.toLowerCase().includes(term) ||
				logo.id.toString().includes(term),
		);

		setVisibleLogos(filteredLogos.slice(0, itemsPerPage));
	};

	const loadMore = () => {
		const currentLength = visibleLogos.length;
		const nextLogos = logos.slice(
			currentLength,
			currentLength + itemsPerPage,
		);
		setVisibleLogos((prevLogos) => [...prevLogos, ...nextLogos]);
	};

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h2 className={styles.title}>Лого партнерів</h2>
			</div>

			<div className={styles.buttonsWrapper}>
				<Link to='/admin/partner_add' className={styles.link}>
					<button className={styles.addButton}>
						<FaRegPlusSquare />
						Додати партнера{' '}
					</button>
				</Link>
				<div className={styles.searchBox}>
					<input
						className={styles.searchInput}
						type='text'
						name=''
						placeholder='Шукати...'
						value={searchTerm}
						onChange={handleSearch}
					/>
					<button className={styles.searchButton}>
						<i className={styles.serchIcon}>
							<FaSearch />
						</i>
					</button>
				</div>
			</div>
			<div className={styles.logoContainer}>
				{visibleLogos.map((logo) => (
					<div key={logo.id} className={styles.logo}>
						<img src={logo.src} alt={`Logo ${logo.id}`} />
						<div className={styles.logoActions}>
							<Link
								to='/admin/partner_edit'
								className={styles.link}
							>
								<FaEdit className={styles.editIcon} />
							</Link>
							<FaTrash className={styles.deleteIcon} />
						</div>
					</div>
				))}
			</div>

			{visibleLogos.length < logos.length && (
				<div className={styles.loadMore}>
					<button onClick={loadMore} className={styles.loadButton}>
						Більше партнерів
					</button>
				</div>
			)}
		</div>
	);
};

export default AdminPartners;
