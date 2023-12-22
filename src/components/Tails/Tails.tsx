import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Tail from '../Tail/Tail';
import styles from './Tails.module.scss';
import { tails } from '../../data';

const Tails: React.FC = () => {
	return (
		<section className={styles.tail}>
			<div className={styles.title}>
				<h2>Познайомся з нашими хвостиками</h2>
				<button>Усі хвостики притулку</button>
			</div>
			<Swiper
				slidesPerView={4}
				spaceBetween={20}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className={styles.slider}
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
