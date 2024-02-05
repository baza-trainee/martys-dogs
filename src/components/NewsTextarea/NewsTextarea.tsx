import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './NewsTextarea.module.scss';

type NewsTextareaProps = {
	label?: string;
	register: UseFormRegisterReturn;
	errorMessage?: string;
	id: string;
	placeholder: string;
	maxLength?: number;
};

const NewsTextarea: React.FC<NewsTextareaProps> = ({
	label,
	register,
	errorMessage,
	id,
	placeholder,
	maxLength,
}) => {
	return (
		<div className={styles.wrapper}>
			<label htmlFor={id} className={styles.label}>
				<span className={styles.text}>{label}</span>
				<textarea
					className={styles.textarea}
					{...register}
					rows={6}
					id={id}
					placeholder={placeholder}
					maxLength={maxLength}
				/>
			</label>
			<p className={styles.error}>{errorMessage}</p>
		</div>
	);
};

export default NewsTextarea;
