import React, { useState } from 'react';
import styles from './ChangePartners.module.scss';
import { FaUpload } from 'react-icons/fa';


interface Props {
  title: string;
  labelName: string;
  labelImage: string;
  labelWeb:string;
  placeholderName: string;
  placeholderWeb: string;
  submitButtonName: string;
  cancelButtonName: string;
}

interface State {
  inputName: string;
  inputWeb: string;
  image: File | null;
}

const ChangePartners: React.FC<Props> = ({
  title,
  labelName,
  labelImage,
  labelWeb,
  placeholderName,
  placeholderWeb,
  submitButtonName,
  cancelButtonName,
}) => {
  const initialState: State = {
    inputName: '',
    inputWeb: '',
    image: null,
  };

  const [state, setState] = useState<State>(initialState);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setState((prev) => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = () => {
    //дописати функцію 
    console.log('Submit clicked!');
  };

  const handleCancel = () => {
   //дописати функцію
    console.log('Cancel clicked!');
  };

  return (
    <div className={styles.container}>
      <h2>{title}</h2>

      <div className={styles.inputRow}>
        <div className={styles.inputContainer}>
          <label htmlFor="name">{labelName}:</label>
          <input
            type="text"
            id="name"
            value={state.inputName}
            onChange={(e) => setState((prev) => ({ ...prev, inputName: e.target.value }))}
            placeholder={placeholderName}
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="imageInput">{labelImage}:</label>
          <label className={styles.uploadLabel} htmlFor="imageInput">
            <FaUpload className={styles.uploadIcon} />
            {state.image ? state.image.name : 'Завантажте зображення'}
          </label>
          <input
            type="file"
            id="imageInput"
            onChange={handleImageChange}
            accept="image/*"
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="website">{labelWeb}:</label>
          <input
            type="text"
            id="website"
            value={state.inputWeb}
            onChange={(e) => setState((prev) => ({ ...prev, inputWeb: e.target.value }))}
            placeholder={placeholderWeb}
          />
        </div>
      </div>

      <div className={styles.buttonRow}>
        <button onClick={handleSubmit}>{submitButtonName}</button>
        <button onClick={handleCancel}>{cancelButtonName}</button>
      </div>
    </div>
  );
};

export default ChangePartners;