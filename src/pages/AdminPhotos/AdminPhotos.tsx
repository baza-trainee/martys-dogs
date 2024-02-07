import { useState } from 'react';
import Photo1Image from '../../assets/photos/photo_1.webp';
import Photo2Image from '../../assets/photos/photo_2.webp';
import styles from './AdminPhotos.module.scss';
import { FaUpload, FaTrash } from 'react-icons/fa';

interface Image {
	image: string;
}

const DUMMY_IMAGES: Image[] = [
	{ image: Photo1Image },
	{ image: Photo2Image },
	{ image: Photo1Image },
	{ image: Photo2Image },
	{ image: Photo1Image },
	{ image: Photo2Image}
];

const AdminPhotos = () => {
	const itemsPerPage = 5;
	const [image, setImage] = useState<File | null>(null);
	const [visibleLogos, setVisibleLogos] = useState(
		DUMMY_IMAGES.slice(0, itemsPerPage),
	);

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
	}

	const loadMore = () => {
		const currentLength = visibleLogos.length;
		const nextLogos = DUMMY_IMAGES.slice(
			0,
			currentLength + itemsPerPage,
		);
		setVisibleLogos(nextLogos);
	};

	const handleSubmit = () => {

  };

  const handleCancel = () => {
		setImage(null);
  };

	return (
		<div
			className={styles.container}
		>
			<div
				className={styles.header}
			>
				<h2
					className={styles.title}
				>
					Фото
				</h2>
			</div>
			<div
				className={styles.buttonsWrapper}
			>
				<div
					className={styles.inputContainer}
				>
					<label
						className={styles.uploadLabel}
						htmlFor="imageInput"
					>
						<FaUpload
							className={styles.uploadIcon}
						/>
						{image ? image.name : 'Завантажте зображення'}
					</label>
					<input
						type="file"
						id="imageInput"
						onChange={handleImageChange}
						accept="image/*"
					/>
				</div>
				<div
					className={styles.buttonRow}
				>
					<button
						onClick={handleSubmit}
					>
						Додати
					</button>
					<button
						onClick={handleCancel}
					>
						Очистити
					</button>
				</div>
			</div>
			<div className={styles.logoContainer}>
				{visibleLogos.map((logo, index) => (
					<div key={index} className={styles.logo}>
						<img src={logo.image} />
						<div className={styles.logoActions}>
							<FaTrash className={styles.deleteIcon} />
						</div>
					</div>
				))}
			</div>
			{visibleLogos.length < DUMMY_IMAGES.length && (
				<div className={styles.loadMore}>
					<button onClick={loadMore} className={styles.loadButton}>
						Більше фото
					</button>
				</div>
			)}
		</div>
	);
};

export default AdminPhotos;
