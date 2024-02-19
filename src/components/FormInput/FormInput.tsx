import styles from './FormInput.module.scss';

interface FormInputProps {
	label: string;
	id: string;
	name: string;
	type:'email' | 'text' | 'password';
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	errorMessage?: string;
}

const FormInput: React.FC<FormInputProps> = ({
	label,
	id,
	name,
	type,
	value,
	onChange,
	errorMessage
}) => {
	return (
		<div className={styles.form}>
			<label htmlFor={id} className={styles.label}>
				<span className={styles.text}>{label}</span>
			</label>
			<input
				id={id}
				name={name}
				type={type}
				value={value}
				onChange={onChange}
				className={styles.input}
			/>
			{errorMessage && ( 
        <span className={styles.error}>{errorMessage}</span>
      )}
		</div>
	);
};

export default FormInput;
