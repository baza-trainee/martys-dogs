import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import {useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import styles from './AddEditNews.module.scss';
import { IAddNews, changeNews ,addNews, fetchNews} from '../../services/adminNews';
import UploadImageInput from '../../components/CommonUI/UploadImageInput/UploadImageInput';
import HookFormInput from '../../components/CommonUI/HookFormInput/HookFormInput';
import NewsTextarea from '../../components/NewsTextarea/NewsTextarea';
import {NewsItem} from './AdminNews';
import { Loader } from '../../components/CommonUI/LoaderAndError/LoaderAndError';
interface IFormInputs {
	title: string;
	sub_text: string;
	title_en: string;
	sub_text_en: string;
	url: string;
	photo: FileList;
	post_at?: string;
	update_at?: string;
}

const AddEditNews: React.FC = () => {
	const { register, handleSubmit, reset, formState: { errors, isValid }, watch, setValue } = useForm<IFormInputs>({ mode: 'onBlur' });
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { newsId } = useParams();
	const isAddMode = !newsId;

	const { mutate, isError, isPending, error } = useMutation({
			mutationFn: (newsItem: IAddNews) => {
					if (isAddMode) {
							return addNews(newsItem).then((item) => console.log(item));
					} else {
							return changeNews(newsItem, newsId).then(() => console.log('changeNews'));
					}
			},
			onSuccess: () => {
					queryClient.invalidateQueries({ queryKey: ['news'] });
					reset();
					navigate('/admin/news');
			},
	});

	const { data: news } = useQuery<NewsItem[]>({
			queryKey: ['news'],
			queryFn: fetchNews,
	});

	useEffect(() => {
		const newsToEdit = news?.find((item) => item.id === Number(newsId));
		if (newsToEdit) {
				const fields: (keyof IAddNews)[] = ['photo', 'url', 'title', 'title_en', 'sub_text', 'sub_text_en'];
				fields.forEach((field) => {
					if (field !== 'id' && field in newsToEdit) {
							setValue(field, newsToEdit[field as keyof typeof newsToEdit] as string);
					}
			});
		}
}, [news, newsId, setValue]);

const onSubmitHandler: SubmitHandler<IFormInputs> = async (data) => {
			const uploadedImage = data?.photo?.[0];
			const newsDate = new Date();
			const addedNews = {
					...data,
					photo: uploadedImage,
					post_at: newsDate,
					update_at: newsDate,
			};
			mutate(addedNews);
	};

	const onCancelHandler = () => {
			reset();
			navigate('/admin/news');
	};


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
		<div className={styles.container}>
			<h3 className={styles.title}>{isAddMode ? 'Для додавання новини необхідно заповнити всі поля' : 'Відредагуйте необхідні поля'}</h3>
			<form
				className={styles.form}
				onSubmit={handleSubmit(onSubmitHandler)}
			>
				<UploadImageInput
					register={{
						...register('photo', {
							required: 'Файл з фото не обрано',
						}),
					}}
					watch={watch}
					errorMessage={errors['photo']?.message}
				/>
				<HookFormInput
					label={'Посилання на новину в facebook'}
					register={{
						...register('url', {
							required: 'Вкажіть посилання на новину',
							pattern: {
								value: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/i,
								message: 'Перевірте коректність посилання',
							},
						}),
					}}
					errorMessage={errors['url']?.message}
					type={'text'}
					id={'url'}
					placeholder={'Enter news link in facebook'}
				/>
				<div className={styles.group}>
					<HookFormInput
						label={'Заголовок новини'}
						register={{
							...register('title', {
								required: 'Вкажіть заголовок новини',
								pattern: {
									value: /^[\p{Script=Cyrillic}\d\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~ґєіїҐЄІЇ]*$/u,
									message:
										'можуть бути  цифри, українські літери, розділові знаки',
								},
							}),
						}}
						errorMessage={errors['title']?.message}
						type={'text'}
						id={'title'}
						placeholder={'Enter news title'}
						maxLength={60}
					/>
					<HookFormInput
						label={'News title'}
						register={{
							...register('title_en', {
								required:
									'Вкажіть заголовок новини англійською',
								pattern: {
									value: /^[a-zA-Z0-9 !`@#$%^&*()_+{}[\]:;<>,.?~-]*$/i,
									message:
										'можуть бути  цифри, англійські  літери, розділові знаки',
								},
							}),
						}}
						errorMessage={errors['title_en']?.message}
						type={'text'}
						id={'title_en'}
						placeholder={'Enter news title'}
						maxLength={60}
					/>
				</div>
				<div className={styles.group}>
					<NewsTextarea
						label={'Текст новини'}
						register={{
							...register('sub_text', {
								required: 'Вкажіть текст новини',
								pattern: {
									value: /^[\p{Script=Cyrillic}\d\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~ґєіїҐЄІЇ]*$/u,
									message:
										'Можуть бути українські літери, цифри, символи',
								},
							}),
						}}
						id={'sub_text'}
						placeholder={'Enter news text'}
						maxLength={100}
						errorMessage={errors['sub_text']?.message}
					/>
					<NewsTextarea
						label={'News  text'}
						register={{
							...register('sub_text_en', {
								required: 'Вкажіть текст новини англійською',
								pattern: {
									value: /^[a-zA-Z0-9 !`@#$%^&*()_+{}[\]:;<>,.?~-]*$/i,
									message:
										'Можуть бути   англійські  літери,цифри, символи',
								},
							}),
						}}
						id={'sub_text_en'}
						placeholder={'Enter news text'}
						maxLength={100}
						errorMessage={errors['sub_text_en']?.message}
					/>
				</div>
				<div className={styles.button_wrapper}>
					<button
						className={isValid ?  styles.addButton : styles.disable}
						type='submit'
						disabled={!isValid}
					>
						{isAddMode ?  'Додати' : 'Оновити'}
					</button>
					<button
						className={styles.addButton}
						onClick={onCancelHandler}
					>
						Відмінити
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddEditNews;
