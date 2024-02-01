import { FormEvent, useState, ChangeEvent } from 'react';
// import { useForm } from 'react-hook-form';
import { FaUpload } from 'react-icons/fa';
import styles from './AddNews.module.scss';

const AddNews: React.FC = () => {
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');
	const [, setImage] = useState<File | null>(null);
	// const [date, setDate] = useState('');
	const [link, setLink] = useState('');

	const onTitleChange = (evt: ChangeEvent<HTMLInputElement>) => {
		console.log(evt.target.value);
		setTitle(evt.target.value);
	};

	// const onTextChange = (evt: ChangeEvent<HTMLInputElement>) => {
	// 	console.log(evt.target.value);
	// 	setText(evt.target.value);
	// };

	const onLinkChange = (evt: ChangeEvent<HTMLInputElement>) => {
		console.log(evt.target.value);
		setLink(evt.target.value);
	};

	const onImageChange = (evt: ChangeEvent<HTMLInputElement>) => {
		// console.log(evt.target.files[0]);
		const uploadedImage = evt.target.files?.[0];
		if (uploadedImage) setImage(uploadedImage);
	};

	const resetForm = () => {
		setImage(null);
		setLink('');
		setText('');
		setTitle('');
	};

	const onSubmitHandler = (evt: FormEvent) => {
		evt.preventDefault();
		// 	validate data
		// 	send data to back
		resetForm();
	};

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>
				Для додавання новини необхідно заповнити всі поля
			</h3>
			<form className={styles.form} onSubmit={onSubmitHandler}>
				<div className={styles.wrapper}>
					<label htmlFor='image' className={styles.image}>
						<input
							// className={styles.image}
							required
							type='file'
							id='image'
							placeholder='Upload  news photo'
							accept='image/*'
							// value={image}
							onChange={onImageChange}
						/>
						<FaUpload className={styles.icon} />
						<span className={styles.text}>
							Завантажте зображення
						</span>
					</label>
					{/* <p className={styles.error}>{'errorMessage'}</p> */}
				</div>
				<div className={styles.wrapper}>
					<label htmlFor='url' className={styles.label}>
						<span className={styles.text}>
							Посилання на новину в facebook
						</span>
						<input
							className={styles.input}
							required
							type='text'
							id='url'
							placeholder='Enter news link in facebook'
							value={link}
							onChange={onLinkChange}
						/>
					</label>
					{/* <p className={styles.error}>{'errorMessage'}</p> */}
				</div>
				<div className={styles.group}>
					<div className={styles.wrapper}>
						<label htmlFor='title' className={styles.label}>
							<span className={styles.text}>
								Заголовок новини
							</span>
							<input
								className={styles.input}
								required
								type='text'
								id='title'
								placeholder='Enter news title'
								// value='title'
								value={title}
								onChange={onTitleChange}
							/>
						</label>
						{/* <p className={styles.error}>{'errorMessage'}</p> */}
					</div>
					<div className={styles.wrapper}>
						<label htmlFor='title' className={styles.label}>
							<span className={styles.text}>News title</span>
							<input
								className={styles.input}
								required
								type='text'
								id='title'
								placeholder='Enter news title'
								// value='title'
								value={title}
								onChange={onTitleChange}
							/>
						</label>
						{/* <p className={styles.error}>{'errorMessage'}</p> */}
					</div>
				</div>
				<div className={styles.group}>
					<div className={styles.wrapper}>
						<label htmlFor='text' className={styles.label}>
							<span className={styles.text}>Текст новини</span>
							<textarea
								className={styles.textarea}
								maxLength={250}
								rows={6}
								required
								// type='text'
								id='text'
								placeholder='Enter news text'
								value={text}
								// onChange={onTextChange}
							/>
						</label>
						{/* <p className={styles.error}>{'errorMessage'}</p> */}
					</div>

					<div className={styles.wrapper}>
						<label htmlFor='text' className={styles.label}>
							<span className={styles.text}>News text</span>
							<textarea
								className={styles.textarea}
								maxLength={250}
								rows={6}
								required
								// type='text'
								id='text'
								placeholder='Enter news text'
								value={text}
								// onChange={onTextChange}
							/>
							{/* <input
								className={styles.input}
								type='text'
								id='text'
								placeholder='Enter news text'
								value={text}
								onChange={onTextChange}
							/> */}
						</label>
						{/* <p className={styles.error}>{'errorMessage'}</p> */}
					</div>
				</div>
				<div className={styles.button_wrapper}>
					<button className={styles.addButton} type='submit'>
						Додати
					</button>
					<button className={styles.addButton}>Відмінити</button>
				</div>
			</form>
		</div>
	);
};

export default AddNews;

// const AddNews: React.FC = () => {
// 	const [title, setTitle] = useState('');
// 	const [text, setText] = useState('');
// 	const [, setImage] = useState<File | null>(null);
// 	// const [date, setDate] = useState('');
// 	const [link, setLink] = useState('');

// 	const onTitleChange = (evt: ChangeEvent<HTMLInputElement>) => {
// 		console.log(evt.target.value);
// 		setTitle(evt.target.value);
// 	};

