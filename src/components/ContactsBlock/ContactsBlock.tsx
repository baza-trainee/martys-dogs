import { FaFacebook, FaInstagram, FaRegEnvelope, FaYoutube } from "react-icons/fa";
import { FiPhoneCall, FiSmartphone } from "react-icons/fi";

import { GrLocation } from "react-icons/gr";
import shelter from '../../assets/shelter.webp';
import styles from './ContactsBlock.module.scss';
import { useTranslation } from 'react-i18next';

const ContactsBlock: React.FC = () => {
	const { t } = useTranslation();
	return (
		<section className={styles.contacts}>
			<h1 className={styles.title}>{t('contactsBlock.contacts')}</h1>
			<div className={styles.container}>
				<div className={styles.links}>
					<div className={styles.addresses}>
						<div className={styles.city}>
							<div className={styles.icon}>
							<GrLocation />
							</div>
							<p className={styles.black}>
								{t('contactsBlock.city')}
							</p>
						</div>
						<div className={styles.city}>
							<div className={styles.icon}>
								<FaRegEnvelope />
							</div>
							<p className={styles.black}>
								cityofgoodnessua@gmail.com
							</p>
						</div>
					</div>
					<div className={styles.addresses}>
						<h2 className={styles.big}>
							{t('contactsBlock.phones')}
						</h2>
						<div className={styles.city}>
							<div className={styles.icon}>
								<FiSmartphone />
							</div>
							<p className={styles.black}>+380 95 053 60 09</p>
						</div>
						<div className={styles.city}>
							<div className={styles.icon}>
								<FiPhoneCall />
							</div>
							<p className={styles.black}>0 800 503 231</p>
						</div>
						<p className={styles.small}>
							{t('contactsBlock.free')}
						</p>
					</div>
					<div className={styles.addresses}>
						<h2 className={styles.big}>
							{t('contactsBlock.socials')}
						</h2>
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
				<div className={styles.images}>
					<img src={shelter} alt='shelter' className={styles.image} />
				</div>
			</div>
		</section>
	);
};

export default ContactsBlock;
