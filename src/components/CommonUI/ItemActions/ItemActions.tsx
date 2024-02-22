import { Link } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa';
import styles from './ItemActions.module.scss';

type ActionsProps = {
	path: string;
	onDeleteClick: ()=> void;
};

const ItemActions: React.FC<ActionsProps> = ({ path, onDeleteClick }) => {
	return (
		<div className={styles.itemActions}>
			<Link to={`/admin/${path}`} className={styles.link} >
			<button type='button' className={styles.editIcon}>
			<FaEdit className={styles.editIcon} />
			</button>
			</Link>
			<button type='button' className={styles.deleteIcon} onClick={onDeleteClick}>
				<FaTrash className={styles.deleteIcon} />
			</button>
		</div>
	);
};

export default ItemActions;
