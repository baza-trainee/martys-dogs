import { Link } from 'react-router-dom';
import { FaRegPlusSquare } from 'react-icons/fa';
import styles from './AddButton.module.scss';

type AddButtonProps = {
	path: string;
	text: string;
};

const AddButton: React.FC<AddButtonProps> = ({ path, text }) => {
	return (
		<Link to={`/admin/${path}`}>
			<button className={styles.addButton}>
				<FaRegPlusSquare />
				Додати {text}
			</button>
		</Link>
	);
};

export default AddButton;
