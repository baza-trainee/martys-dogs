import styles from './SubmitBtn.module.scss';
import { useNavigation } from 'react-router-dom';

interface SubmitBtnProps {
	text?: string;
}

const SubmitBtn: React.FC<SubmitBtnProps> = ({ text }) => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === 'submitting';

	return (
		<button type='submit' className={styles.button}>
			{isSubmitting ? (
				<>
					<span className={styles.loading}></span>Sending...
				</>
			) : (
				text || 'submit'
			)}
		</button>
	);
};

export default SubmitBtn;
