import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import styles from './AdminPhotos.module.scss';
import { FaUpload, FaTrash } from 'react-icons/fa';
import { useAuthContext } from '../../context/useGlobalContext';
import { getAdminPhotos, deletePhoto, uploadPhoto } from '../../services/adminPhotos';
import { queryClient } from '../../App';
import { ErrorAlert, Loader } from '../../components/CommonUI/LoaderAndError/LoaderAndError';

interface PhotoAdminData {
	id: string;
	name: string;
	url: string;
	category: string;
}

interface QueryGetPhotos {
	images: PhotoAdminData[]
}

const AdminPhotos = () => {
	const { token } = useAuthContext();
	const [photos, setPhotos] = useState<PhotoAdminData[]>([]);
	const itemsPerPage = 5;
	const [image, setImage] = useState<File | null>(null);
	const [visibleImages, setVisibleImages] = useState<PhotoAdminData[]>([]);
	const [buttonLoader, setButtonLoader] = useState<boolean>(false);
	const [buttonError, setButtonError] = useState<string>('');

	const { data, isPending, isError } = useQuery<QueryGetPhotos[], Error>({
    queryKey: ['photoAdmin'],
		queryFn: () => typeof token === 'string' ? getAdminPhotos(token) : Promise.resolve([]),
		refetchInterval: 600000,
		enabled: !!token,
	});

	const { mutate: deleteMutate } = useMutation({
		mutationFn: deletePhoto,
		onSuccess: () => {
			setButtonLoader(false);
			setButtonError("");
			queryClient.invalidateQueries({ queryKey: ['photoAdmin'], exact: true });
		},
		onError: () => {
			setButtonLoader(false);
			setButtonError("Видалення не вдалося, перезавантажте сторінку");
		}
	});

	const { mutate: uploadMutate } = useMutation({
		mutationFn: uploadPhoto,
		onSuccess: () => {
			setImage(null);
			setButtonLoader(false);
			setButtonError("");
			queryClient.invalidateQueries({ queryKey: ['photoAdmin'], exact: true });
		},
		onError: () => {
			setButtonLoader(false);
			setButtonError("Фото не додалося, перезавантажте сторінку");
		}
	});

	useEffect(() => {
    if (data && data.length > 0) {
			setPhotos(data[0].images);
			setVisibleImages(data[0].images.slice(0, itemsPerPage));
		}
  }, [data, deleteMutate, uploadMutate]);

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];

    if (file) {
      setImage(file);
    }
	}

	const loadMore = () => {
		const currentLength = visibleImages.length;
		const nextLogos = photos.slice(
			0,
			currentLength + itemsPerPage,
		);
		setVisibleImages(nextLogos);
	};

	const handleSubmit = () => {
		if (token && image) {
			setButtonLoader(true);
			const formData = new FormData();
			formData.append('images', image);

			console.log(formData);

			uploadMutate({ token, imageData: formData });
		}
  };

	const handleDeleteImage = async (photoId: string) => {
		if (token) {
			setButtonLoader(true);
			deleteMutate({ fileId: photoId, token });
		}
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
						onClick={() => setImage(null)}
					>
						Очистити
					</button>
				</div>
				{buttonLoader && <Loader />}
				{buttonError && <ErrorAlert errorMessage={buttonError} backgroundColor="rgba(255, 0, 0, 0.3)" />}
			</div>
			{isPending && !data && (
				<Loader />
			)}
			{isError && !data && (
				<ErrorAlert
				errorMessage="Помилка завантаження, перезавантажте сторінку"
				/>
			)}
			{data && (
				<>
					<div className={styles.logoContainer}>
						{visibleImages.map((logo, index) => (
							<div key={index} className={styles.logo}>
								<img src={logo.url} />
								<div className={styles.logoActions}>
									<FaTrash
										className={styles.deleteIcon}
										onClick={() => handleDeleteImage(logo.id)}
									/>
								</div>
							</div>
						))}
					</div>
					{visibleImages.length < photos.length && (
						<div className={styles.loadMore}>
							<button onClick={loadMore} className={styles.loadButton}>
								Більше фото
							</button>
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default AdminPhotos;
