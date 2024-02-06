import { Link } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa';
import styles from './ItemActions.module.scss';

type ActionsProps = {
	path: string;
	onClick: ()=> void
};

const ItemActions: React.FC<ActionsProps> = ({ path,onClick }) => {
	return (
		<div className={styles.itemActions}>
			<Link to={`/admin/${path}`} className={styles.link}>
				<FaEdit className={styles.editIcon} />
			</Link>
			<button type='button' className={styles.deleteIcon} onClick={onClick}>
				<FaTrash className={styles.deleteIcon} />
			</button>
		</div>
	);
};

export default ItemActions;
