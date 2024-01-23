import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Tail, { TailProps } from '../Tail/Tail';

import { FaAngleRight } from 'react-icons/fa6';
import { LandingData } from '../../pages/Landing/Landing';
import { Link } from 'react-router-dom';
import { UseQueryResult } from '@tanstack/react-query';
import styles from './Tails.module.scss';
import { useTranslation } from 'react-i18next';

interface Pagination {
	clickable: boolean;
	renderBullet: (index: number, className: string) => string;
}

const breakpoints = {
	1920: {
		slidesPerView: 4,
		slidesPerGroup: 4,
	},
	1280: {
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

interface TailsProps {
	data: UseQueryResult<LandingData, Error>;
}

const Tails: React.FC<TailsProps> = ({ data }) => {
	const { t } = useTranslation();
	const { data: tails, isPending, isError, error } = data;

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
		clickable: true,
		renderBullet: (index, className) => {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
	};

	return (
		<section id='ourTails' className={styles.tails}>
			<div className={styles.title}>
				<h2>{t('tails.title')}</h2>
				<Link to='tails' className={styles.link}>
					{t('tails.tails')} <FaAngleRight />
				</Link>
			</div>
			<Swiper
				breakpoints={breakpoints}
				spaceBetween={20}
				loop={false}
				speed={1000}
				effect={'fade'}
				pagination={pagination}
				navigation={true}
				modules={[Pagination, Navigation]}
			>
				{tails?.dog_cards?.map((tail: TailProps) => (
					<SwiperSlide key={tail.id}>
						<Tail {...tail} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Tails;
