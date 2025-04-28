import type { ComponentSize, RadiusSize, ShadowSize } from '../../theme/types';

import React, {
	cloneElement,
	forwardRef,
	isValidElement,
	useMemo,
	type PropsWithChildren,
	type SyntheticEvent,
} from 'react';
import { Slot } from '@radix-ui/react-slot';
import styles from './Button.module.css';
import classNames from 'classnames';
import { WithDataAttributes } from '../types';

export type ButtonProps = {
	variant?: 'contained' | 'outline';
	mode?: 'primary' | 'secondary';
	size?: ComponentSize;
	shadow?: ShadowSize;
	radius?: RadiusSize;
	fullWidth?: boolean;
	title?: string;
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset' | 'radio';
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
			type,
			onClick,
			...rest
		},
		ref,
	): JSX.Element => {
		const Comp = asChild ? Slot : 'button';
		const customChildren = useMemo(
			() =>
				React.Children.map(children, (child) => {
					if (isValidElement(child)) {
						return cloneElement(
							child as React.ReactElement<WithDataAttributes<ButtonProps>>,
							{
								className: styles.textColor,
							},
						);
					}
					return child;
				}),
			[children],
		);

		return (
			<Comp
				disabled={disabled}
				title={title}
				type={type}
				ref={ref}
				className={classNames(
					styles.root,
					styles.textColor,
					styles[`size-${size}`],
					styles[`radius-${radius}`],
					styles[`shadow-${shadow}`],
					{
						[styles.fullWidth]: fullWidth,
						[styles.contained]: variant === 'contained',
						[styles.outline]: variant === 'outline',
						[styles.primary]: mode === 'primary',
						[styles.secondary]: mode === 'secondary',
					},
					className,
				)}
				onClick={(e: SyntheticEvent<HTMLButtonElement>) => onClick?.(e)}
				{...rest}
			>
				{customChildren}
			</Comp>
		);
	},
);

Button.displayName = 'Button';

export default Button;
