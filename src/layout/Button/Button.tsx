import * as React from 'react';

import styles from './Button.module.scss';

interface IButtonProps {
	name?: string;
	btnClasses: string;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	children?: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({
	name,
	btnClasses,
	onClick,
	type,
	disabled,
	children,
}) => {
	return (
		<button
			className={[styles.button, btnClasses && styles[btnClasses]].join(
				' ',
			)}

			disabled={disabled}
			type={type}
			onClick={onClick}
		>
			{name}
			{children}
		</button>
	);
};

export default Button;
