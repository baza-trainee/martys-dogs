import React from 'react'
import NewsItem, { NewsItemProps } from './NewsItem';
import { LandingData } from '../../pages/Landing/Landing';
import { UseQueryResult } from '@tanstack/react-query';
import styles from './News.module.scss';
import { useTranslation } from 'react-i18next';
import { Loader } from '../CommonUI/LoaderAndError/LoaderAndError';
// import {data} from './data'
interface NewsProps {
	data: UseQueryResult<LandingData, Error>;
}

const News: React.FC<NewsProps> = ({ data }) => {
	const { t } = useTranslation();

	const { data: news, isPending, isError, error } = data;

	console.log(news?.news);

// const string = 'During your cosy and warm celebrations, don't forget about the creatures for whom we are the whole world. Very soon we will launch a very important in'
// console.log(string.length)
	if (isPending) {
		return (
		<Loader/>
		);
	}

	if (isError) {
		return (
			<div className={styles.container}>
				<div className={styles.alert}>{error.message}</div>
			</div>
		);
	}

	return (
		<section className={styles.section}>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>{t('news.title')}</h2>
				<ul className={styles.news}>
					{news?.news?.map((item: NewsItemProps) => (
						<NewsItem key={item.id} {...item} />
					))}
				</ul>
			</div>
		</section>
	);
};

export default News;
