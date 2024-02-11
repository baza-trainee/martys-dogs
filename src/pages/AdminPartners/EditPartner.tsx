import React from 'react';
import ChangePartners from './ChangePartners';
import { requestAdminPage } from '../../services/adminPartners';
import { useLocation, useNavigate} from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createFormData } from './ChangePartners';
import { transformFormData } from './ChangePartners';
import { PartnersStateType } from './ChangePartners';


const EditPartner: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();
  
	const partnerId = new URLSearchParams(location.search).get('id');
  
	console.log('Editing partner with ID:', partnerId);
	if (!partnerId) {
		return <div>Error: Partner ID is undefined</div>;
	}
	const editPartnerMutation = useMutation({
		mutationFn: (data: PartnersStateType) =>
			requestAdminPage('PATCH', `/partners/${partnerId}`, data),
	});
	const queryClient = useQueryClient();

	const handleSubmit = async (state: PartnersStateType) => {
		const formData = createFormData(state);

		editPartnerMutation.mutate(transformFormData(formData), {
			onSuccess: () => {
				console.log('Edit partner successful!');
				queryClient.invalidateQueries({ queryKey: ['partners'] });
				navigate('/admin/partners');
			},
			onError: () => {
				console.error('Edit partner failed!');
			},
		});
	};

	return (
		<ChangePartners
			title='Редагування'
			submitButtonName='Зберегти зміни'
			onSubmit={handleSubmit}
		/>
	);
};

export default EditPartner;
