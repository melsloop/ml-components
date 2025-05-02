import React, { PropsWithChildren } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import styles from './RadioGroupItemRadioButton.module.css';
import classNames from 'classnames';
import {
	ComponentSize,
	RadiusSize,
	ShadowSize,
	SpacingSize,
} from '../../theme/types';
import RadioButton from '../RadioButton';

export type RadioGroupItemButtonProps = {
	value: string;
	selected?: boolean;
	fullWidth?: boolean;
	bordered?: boolean;
	radius?: RadiusSize;
	shadow?: ShadowSize;
	size?: ComponentSize;
	spacing?: SpacingSize;
	className?: string;
	onSelect?: (val: string) => void;
};

// single select
const RadioGroupItemRadioButton = ({
	value,
	selected,
	children,
	bordered,
	radius,
	shadow,
	spacing,
	onClick,
	size,
	className,
}: PropsWithChildren<RadioGroupItemButtonProps>): JSX.Element => {
	return (
		<RadioGroupPrimitive.Item
			value={value}
			className={classNames(
				styles.root,
				{
					[styles.selected]: selected,
				},
				className,
			)}
			asChild
		>
			<RadioButton
				// variant={selected ? 'contained' : 'outline'}
				mode="primary"
				size={size}
				onClick={onClick}
				radius={radius}
				selected={selected}
				value={value}
				className={styles.root}
			>
				{/* {React.cloneElement(children, {})} */}
				{children}
			</RadioButton>
		</RadioGroupPrimitive.Item>
	);
};

export default RadioGroupItemRadioButton;
