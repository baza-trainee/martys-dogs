import React, { useState } from 'react';
import { FaPaw } from 'react-icons/fa6';

import style from './FinancialSupport.module.scss';
import Button from '../../layout/Button/Button';
import ButtonSupport from './ButtonSupport';
import { mono, privat, paypal } from '../../assets/support';
import { useModalContext } from '../../context/useGlobalContext';

const data = [
	{ link: 'https://www.monobank.ua/', src: mono },
	{ link: 'https://privatbank.ua/udalenniy-banking/privat24', src: privat },
	{ link: 'https://www.paypal.com/cz/home', src: paypal },
];

const FinancialSupport = () => {
	const [link, setLink] = useState<undefined | string>('');
	console.log(link);
	const { openModal } = useModalContext();

	const onHandleClick = (e: React.SyntheticEvent<EventTarget>) => {
		const target = e.currentTarget as HTMLButtonElement;
		console.log(target.dataset.link);
		setLink(target.dataset.link);
	};

	const onHandleLinkClick = () => {
		// if (!link) {
		//   alert('Будь-ласка, виберить метод оплати')
		// } else {
		//   window.open(link,'_blank')
		// }
		window.open(link, '_blank');
		openModal();
	};

	return (
		<div className={style.container}>
			<div className={style.box__description}>
				<h2 className={style.title}>Допоможіть нам фінансово</h2>
				<p className={style.description}>
					Ваша допомога робить чудеса: підтримайте нас сьогодні.
				</p>
			</div>
			<div className={style.box__buttons}>
				{data.map(({ link, src }) => (
					<ButtonSupport
						link={link}
						src={src}
						onClick={onHandleClick}
					/>
				))}
			</div>
			<Button
				btnClasses='primary'
				type='button'
				name='Допомогти фінансово'
				onClick={onHandleLinkClick}
				disabled={!link}
				children={
					<div className={style.icon}>
						<FaPaw />
						<FaPaw />
					</div>
				}
			></Button>
		</div>
	);
};

export default FinancialSupport;
