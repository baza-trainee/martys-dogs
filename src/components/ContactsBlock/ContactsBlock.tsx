import 'leaflet/dist/leaflet.css';

import {
	FaFacebook,
	FaInstagram,
	FaLocationDot,
	FaMobile,
	FaPhone,
	FaRegEnvelope,
	FaYoutube,
} from 'react-icons/fa6';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import styles from './ContactsBlock.module.scss';

const ContactsBlock: React.FC = () => {
	return (
		<section className={styles.contacts}>
			<h1 className={styles.title}>Контакти притулку “Хвостики”</h1>
			<div className={styles.container}>
				<div className={styles.links}>
					<div className={styles.addresses}>
						<div className={styles.city}>
							<div className={styles.icon}>
								<FaLocationDot />
							</div>
							<p className={styles.black}>
								м. Чернівці, вул. Прутська, 6
							</p>
						</div>
						<div className={styles.city}>
							<div className={styles.icon}>
								<FaRegEnvelope />
							</div>
							<a
								href='mailto:cityofgoodnessua@gmail.com'
								target='_blank'
								rel='noopener noreferrer'
								className={styles.text}
							>
								cityofgoodnessua@gmail.com
							</a>
						</div>
					</div>
					<div className={styles.addresses}>
						<h2 className={styles.big}>Контактні телефони:</h2>
						<div className={styles.city}>
							<div className={styles.icon}>
								<FaMobile />
							</div>
							<a
								href='tel:+380950536009'
								target='_blank'
								rel='noopener noreferrer'
								className={styles.text}
							>
								380 95 053 60 09
							</a>
						</div>
						<div className={styles.city}>
							<div className={styles.icon}>
								<FaPhone />
							</div>
							<a
								href='tel:0800503231'
								target='_blank'
								rel='noopener noreferrer'
								className={styles.text}
							>
								0 800 503 231
							</a>
						</div>
						<p className={styles.small}>
							Безкоштовний з усіх номерів по Україні
						</p>
					</div>
					<div className={styles.addresses}>
						<h2 className={styles.big}>Наші соціальні мережі:</h2>
						<div className={styles.socials}>
							<div className={styles.city}>
								<div className={styles.icon}>
									<FaFacebook />
								</div>
								<a
									href='https://www.facebook.com/maybutneukr/'
									target='_blank'
									rel='noopener noreferrer'
									className={styles.text}
								>
									Facebook
								</a>
							</div>
							<div className={styles.city}>
								<div className={styles.icon}>
									<FaInstagram />
								</div>
								<a
									href='https://www.instagram.com/misto.dobra/'
									target='_blank'
									rel='noopener noreferrer'
									className={styles.text}
								>
									Instagram
								</a>
							</div>
							<div className={styles.city}>
								<div className={styles.icon}>
									<FaYoutube />
								</div>
								<a
									href='https://www.youtube.com/channel/UCTkEh1ww0RrNk7KUK4-ffBw/videos'
									target='_blank'
									rel='noopener noreferrer'
									className={styles.text}
								>
									Youtube
								</a>
							</div>
						</div>
					</div>
				</div>
				<MapContainer
					center={[48.299653474393445, 25.935098153970504]}
					zoom={14}
					scrollWheelZoom={false}
					className={styles.map}
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					/>
					<Marker position={[48.299653474393445, 25.935098153970504]}>
						<Popup>
							<h5>Притулок “Хвостики”</h5>
							<p>
								Разом ми можемо більше. <br></br>Подаруй собакам
								нову надію на щасливе життя!
							</p>
						</Popup>
					</Marker>
				</MapContainer>
			</div>
		</section>
	);
};

export default ContactsBlock;
