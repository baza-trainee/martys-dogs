import React from 'react'
import styles from './NewsItem.module.scss';
import { useTranslation } from 'react-i18next';

export interface Photo {
	id: string;
	name: string;
	url: string;
	category: string;
}
export interface NewsItemProps {
	id: number;
	title: string;
	post_at: string;
	update_at?: string;
	sub_text: string;
	url: string;
	children?: React.ReactNode;
	photo: Photo;
	needTranslate?:boolean;
	inAdmin?: boolean;
}

const NewsItem: React.FC<NewsItemProps> = ({title, post_at,  sub_text, photo, needTranslate, children, inAdmin}) => {

	const {i18n } = useTranslation();

	const months: { [key: string]: string } = {
		січень: 'січня',
		лютий: 'лютого',
		березень: 'березня',
		квітень: 'квітня',
		травень: 'травня',
		червень: 'червня',
		липень: 'липня',
		серпень: 'серпня',
		вересень: 'вересня',
		жовтень: 'жовтня',
		листопад: 'листопада',
		грудень: 'грудня',
	};

	const getDateName = (data: string) => {
		const date = new Date(data);
		const monthFromDate = date.toLocaleString('uk-UA', { month: 'long' });
		const monthFromDateEng = date.toLocaleString('en-EN', { month: 'long' });
		const changedMonth = months[monthFromDate];
		const stringDate = `${date.getDate()} ${changedMonth} ${date.getFullYear()}`;
		const engDate = `${date.getDate()} ${monthFromDateEng} ${date.getFullYear()}`;
		if (i18n.language === 'ua' && needTranslate){
			return stringDate;
		} else  if (i18n.language === 'en' && needTranslate) {
			return engDate;
		} else {
			return stringDate;
		}
	};


	return (
		<li className={!inAdmin ? styles.item : styles.item_admin} >
			<div className={styles.thumb}>
				{ <img
					src={photo.url}
					alt='news-photo'
					className={styles.photo}
				/> }
			</div>
				<div className={styles.info}>
				<h3 className={styles.title}>{title}</h3>
				<div>
					<p className={styles.date}>{getDateName(post_at)}</p>
					<p className={styles.text} data-testid='newsItem'>
						{sub_text}
					</p>
					</div>
			</div>
			{children}
		</li>
	);
};

export default NewsItem;
