import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import btnStyles from '../Button/Button.module.css';
import styles from './RadioGroupItemButton.module.css';
import classNames from 'classnames';
import {
	ComponentSize,
	RadiusSize,
	ShadowSize,
	SpacingSize,
} from '../../theme/types';
import Button from '../Button';

export type RadioGroupItemButtonProps = {
	value: string;
	selected?: boolean;

	// fullWidth?: boolean;
	// bordered?: boolean;
	// radius?: RadiusSize;
	// shadow?: ShadowSize;
	// size?: ComponentSize;
	// spacing?: SpacingSize;
	className?: string;
	onSelect?: (val: string) => void;
};

// single select
const RadioGroupItemButton = ({
	value,
	selected,
	children,
	bordered,
	radius,
	shadow,
	spacing,
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
			<Button
				variant={selected ? 'contained' : 'outline'}
				mode="primary"
				size={size}
				radius={radius}
			>
				{/* {React.cloneElement(children, {})} */}
				{children}
			</Button>
		</RadioGroupPrimitive.Item>
	);
};

export default RadioGroupItemButton;
