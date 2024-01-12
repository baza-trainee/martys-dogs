import styles from './FormInput.module.scss';

interface FormInputProps {
	label: string;
	name: string;
	type: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, name, type }) => {
	return (
		<div className={styles.form}>
			<label className={styles.label}>
				<span className={styles.text}>{label}</span>
			</label>
			<input type={type} name={name} className={styles.input} />
		</div>
	);
};

export default FormInput;
