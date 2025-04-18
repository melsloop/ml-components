import type {
	ComponentSize,
	RadiusSize,
	ShadowSize,
	ThemeComponentSize,
} from '../../theme/types';

import React, {
	forwardRef,
	type PropsWithChildren,
	type SyntheticEvent,
} from 'react';
import { Slot } from '@radix-ui/react-slot';
import styles from './Button.module.css';
import classNames from 'classnames';

export type ButtonProps = {
	variant?: 'contained' | 'outline';
	mode?: 'primary' | 'secondary';
	size?: ComponentSize;
	shadow?: ShadowSize;
	radius?: RadiusSize;
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
			shadow,
			radius,
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
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				// data-variant={variant}
				// data-mode={mode}
				disabled={disabled}
				title={title}
				ref={ref}
				className={classNames(
					styles.root,
					styles[`size-${size}`],
					styles[`radius-${radius}`],
					styles[`shadow-${shadow}`],
					// styles[`spacing-${spacing}`],
					{
						[styles.fullWidth]: fullWidth,
						[styles.contained]: variant === 'contained',
						[styles.outline]: variant === 'outline',
						[styles.primary]: mode === 'primary',
						[styles.secondary]: mode === 'secondary',
						// [styles.bordered]: bordered,
					},
					className,
				)}
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
