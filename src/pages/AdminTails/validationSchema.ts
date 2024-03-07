import { FormData } from './TailForm';
import * as React from 'react';


type TouchedState = Record<string, boolean>;
type ErrorsState = Record<string, string>;


const nameRegex = /^[А-Яа-яҐґЄєІіЇї\s'`’ʼ-]*$/;
const nameEnRegex = /^[A-Za-z\s'`’ʼ-]*$/;
const ageRegex = /^[0-9]+[\s,.]*[0-9]*[\s]*[А-Яа-яҐґЄєІіЇї]+$/;
const ageEnRegex = /^[0-9]+[\s,.]*[0-9]*[\s]*[A-za-z]+$/;
const descriptionRegex = /^[^a-zA-Z]+$/;
const descriptionEnRegex = /^[^\u0400-\u04FF]+$/;

export const validateName = (formData: FormData, touched: TouchedState, setErrors: React.Dispatch<React.SetStateAction<ErrorsState>>) => {

	if (touched.name) {
		if (formData.name.trim().length < 2) {
			setErrors((prevErrors) => ({ ...prevErrors, name: 'Введіть щонайменше 2 символи' }));
		} else if (!nameRegex.test(formData.name)) {
			setErrors((prevErrors) => ({
				...prevErrors,
				name: 'Дозволена кирилиця, пробіл, дефіс, апостроф',
			}));
		} else {
			setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
		}
	}

	if (touched.name_en) {
		if (formData.name_en !== undefined && !nameEnRegex.test(formData.name_en)) {
			setErrors((prevErrors) => ({
				...prevErrors,
				name_en: 'Дозволена латиниця, пробіл, дефіс, апостроф',
			}));
		} else {
			setErrors((prevErrors) => ({ ...prevErrors, name_en: '' }));
		}
	}

};


export const validateDescription = (formData, touched, setErrors) => {
	if (touched.description) {
		if (formData.description.trim().length < 10) {
			setErrors((prevErrors) => ({ ...prevErrors, description: 'Введіть щонайменше 10 символів' }));
		} else if (!descriptionRegex.test(formData.description)) {
			setErrors((prevErrors) => ({
				...prevErrors,
				description: 'Дозволена кирилиця, цифри та будь-які символи',
			}));
		} else {
			setErrors((prevErrors) => ({ ...prevErrors, description: '' }));
		}
	}


	if (touched.description_en) {
		if (formData.description_en !== undefined && !descriptionEnRegex.test(formData.description_en)) {
			setErrors((prevErrors) => ({
				...prevErrors,
				description_en: 'Дозволена латиниця, цифри та будь-які символи',
			}));
		} else {
			setErrors((prevErrors) => ({ ...prevErrors, description_en: '' }));
		}
	}

};

export const validateAge = (formData, touched, setErrors) => {
	if (touched.age) {
		if (formData.age.trim().length < 5) {
			setErrors((prevErrors) => ({ ...prevErrors, age: 'Введіть щонайменше 5 символів' }));
		} else if (!ageRegex.test(formData.age.trim())) {
			setErrors((prevErrors) => ({
				...prevErrors,
				age: 'Почніть з цифри, а далі можна ввести кирилицю, крапку, кому',
			}));
		} else {
			setErrors((prevErrors) => ({ ...prevErrors, age: '' }));
		}
	}


	if (touched.age_en) {
		if (formData.age_en !== undefined && !ageEnRegex.test(formData.age_en.trim())) {
			setErrors((prevErrors) => ({
				...prevErrors,
				age_en: 'Почніть з цифри, а далі можна ввести латиницю, крапку, кому',
			}));
		} else {
			setErrors((prevErrors) => ({ ...prevErrors, age_en: '' }));
		}
	}

};


export const validateSelects = (formData, touched, setErrors) => {
	if (touched.gender) {
		if (formData.gender === '') {
			setErrors((prevErrors) => ({
				...prevErrors,
				gender: `Значення є обов'язковим`,
			}));
		} else {
			setErrors((prevErrors) => ({ ...prevErrors, gender: '' }));
		}
	}

	if (touched.size) {
		if (formData.size === '') {
			setErrors((prevErrors) => ({
				...prevErrors,
				size: `Значення є обов'язковим`,
			}));
		} else {
			setErrors((prevErrors) => ({ ...prevErrors, size: '' }));
		}
	}

};

export const validateFile = (formData, touched, setErrors) => {
	const maxSize = 5 * 1024 * 1024; // 5MB
	const supportedImageFormats = ['image/jpeg', 'image/png', 'image/webp'];
	// const file = formData.photo;
	const file = formData.photo?.[0];
	if (touched.photo) {
		if (file && file.size > maxSize) {
			console.log(`file.size ${file.size}`);
			setErrors((prevErrors) => ({
				...prevErrors,
				photo: `Максимальний розмір 5MB`,
			}));
		} else if (file && !supportedImageFormats.includes(file.type)) {
			console.log(`file.type ${file.type}`);
			setErrors((prevErrors) => ({
				...prevErrors,
				photo: `Оберіть зображення формату jpeg, png, webp`,
			}));
		} else {
			setErrors((prevErrors) => ({ ...prevErrors, photo: '' }));
		}
	}
};


