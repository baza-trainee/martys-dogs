import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import ItemActions from '../../components/CommonUI/ItemActions/ItemActions';
import { deleteNews } from '../../services/adminNews';
import styles from './AdminNewsItem.module.scss';
import { Loader } from '../../components/CommonUI/LoaderAndError/LoaderAndError';

export interface NewsItemProps {
	id: number;
	title: string;
	post_at: string;
	// update_at: string;
	sub_text: string;
	// url: string;
	photo: {
		// id: string;
		// name: string;
		url: string;
		// category: string;
	};
}

const NewsItem: React.FC<NewsItemProps> = ({
	id,
	title,
	post_at,
	// update_at,
	sub_text,
	photo,
	// url,
}) => {
	const months: { [key: string]: string } = {
		січень: 'січня',
		лютий: 'лютого',
		березень: 'березня',
		квітень: 'квітня',
		травень: 'травня',
		червень: 'червня',
		липень: 'липня',
		серпень: 'серпня',
		вересень: 'вересня',
		жовтень: 'жовтня',
		листопад: 'листопада',
		грудень: 'грудня',
	};

	const getDateName = (data: string) => {
		const date = new Date(data);
		const monthFromDate = date.toLocaleString('uk-UA', { month: 'long' });
		const changedMonth = months[monthFromDate];
		const stringDate = `${date.getDate()} ${changedMonth} ${date.getFullYear()}`;
		return stringDate;
	};


	const queryClient = useQueryClient();
	const navigate=useNavigate()
	const {mutate, isError, isPending, error} = useMutation({
		mutationFn: (id:number) =>
			deleteNews(id).then((item) => console.log(item)),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['news'] });
		},
	});

	const deleteNewsHandler=(id:number)=>{
console.log('delete news')
mutate(id);
	}

	const editNewsHandler=(id:number)=>{
		console.log(id)
		navigate(`news_edit:${id}`)
			}

	if (isPending) {
		return (
			<Loader/>
		);
	}

	if (isError) {
		return (
			<div className={styles.container}>
				<div className={styles.alert}>{error.message}</div>
			</div>
		);
	}

	return (
		<li className={styles.item}>
			<div className={styles.thumb}>
				<img src={photo.url} alt='photo' className={styles.photo} />
			</div>
			<div className={styles.info}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.date}>{getDateName(post_at)}</p>
				<p className={styles.text}>{sub_text}</p>
			</div>
			<ItemActions path={`news_edit/${id}`} onDeleteClick={()=>deleteNewsHandler(id)} onEditClick={()=>editNewsHandler(id)} />
		</li>
	);
};

export default NewsItem;
