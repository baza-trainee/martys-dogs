import * as React from 'react';
import Select from 'react-select';
import ArrowIconUp from '../../assets/dropdown_arrow_up.svg';
import ArrowIconDown from '../../assets/dropdown_arrow_down.svg';



interface OptionType {
	value: string;
	label: string;
}

interface CustomStyles {
	control?: (provided: any, state: any) => any;
	dropdownIndicator?: (provided: any) => any;
	indicatorSeparator?: () => any;
	menu?: (provided: any) => any;
	option?: (provided: any) => any;
}

export const optionsGenderUA: OptionType[] = [
	{ value: '', label: 'Оберіть стать' },
	{ value: 'хлопчик', label: 'Хлопчик' },
	{ value: 'дівчинка', label: 'Дівчинка' },
];


export const optionsSizeUA: OptionType[] = [
	{ value: '', label: 'Оберіть розмір' },
	{ value: 'маленький', label: 'Маленький' },
	{ value: 'середній', label: 'Середній' },
	{ value: 'великий', label: 'Великий' },
];


export const optionsGenderEN: OptionType[] = [
	{ value: '', label: 'Оберіть стать' },
	{ value: 'boy', label: 'Boy' },
	{ value: 'girl', label: 'Girl' },
];


export const optionsSizeEN: OptionType[] = [
	{ value: '', label: 'Оберіть розмір' },
	{ value: 'small', label: 'Small' },
	{ value: 'medium', label: 'Medium' },
	{ value: 'large', label: 'Large' },
];


export const customStyles: CustomStyles = {
	control: (provided, state) => ({
		...provided,
		padding: '6px 16px',
		borderRadius: '40px',
		borderColor: '#b6e1f2',
		color: '#858585',
		fontSize: '20px',
		fontWeight: 500,
		cursor: 'pointer',
		position: 'relative',
		'&:hover': {
			borderColor: '#b6e1f2',
		},
		'&:before': {
			content: '""',
			backgroundImage: state.menuIsOpen ? `url(${ArrowIconUp})` : `url(${ArrowIconDown})`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: '24px 24px',
			width: '24px',
			height: '24px',
			position: 'absolute',
			right: '8px',
			top: '50%',
			transform: 'translateY(-50%)',
		},
	}),
	indicatorSeparator: () => ({
		display: 'none',
	}),
	dropdownIndicator: (provided) => ({
		...provided,
		display: 'none',
	}),
	menu: (provided) => ({
		...provided,
		borderRadius: '24px',
		boxShadow: '0 0 0 1px #b6e1f2',
	}),
	option: (provided) => ({
		...provided,
		backgroundColor: 'white',
		cursor: 'pointer',
		color: '#0D0031',
		borderRadius: '24px',
		'&:hover': {
			color: '#009cd9',
		},
	}),
};
