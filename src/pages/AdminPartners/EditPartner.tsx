import React from 'react';
import ChangePartners from './ChangePartners';

const EditPartner: React.FC = () => {
  return (
    <ChangePartners
      title="Редагування"
      labelName="Назва"
      labelImage="Логотип"
      labelWeb='Сайт партнера'
      placeholderName="Введіть назву"
      placeholderWeb="Додайте посилання"
      submitButtonName="Зберегти зміни"
      cancelButtonName="Скасувати"
    />
  );
};

export default EditPartner;