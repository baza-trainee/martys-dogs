import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Tail from '../Tail/Tail';
import styles from './Tails.module.scss';
import { tails } from '../../data';

interface Pagination {
	clickable: boolean;
	renderBullet: (index: number, className: string) => string;
}

const breakpoints = {
	1440: {
		slidesPerView: 4,
		slidesPerGroup: 4,
	},
	768: {
		slidesPerView: 3,
		slidesPerGroup: 3,
	},
	320: {
		slidesPerView: 1,
		slidesPerGroup: 1,
	},
};

const Tails: React.FC = () => {
	const pagination: Pagination = {
		clickable: true,
		renderBullet: (index, className) => {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
	};
	return (
		<section className={styles.tails}>
			<div className={styles.title}>
				<h2>Познайомся з нашими хвостиками</h2>
				<Link to='tails' className={styles.link}>
					Усі хвостики притулку <FaAngleRight />
				</Link>
			</div>
			<Swiper
				breakpoints={breakpoints}
				spaceBetween={20}
				loop={false}
				pagination={pagination}
				navigation={true}
				modules={[Pagination, Navigation]}
			>
				{tails.map((tail) => (
					<SwiperSlide key={tail.id}>
						<Tail {...tail} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Tails;
