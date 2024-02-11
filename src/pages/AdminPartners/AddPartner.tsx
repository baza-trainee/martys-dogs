import React from 'react';
import ChangePartners from './ChangePartners';
import { useMutation, useQueryClient} from '@tanstack/react-query';
import { useNavigate} from 'react-router-dom';
import { PartnersStateType } from './ChangePartners';
import { requestAdminPage } from '../../services/adminPartners';
import { createFormData } from './ChangePartners';
import { transformFormData } from './ChangePartners';


const AddPartner: React.FC = () => {
	const navigate = useNavigate();

  const addPartnerMutation = useMutation({
    mutationFn:(data: PartnersStateType) => requestAdminPage('POST', '/partners', data)
});

  const handleSubmit = (state: PartnersStateType) => {
    const formData = createFormData(state);

    console.log('Transformed Form Data:', transformFormData(formData));

    addPartnerMutation.mutate(transformFormData(formData), {
      onSuccess: () => {
        console.log('Add partner successful!');
        navigate('/admin/partners');
      },
      onError: () => {
        console.error('Add partner failed!');
      },
    });
  };

  return (
    <ChangePartners
      title="Додати партнера"
      submitButtonName="Додати"
      onSubmit={handleSubmit}
    />
  );
};

export default AddPartner;