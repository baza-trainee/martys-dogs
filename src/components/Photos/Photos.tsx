import 'swiper/css';
import 'swiper/css/navigation';

import { FC } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { UseQueryResult } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import styles from './Photos.module.scss';
import { AboutData } from '../../pages/About/About';
import Loader, { ErrorAlert } from '../CommonUI/LoaderAndError/LoaderAndError'

interface Pagination {
	el: string;
	clickable: boolean;
	bulletClass: string;
	renderBullet: (index: number, className: string) => string;
}

const breakpoints = {
	1920: {
		slidesPerView: 3,
		slidesPerGroup: 3,
	},
	1440: {
		slidesPerView: 3,
		slidesPerGroup: 3,
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

interface PhotosProps {
	data: UseQueryResult<AboutData[], Error>;
}

const Photos: FC<PhotosProps> = ({ data }) => {
	const { t } = useTranslation();
	const { data: photos, isPending, isError, error } = data;
	const images = photos?.[0]?.images;

	if (isPending) {
		return <Loader backgroundColor={'#ebf5fb'} />;
	}

	if (isError) {
		return (
			<ErrorAlert
				errorMessage={error.message}
				backgroundColor={'#ebf5fb'}
			/>
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
			{photos?.[0]?.images.length === 0 && (
				<h4>{t('photos.noPhotos')}</h4>
			)}
			{photos?.[0]?.images.length > 0 && (
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
					{images?.map((image) => (
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
			)}
		</section>
	);
};

export default Photos;
