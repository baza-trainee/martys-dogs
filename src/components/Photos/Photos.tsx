import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FetchAboutResult } from '../../pages/About/About';
import { UseQueryResult } from '@tanstack/react-query';
import styles from './Photos.module.scss';
import { useTranslation } from 'react-i18next';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

interface Pagination {
	el: string;
	clickable: boolean;
	bulletClass: string;
	renderBullet: (index: number, className: string) => string;
}

const breakpoints = {
	1920: {
		slidesPerView: 4,
		slidesPerGroup: 1,
	},
	1280: {
		slidesPerView: 3,
		slidesPerGroup: 2,
	},
	768: {
		slidesPerView: 2,
		slidesPerGroup: 2,
	},
	320: {
		slidesPerView: 1,
		slidesPerGroup: 1,
	},
};

const numbers = window.innerWidth > 767 ? 8 : 3;

interface PhotosProps {
	data: UseQueryResult<FetchAboutResult, Error>;
}

const Photos: React.FC<PhotosProps> = ({ data }) => {
	const { t } = useTranslation();
	const { data: photos, isPending, isError, error } = data;
	const images = photos?.about_data[0].images;

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

	const pagination: Pagination = {
		el: '.swiper-pagination',
		clickable: true,
		bulletClass: 'swiper-pagination-bullet',
		renderBullet: (index, className) => {
			return `<span class="${className}">${index + 1}</span>`;
		},
	};

	return (
		<section className={styles.photos}>
			<h2 className={styles.title}>{t('photos.shelter')}</h2>
			<Swiper
				breakpoints={breakpoints}
				spaceBetween={20}
				loop={false}
				speed={1000}
				effect={'fade'}
				pagination={pagination}
				navigation={{
					nextEl: '.next',
					prevEl: '.prev',
				}}
				modules={[Pagination, Navigation]}
			>
				{images?.slice(0, numbers).map((image) => (
					<SwiperSlide key={image.id}>
						<div>
							<img
								src={image.url}
								alt={image.name}
								className={styles.image}
							/>
						</div>
					</SwiperSlide>
				))}
				<div className='navigationContainer'>
					<div className='prev'>
						<FaAngleLeft />
					</div>
					<div className='swiper-pagination'></div>
					<div className='next'>
						<FaAngleRight />
					</div>
				</div>
			</Swiper>
		</section>
	);
};

export default Photos;
