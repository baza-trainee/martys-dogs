import { FC, useState } from 'react';

import styles from './Monobank.module.scss';

const Monobank: FC = () => {
	const [isCopied, setIsCopied] = useState(false);
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
					Карта керівника{' '}
					<span className={styles.span}>Марти Левченко</span>
				</h5>
				<h5 className={styles.number}>{text}</h5>
				<button onClick={handleCopyClick} className={styles.button}>
					{isCopied ? 'Скопійовано!' : 'Скопіювати'}
				</button>
			</div>
		</main>
	);
};

export default Monobank;
