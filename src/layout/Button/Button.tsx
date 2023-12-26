import styles from './Button.module.scss';
import * as React from 'react';


interface IButtonProps {
	name?: string;
	btnClasses?: string;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	styleBtn?: React.CSSProperties;
	children?: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({
											name,
											btnClasses,
											onClick,
											type,
											disabled,
											styleBtn,
											children,
										}) => {

	return (
		<button
			className={[styles.button, btnClasses && styles[btnClasses]].join(' ')}
			disabled={disabled}
			type={type}
			onClick={onClick}
			style={styleBtn}
		>
			{name}
			{children}
		</button>
	);
};

export default Button;
