import React, { PropsWithChildren, SyntheticEvent } from 'react';
import { Slot } from '@radix-ui/react-slot';
import c from 'classnames';
// import styles from './Button.module.css';
import styles from './Button.module.css';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
	title?: string;
	disabled?: boolean;
  label?: string;
	onClick?: (e: SyntheticEvent | string | number | boolean) => void;
	type?: 'submit';
	asChild?: boolean;
  ref?: React.RefObject<HTMLButtonElement>;
	className?: string;
}

const Button = ({
	asChild,
	disabled,
	children,
  label,
	className,
	title,
	onClick,
  ref,
	...props
}: PropsWithChildren<ButtonProps>) => {
	const Comp = asChild && typeof children !== 'string' ? Slot : 'button';

	return (
		<Comp
      ref={ref}
			className={c(styles.root, className)}
			onClick={(e: SyntheticEvent) => onClick?.(e)}
			disabled={disabled}
			title={title}
			{...props}
		>
			{children || label}
		</Comp>
	);
};

export default Button;