// 	// const onTextChange = (evt: ChangeEvent<HTMLInputElement>) => {
// 	// 	console.log(evt.target.value);
// 	// 	setText(evt.target.value);
// 	// };

// 	const onLinkChange = (evt: ChangeEvent<HTMLInputElement>) => {
// 		console.log(evt.target.value);
// 		setLink(evt.target.value);
// 	};

// 	const onImageChange = (evt: ChangeEvent<HTMLInputElement>) => {
// 		// console.log(evt.target.files[0]);
// 		const uploadedImage = evt.target.files?.[0];
// 		if (uploadedImage) setImage(uploadedImage);
// 	};

// 	const resetForm = () => {
// 		setImage(null);
// 		setLink('');
// 		setText('');
// 		setTitle('');
// 	};

// 	const onSubmitHandler = (evt: FormEvent) => {
// 		evt.preventDefault();
// 		// 	validate data
// 		// 	send data to back
// 		resetForm();
// 	};

// 	return (
// 		<div className={styles.container}>
// 			<h3 className={styles.title}>
// 				Для додавання новини необхідно заповнити всі поля
// 			</h3>
// 			<form className={styles.form} onSubmit={onSubmitHandler}>
// 				<div className={styles.wrapper}>
// 					<label htmlFor='image' className={styles.image}>
// 						<input
// 							// className={styles.image}
// 							required
// 							type='file'
// 							id='image'
// 							placeholder='Upload  news photo'
// 							accept='image/*'
// 							// value={image}
// 							onChange={onImageChange}
// 						/>
// 						<FaUpload className={styles.icon} />
// 						<span className={styles.text}>
// 							Завантажте зображення
// 						</span>
// 					</label>
// 					{/* <p className={styles.error}>{'errorMessage'}</p> */}
// 				</div>
// 				<div className={styles.wrapper}>
// 					<label htmlFor='url' className={styles.label}>
// 						<span className={styles.text}>
// 							Посилання на новину в facebook
// 						</span>
// 						<input
// 							className={styles.input}
// 							required
// 							type='text'
// 							id='url'
// 							placeholder='Enter news link in facebook'
// 							value={link}
// 							onChange={onLinkChange}
// 						/>
// 					</label>
// 					{/* <p className={styles.error}>{'errorMessage'}</p> */}
// 				</div>
// 				<div className={styles.group}>
// 					<div className={styles.wrapper}>
// 						<label htmlFor='title' className={styles.label}>
// 							<span className={styles.text}>
// 								Заголовок новини
// 							</span>
// 							<input
// 								className={styles.input}
// 								required
// 								type='text'
// 								id='title'
// 								placeholder='Enter news title'
// 								// value='title'
// 								value={title}
// 								onChange={onTitleChange}
// 							/>
// 						</label>
// 						{/* <p className={styles.error}>{'errorMessage'}</p> */}
// 					</div>
// 					<div className={styles.wrapper}>
// 						<label htmlFor='title' className={styles.label}>
// 							<span className={styles.text}>News title</span>
// 							<input
// 								className={styles.input}
// 								required
// 								type='text'
// 								id='title'
// 								placeholder='Enter news title'
// 								// value='title'
// 								value={title}
// 								onChange={onTitleChange}
// 							/>
// 						</label>
// 						{/* <p className={styles.error}>{'errorMessage'}</p> */}
// 					</div>
// 				</div>
// 				<div className={styles.group}>
// 					<div className={styles.wrapper}>
// 						<label htmlFor='text' className={styles.label}>
// 							<span className={styles.text}>Текст новини</span>
// 							<textarea
// 								className={styles.textarea}
// 								maxLength={250}
// 								rows={6}
// 								required
// 								// type='text'
// 								id='text'
// 								placeholder='Enter news text'
// 								value={text}
// 								// onChange={onTextChange}
// 							/>
// 							{/* <input
// 								className={styles.input}
// 								type='text'
// 								id='text'
// 								placeholder='Enter news text'
// 								value={text}
// 								onChange={onTextChange}
// 							/> */}
// 						</label>
// 						{/* <p className={styles.error}>{'errorMessage'}</p> */}
// 					</div>

// 					<div className={styles.wrapper}>
// 						<label htmlFor='text' className={styles.label}>
// 							<span className={styles.text}>News text</span>
// 							<textarea
// 								className={styles.textarea}
// 								maxLength={250}
// 								rows={6}
// 								required
// 								// type='text'
// 								id='text'
// 								placeholder='Enter news text'
// 								value={text}
// 								// onChange={onTextChange}
// 							/>
// 							{/* <input
// 								className={styles.input}
// 								type='text'
// 								id='text'
// 								placeholder='Enter news text'
// 								value={text}
// 								onChange={onTextChange}
// 							/> */}
// 						</label>
// 						{/* <p className={styles.error}>{'errorMessage'}</p> */}
// 					</div>
// 				</div>
// 				<div className={styles.button_wrapper}>
// 					<button className={styles.addButton} type='submit'>
// 						Додати
// 					</button>
// 					<button className={styles.addButton}>Відмінити</button>
// 				</div>
// 			</form>
// 		</div>
// 	);
// };
