import { FaFacebook, FaInstagram, FaRegEnvelope, FaYoutube } from "react-icons/fa";
import { FiPhoneCall, FiSmartphone } from "react-icons/fi";

import { Link } from "react-router-dom";
import footerLogo from '../../assets/footer_logo.webp';
import styles from "./Footer.module.scss";
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer
			className={styles.footer}
		>
			<div
				className={styles.footer_container}
			>
				<div
					className={styles.footer_main}
				>
					<img
						src={footerLogo}
						alt="Best Friend logo"
						className={styles.footer_logo}
					/>
					<ul
						className={styles.footer_nav}
					>
						<li
							className={styles.footer_nav_cat}
						>
							<Link
								to="/"
								className={styles.footer_nav_link}
							>
								{t('header.nav_main')}
							</Link>
						</li>
						<li
							className={styles.footer_nav_cat}
						>
							<Link
								to="/about"
								className={styles.footer_nav_link}
							>
								{t('header.nav_about')}
							</Link>
						</li>
						<li
							className={styles.footer_nav_cat}
						>
							<Link
								to="/tails"
								className={styles.footer_nav_link}
							>
								{t('header.nav_pets')}
							</Link>
						</li>
						<li
							className={styles.footer_nav_cat}
						>
							<a
								href="#"
								target="_blank"
								className={styles.footer_nav_link}
							>
								{t('footer.policy')}
							</a>
						</li>
						<li
							className={styles.footer_nav_cat}
						>
							<a
								href="#"
								target="_blank"
								className={styles.footer_nav_link}
							>
								{t('footer.rules')}
							</a>
						</li>
						<li
							className={styles.footer_nav_cat}
						>
							<a
								href="#"
								target="_blank"
								className={styles.footer_nav_link}
							>
								{t('footer.reports')}
							</a>
						</li>
					</ul>
					<div>
						<h3
							className={styles.footer_con_title}
						>
							{t('footer.contact')}
						</h3>
						<ul
							className={styles.footer_contacts}
						>
							<li
								className={styles.footer_contact_cat}
							>
								<FaRegEnvelope
									className={styles.footer_contact_icon}
								/>
								<a
									className={styles.footer_contact_link}
								>
									cityofgoodnessua@gmail.com
								</a>
							</li>
							<li
								className={styles.footer_contact_cat}
							>
								<FiPhoneCall
									className={styles.footer_contact_icon}
								/>
								<a
									className={styles.footer_contact_link}
								>
									+380 95 053 60 09
								</a>
							</li>
							<li
								className={styles.footer_contact_cat}
							>
								<div
									className={styles.footer_contact_cat_dog }
								>
									<FiSmartphone
										className={styles.footer_contact_icon}
									/>
									<a
										className={styles.footer_contact_link}
									>
										0 800 503 231
									</a>
								</div>
								<span
									className={styles.footer_contact_cat_dis}
								>
									{t('footer.callDis')}
								</span>
							</li>
						</ul>
						<div
							className={styles.footer_soc}
						>
							<a
								href=" https://www.facebook.com/profile.php?id=61553557254980"
								target="_blank"
								className={styles.footer_soc_link}
							>
								<FaFacebook
									className={styles.footer_soc_icon}
								/>
							</a>
							<a
								href="https://www.instagram.com/hvostuku_misto.dobra/"
								target="_blank"
								className={styles.footer_soc_link}
							>
								<FaInstagram
									className={styles.footer_soc_icon}
								/>
							</a>
							<a
								href="https://www.youtube.com/channel/UCTkEh1ww0RrNk7KUK4-ffBw/videos"
								target="_blank"
								className={styles.footer_soc_link}
							>
								<FaYoutube
									className={styles.footer_soc_icon}
								/>
							</a>
						</div>
					</div>
				</div>
				<div
					className={styles.footer_copyright}
				>
					<p>
						{t('footer.copyright')}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
