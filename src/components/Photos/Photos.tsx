import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { photos } from '../../data';
import styles from './Photos.module.scss';

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

const Photos: React.FC = () => {
	const pagination: Pagination = {
		clickable: true,
		renderBullet: (index, className) => {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
	};
	return (
		<section className={styles.photos}>
			<h2 className={styles.title}>Притулок у фотографіях</h2>
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
				{photos.map((photo) => (
					<SwiperSlide key={photo.id}>
						<div>
							<img src={photo.img} alt='dog' />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Photos;
