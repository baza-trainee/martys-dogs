import { Link } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa';
import styles from './ItemActions.module.scss';

type ActionsProps = {
	path: string;
	onDeleteClick: ()=> void;
	onEditClick: ()=>void;
};

const ItemActions: React.FC<ActionsProps> = ({ path, onDeleteClick,onEditClick }) => {
	return (
		<div className={styles.itemActions}>
			<Link to={`/admin/${path}`} className={styles.link} >
			<button type='button' className={styles.editIcon} onClick={onEditClick}>
			<FaEdit className={styles.editIcon} />
			</button>
				{/* <FaEdit className={styles.editIcon} /> */}
			</Link>
			<button type='button' className={styles.deleteIcon} onClick={onDeleteClick}>
				<FaTrash className={styles.deleteIcon} />
			</button>
		</div>
	);
};

export default ItemActions;
