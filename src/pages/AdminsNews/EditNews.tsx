import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import styles from './AddNews.module.scss';
import { IAddNews, changeNews } from '../../services/adminNews';
import UploadImageInput from '../../layout/UploadImageInput/UploadImageInput';
import HookFormInput from '../../components/HookFormInput/HookFormInput';
import NewsTextarea from '../../components/NewsTextarea/NewsTextarea';

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

const EditNews: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		// formState: { errors, isValid },
		watch,
	} = useForm<IFormInputs>({ mode: 'onBlur' });

	const navigate = useNavigate();
	const queryClient = useQueryClient();

	let uploadedImage;

	const mutation = useMutation({
		mutationFn: (news: IAddNews) =>
			changeNews(news).then((item) => console.log(item)),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['news'] });
			reset();
			navigate('/admin/news');
		},
	});

	const onSubmitHandler: SubmitHandler<IFormInputs> = (data) => {
		console.log(errors);
		// console.log(data);
		uploadedImage = data?.photo?.[0];
		const newsDate = new Date();
		const addedNews = {
			...data,
			photo: uploadedImage,
			post_at: newsDate,
			update_at: newsDate,
		};
		console.log(addedNews);
		console.log(errors);
		mutation.mutate(addedNews);
		// reset();
	};

	const onCancelHandler = () => {
		reset();
		navigate('/admin/news');
	};

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Відредагуйте необхідні поля</h3>
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
						maxLength={30}
					/>
					<HookFormInput
						label={'News title'}
						register={{
							...register('title_en', {
								required:
									'Вкажіть заголовок новини англійською',
								pattern: {
									value: /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~-]*$/i,
									message:
										'можуть бути  цифри, англійські  літери, розділові знаки',
								},
							}),
						}}
						errorMessage={errors['title_en']?.message}
						type={'text'}
						id={'title_en'}
						placeholder={'Enter news title'}
						maxLength={30}
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
						maxLength={250}
						errorMessage={errors['sub_text']?.message}
					/>
					<NewsTextarea
						label={'News  text'}
						register={{
							...register('sub_text_en', {
								required: 'Вкажіть текст новини англійською',
								pattern: {
									value: /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~-]*$/i,
									message:
										'Можуть бути   англійські  літери,цифри, символи',
								},
							}),
						}}
						id={'sub_text_en'}
						placeholder={'Enter news text'}
						maxLength={250}
						errorMessage={errors['sub_text_en']?.message}
					/>
				</div>
				<div className={styles.button_wrapper}>
					<button
						className={styles.addButton}
						type='submit'
						// disabled={!isValid}
					>
						Оновити
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

export default EditNews;
