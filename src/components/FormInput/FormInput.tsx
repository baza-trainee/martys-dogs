import styles from './FormInput.module.scss';

interface FormInputProps {
	label: string;
	id: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
	label,
	id,
	value,
	onChange
}) => {
	return (
		<div className={styles.form}>
			<label htmlFor={id} className={styles.label}>
				<span className={styles.text}>{label}</span>
			</label>
			<input
				type={id}
				id={id}
				value={value}
				onChange={onChange}
				className={styles.input}
			/>
		</div>
	);
};

export default FormInput;
