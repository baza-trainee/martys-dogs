import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Paypal.module.scss';

const Paypal: FC = () => {
	const [isCopied, setIsCopied] = useState(false);
	const { t } = useTranslation();
	const text = 'cityofgoodnessukr@gmail.com';

	const handleCopyClick = () => {
		navigator.clipboard.writeText(text);
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 3000);
	};

	return (
		<main className={styles.login}>
			<div className={styles.form}>
				<h2>PayPal</h2>
				<h5>
					{t('paypal.email')}{' '}
					<span className={styles.span}>Good City</span>
				</h5>
				<h5 className={styles.number}>{text}</h5>
				<button onClick={handleCopyClick} className={styles.button}>
					{isCopied ? t('paypal.copied') : t('paypal.copy')}
				</button>
			</div>
		</main>
	);
};

export default Paypal;
