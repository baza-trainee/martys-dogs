import React, { useState } from 'react';
import { FaPaw } from 'react-icons/fa6';

import style from './FinancialSupport.module.scss';
import Button from '../../layout/Button/Button';
import ButtonSupport from './ButtonSupport';
import { mono, privat, paypal } from '../../assets/support';
import { useModalContext } from '../../context/useGlobalContext';
import { t } from 'i18next';

const data = [
	{ link: 'https://www.monobank.ua/', src: mono },
	{ link: 'https://privatbank.ua/udalenniy-banking/privat24', src: privat },
	{ link: 'https://www.paypal.com/cz/home', src: paypal },
];

const FinancialSupport = () => {
	const [link, setLink] = useState<undefined | string>('');
	console.log(link);
	const { openModal, activateModal } = useModalContext();

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
		console.log('thanks');
		window.open(link, '_blank');
		openModal();
		activateModal('thanks');
		console.log('after');
	};

  return (
    <>
      <div className={style.box__buttons}>
        {data.map(({link, src},index)=>(
          <ButtonSupport link={link} src={src} onClick={onHandleClick} key={index} />
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
  )
}

export default FinancialSupport;
