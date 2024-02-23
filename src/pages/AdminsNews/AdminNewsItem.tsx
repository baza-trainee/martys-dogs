import { useMutation, useQueryClient } from '@tanstack/react-query';
import ItemActions from '../../components/CommonUI/ItemActions/ItemActions';
import { deleteNews } from '../../services/adminNews';
import NewsItem,{ NewsItemProps} from '../../components/News/NewsItem';
import { Loader, ErrorAlert } from '../../components/CommonUI/LoaderAndError/LoaderAndError';
import { useAuthContext } from '../../context/useGlobalContext';

const AdminNewsItem: React.FC<NewsItemProps> = (item) => {

	const { token } = useAuthContext();
	const queryClient = useQueryClient();
	const {mutate, isError, isPending} = useMutation({
		mutationFn: deleteNews,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['news'],exact: true  });
		},
	});

	const deleteNewsHandler=(id:number)=>{
if (token) {
	mutate({id, token});
}
	}

	if (isPending) {
		return (
			<Loader/>
		);
	}

	if (isError) {
		return (
			<ErrorAlert errorMessage='На жаль сталася помилка, перезавантажте  сторінку'/>
		);
	}

	return (
		<NewsItem  {...item} needTranslate={false}>
				<ItemActions path={`news_edit/${item.id}`} onDeleteClick={()=>deleteNewsHandler(item.id)} />
		</NewsItem>
	);
};

export default AdminNewsItem;
