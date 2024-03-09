import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Monobank.module.scss';

const Monobank: FC = () => {
	const [isCopied, setIsCopied] = useState(false);
	const { t } = useTranslation();
	const text = '4441 1144 4663 3370';

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
				<h2>monobank</h2>
				<h5>
					{t('monobank.card')}{' '}
					<span className={styles.span}>{t('monobank.martha')}</span>
				</h5>
				<h5 className={styles.number}>{text}</h5>
				<button onClick={handleCopyClick} className={styles.button}>
					{isCopied ? t('monobank.copied') : t('monobank.copy')}
				</button>
			</div>
		</main>
	);
};

export default Monobank;
