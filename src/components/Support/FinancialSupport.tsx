import { FaPaw } from 'react-icons/fa6';
import { t } from 'i18next';
import { useState } from 'react';

import Button from '../../layout/Button/Button';
import ButtonSupport from './ButtonSupport';
import style from './FinancialSupport.module.scss';
import { mono, paypal, privat } from '../../assets/support';
import { useModalContext } from '../../context/useGlobalContext';

const data = [
	{ link: 'monobank', src: mono },
	{
		link: 'https://next.privat24.ua/payments/form/%7B"token":"710aef78-49fb-4b1e-adf9-a56c7f923036"%7D',
		src: privat,
	},
	{ link: 'paypal', src: paypal },
];

const FinancialSupport = () => {
	const [link, setLink] = useState<undefined | string>('');
	const { openModal, activateModal } = useModalContext();

	const onHandleClick = (e: React.SyntheticEvent<EventTarget>) => {
		const target = e.currentTarget as HTMLButtonElement;
		// console.log(target.dataset.link);
		setLink(target.dataset.link);
	};

	const onHandleLinkClick = () => {
		// console.log('thanks');
		window.open(link, '_blank');
		setLink('');
		openModal();
		activateModal('thanks');
		// console.log('after');
	};

	return (
		<>
			<div className={style.box__buttons}>
				{data.map(({ link, src }, index) => (
					<ButtonSupport
						link={link}
						src={src}
						onClick={onHandleClick}
						key={index}
					/>
				))}
			</div>
			<Button
				btnClasses='primary'
				type='button'
				name={t('support.button')}
				onClick={onHandleLinkClick}
				disabled={!link}
				children={
					<div className={style.icon}>
						<FaPaw />
						<FaPaw />
					</div>
				}
			></Button>
		</>
	);
};

export default FinancialSupport;
