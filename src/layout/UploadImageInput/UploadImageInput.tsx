import {
	UseFormRegisterReturn,
	FieldErrors,
	// UseFormWatch,
	// FieldValues,
} from 'react-hook-form';
import { FaUpload } from 'react-icons/fa';
import styles from './UploadImageInput.module.scss';

type UploadImageInputProps = {
	register: UseFormRegisterReturn;
	watch: (fieldName: string) => FileList;
	value?: string;
	id?: string;
	errorMessage?: string;
};

const UploadImageInput: React.FC<UploadImageInputProps> = ({
	register,
	watch,
	errorMessage,
}) => {
	return (
		<div className={styles.wrapper}>
			<label htmlFor='image' className={styles.image}>
				<input
					{...register}
					type='file'
					id='image'
					placeholder='Upload photo'
					accept='image/*'
				/>
				<FaUpload className={styles.icon} />
				<span className={styles.text}>
					{watch('photo') && watch('photo').length > 0
						? watch('photo')[0].name
						: 'Завантажте зображення'}
				</span>
			</label>
			<p className={styles.error}>{errorMessage}</p>
		</div>
	);
};

export default UploadImageInput;
