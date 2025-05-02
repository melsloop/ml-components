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
import styles from './RadioButton.module.css';
import classNames from 'classnames';
import Button from '../Button';
import { CheckIcon, CircleIcon } from '@radix-ui/react-icons';
import Checkbox from '../Checkbox';

export type RadioButtonProps = {
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

const RadioButton = forwardRef<
	HTMLButtonElement,
	PropsWithChildren<
		RadioButtonProps &
			React.DetailedHTMLProps<
				React.ButtonHTMLAttributes<HTMLButtonElement>,
				HTMLButtonElement
			>
	>
>(
	(
		{
			value,
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
			selected,
			onClick,
			...rest
		},
		ref,
	): JSX.Element => {
		const onInputClick = onClick;
		// const buttonType = type === 'radio' ? 'input' : 'button';
		// const Comp = asChild ? Slot : buttonType;
		// const customChildren = useMemo(
		// 	() =>
		// 		React.Children.map(children, (child) => {
		// 			if (isValidElement(child)) {
		// 				return cloneElement(
		// 					child as React.ReactElement<WithDataAttributes<RadioButtonProps>>,
		// 					{
		// 						className: styles.textColor,
		// 					},
		// 				);
		// 			}
		// 			return child;
		// 		}),
		// 	[children],
		// );

		return (
			<label
				className={classNames(styles.root, className)}
				onClick={() => onInputClick(value)}
			>
				{/* <Root checked={selected}>
					<Indicator className="CheckboxIndicator">
						<CheckIcon />
						<CircleIcon />
					</Indicator>
				</Root> */}
				{/* <input type="radio" className={styles.input} checked={selected} /> */}
				<Button
					disabled={disabled}
					// title={title}
					ref={ref}
					size={size}
				>
					{children}
				</Button>
			</label>
		);
	},
);

RadioButton.displayName = 'RadioButton';

export default RadioButton;
