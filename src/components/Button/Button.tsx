import type { ThemeComponentSize } from '../../theme/types';

import React, {
	forwardRef,
	type PropsWithChildren,
	type SyntheticEvent,
} from 'react';
import { Slot } from '@radix-ui/react-slot';
import classnames from 'classnames';
import styles from './Button.module.css';

export type ButtonProps = {
	variant?: 'contained' | 'outline';
	mode?: 'primary' | 'secondary';
	size?: keyof ThemeComponentSize;
	fullWidth?: boolean;
	title?: string;
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset';
	asChild?: boolean;
	onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void;
	className?: string;
};

const Button = forwardRef<
	HTMLButtonElement,
	PropsWithChildren<
		ButtonProps &
			React.DetailedHTMLProps<
				React.ButtonHTMLAttributes<HTMLButtonElement>,
				HTMLButtonElement
			>
	>
>(
	(
		{
			asChild,
			size,
			fullWidth,
			variant,
			mode,
			disabled,
			children,
			className,
			title,
			onClick,
			...props
		},
		ref,
	): JSX.Element => {
		const Comp = asChild && typeof children !== 'string' ? Slot : 'button';
		return (
			<Comp
				data-variant={variant}
				data-mode={mode}
				data-size={size}
				data-full-width={fullWidth}
				disabled={disabled}
				title={title}
				ref={ref}
				className={classnames(styles.root, className)}
				onClick={(e: SyntheticEvent<HTMLButtonElement>) => onClick?.(e)}
				{...props}
			>
				{children}
			</Comp>
		);
	},
);

Button.displayName = 'Button';

export default Button;
