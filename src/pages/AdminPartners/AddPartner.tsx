import React from 'react';
import ChangePartners from './ChangePartners';

const AddPartner: React.FC = () => {
  return (
    <ChangePartners
      title="Додати партнера"
      labelName="Назва"
      labelImage="Логотип"
      labelWeb='Сайт партнера'
      placeholderName="Введіть назву"
      placeholderWeb="Додайте посилання"
      submitButtonName="Додати"
      cancelButtonName="Скасувати"
    />
  );
};

export default AddPartner;