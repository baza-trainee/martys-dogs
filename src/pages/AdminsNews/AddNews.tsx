import { FormEvent, useState, ChangeEvent } from 'react';
import styles from './AddNews.module.scss';

const AddNews: React.FC = () => {
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');
	const [image, setImage] = useState<File | null>(null);
	// const [date, setDate] = useState('');
	const [link, setLink] = useState('');

	const onTitleChange = (evt: ChangeEvent<HTMLInputElement>) => {
		console.log(evt.target.value);
		setTitle(evt.target.value);
	};

	const onTextChange = (evt: ChangeEvent<HTMLInputElement>) => {
		console.log(evt.target.value);
		setText(evt.target.value);
	};

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
		<div>
			<form className={styles.form} onSubmit={onSubmitHandler}>
				<div>
					<label htmlFor='image' className={styles.label}>
						<span className={styles.text}>News photo</span>
						<input
							className={styles.input}
							type='file'
							id='image'
							placeholder='Upload  news photo'
							accept='image/*'
							// value={image}
							onChange={onImageChange}
						/>
					</label>
					<p className={styles.error}>{'errorMessage'}</p>
				</div>
				<div>
					<label htmlFor='title' className={styles.label}>
						<span className={styles.text}>News title</span>
						<input
							className={styles.input}
							type='text'
							id='title'
							placeholder='Enter news title'
							// value='title'
							value={title}
							onChange={onTitleChange}
						/>
					</label>
					<p className={styles.error}>{'errorMessage'}</p>
				</div>
				<input type='text' />
				<div>
					<label htmlFor='text' className={styles.label}>
						<span className={styles.text}>News text</span>
						<input
							className={styles.input}
							type='text'
							id='text'
							placeholder='Enter news text'
							value={text}
							onChange={onTextChange}
						/>
					</label>
					<p className={styles.error}>{'errorMessage'}</p>
				</div>
				<div>
					<label htmlFor='url' className={styles.label}>
						<span className={styles.text}>
							News link in facebook
						</span>
						<input
							className={styles.input}
							type='text'
							id='url'
							placeholder='Enter news link in facebook'
							value={link}
							onChange={onLinkChange}
						/>
					</label>
					<p className={styles.error}>{'errorMessage'}</p>
				</div>
			</form>
		</div>
	);
};

export default AddNews;
