import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './HookFormInput.module.scss';

type InputProps = {
	label?: string;
	register: UseFormRegisterReturn;
	errorMessage?: string;
	type: string;
	id: string;
	placeholder: string;
	maxLength?: number;
};

const HookFormInput: React.FC<InputProps> = ({
	label,
	register,
	errorMessage,
	type,
	id,
	placeholder,
	maxLength,
}) => {
	return (
		<div className={styles.wrapper}>
			<label htmlFor={id} className={styles.label}>
				<span className={styles.text}>{label}</span>
				<input
					className={styles.input}
					{...register}
					type={type}
					id={id}
					placeholder={placeholder}
					maxLength={maxLength}
				/>
			</label>
			<p className={styles.error}>{errorMessage}</p>
		</div>
	);
};

export default HookFormInput;
