import { useForm, SubmitHandler } from 'react-hook-form';
import {useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import styles from './AddEditNews.module.scss';
import { IAddNews, changeNews ,addNews, fetchNews} from '../../services/adminNews';
import UploadImageInput from '../../components/CommonUI/UploadImageInput/UploadImageInput';
import HookFormInput from '../../components/CommonUI/HookFormInput/HookFormInput';
import NewsTextarea from '../../components/NewsTextarea/NewsTextarea';
import { ErrorAlert, Loader } from '../../components/CommonUI/LoaderAndError/LoaderAndError';
import { useAuthContext } from '../../context/useGlobalContext';
import { NewsItemProps} from '../../components/News/NewsItem';
interface IFormInputs {
	title: string;
	sub_text: string;
	title_en: string;
	sub_text_en: string;
	url: string;
	photo: FileList;
	post_at?: string | Date;
	update_at?: string | Date;
}

const AddEditNews: React.FC = () => {
	const { register, handleSubmit, reset, formState: { errors, isValid }, watch, setValue } = useForm<IFormInputs>({ mode: 'onChange' });
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { newsId } = useParams();
	const isAddMode = !newsId;
	const { token } = useAuthContext();

	const { mutate, isError, isPending } = useMutation({
			mutationFn: isAddMode ? addNews : changeNews,
			onSuccess: () => {
					queryClient.invalidateQueries({ queryKey: ['news'] });
					reset();
					navigate('/admin/news');
			},
	});

	const { data: news } = useQuery<NewsItemProps[]>({
			queryKey: ['news'],
			queryFn: () => typeof token === 'string' ? fetchNews(token) : Promise.resolve([]),
		refetchInterval: 600000,
		enabled: !!token,
	});

	useEffect(() => {
		const newsToEdit = news?.find((item) => item.id === Number(newsId));
		if (newsToEdit) {
				const fields: (keyof IAddNews)[] = ['url', 'title', 'title_en', 'sub_text', 'sub_text_en', 'post_at'];
				fields.forEach((field) => {
					if (field !== 'id' && field in newsToEdit) {
							setValue(field, newsToEdit[field as keyof typeof newsToEdit] as string);
					}
			});
		}
}, [news, newsId, setValue]);

const onSubmitHandler: SubmitHandler<IFormInputs> = async (data) => {
	if(token){const uploadedImage = data?.photo?.[0];
			const newsDate = new Date();
			const addedNews = {
				...data,
				photo: uploadedImage,
				// post_at: newsDate,
				update_at: newsDate,
		}

		console.log(addedNews)
		if (isAddMode) {
			mutate({ newsItem: addedNews, id: '', token });
		} else {
			mutate({ newsItem: addedNews, id: newsId, token });
		}
		}
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
			<ErrorAlert errorMessage='На жаль сталася помилка, перезавантажте  сторінку і спробуйте ще раз'/>
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
							validate: {
								validImageFormat: (value: FileList | null) => {
									if (!value) return true;
									const supportedImageFormats = [
										'image/jpeg',
										'image/png',
										'image/webp',
									];
									return (
										supportedImageFormats.includes(
											value?.[0].type,
										) ||
										'Виберіть дійсний файл зображення (JPEG, PNG або WebP)'
									);
								},
								validImageSize: (value: FileList | null) => {
									if (!value) return true;
									const maxSize = 5 * 1024 * 1024; // 5MB
									return (
										value?.[0].size <= maxSize ||
										`Розмір файлу повинен бути менше або рівний ${
											maxSize / (1024 * 1024)
										} MB`
									);
								},
							}
						}),
					}}
					watch={watch}
					errorMessage={errors['photo']?.message}
				/>
	{/* <HookFormInput
					label={'Дата новини'}
					register={{
						...register('post_at', {
							required: 'Оберіть дату',
						}),
					}}
					errorMessage={errors['post_at']?.message}
					type={'date'}
					id={'post_at'}
					placeholder={'Choose  news date'}
				/> */}

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
						maxLength={175}
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
						maxLength={175}
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
