import React, { PropsWithChildren, useMemo, useState } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import styles from './RadioGroup.module.css';
import classNames from 'classnames';
import {
	ComponentSize,
	RadiusSize,
	ShadowSize,
	SpacingSize,
} from '../../theme/types';

export type RadioGroupProps = {
	defaultValue?: string;
	fullWidth?: boolean;
	orientation?: 'horizontal' | 'vertical';
	direction?: 'ltr' | 'rtl';
	loop?: boolean;
	bordered?: boolean;
	radius?: RadiusSize;
	shadow?: ShadowSize;
	size?: ComponentSize;
	spacing?: SpacingSize;
	className?: string;
	onSelect?: (val: string) => void;
};

// single select
const RadioGroup = ({
	defaultValue,
	fullWidth,
	direction,
	orientation,
	children,
	bordered,
	radius,
	shadow,
	spacing,
	size,
	className,
	onSelect,
	...rest
}: PropsWithChildren<RadioGroupProps>): JSX.Element => {
	const [selected, setSelected] = useState(defaultValue || '');

	const onOptionSelect = (val: string) => {
		setSelected(val);
		onSelect?.(val);
	};

	// const renderChildren = () =>
	// 	useMemo(() => {
	// 		if (Array.isArray(children)) {
	// 			return React.Children.map(children, (child) => {
	// 				if (
	// 					React.isValidElement<{ className?: string; value: string;  }>(child)
	// 				) {
	// 					return React.cloneElement(child, {
	// 						selected: child.props?.value === selected,
	// 						onClick: onOptionSelect,
	// 						size,
	// 						radius,
	// 						...child.props,
	// 					});
	// 					// return (
	// 					// 	<RadioGroupPrimitive.Item
	// 					// 		value={itemValue}
	// 					// 		className={styles.item}
	// 					// 		asChild
	// 					// 	>
	// 					// 		<Button
	// 					// 			// variant={isSelected ? 'contained' : 'outline'}
	// 					// 			mode="primary"
	// 					// 			size={size}
	// 					// 			// radius={radius}
	// 					// 			className={classNames(styles.item, {
	// 					// 				[styles.selected]: isSelected,
	// 					// 			})}
	// 					// 			style={{
	// 					// 				padding: '0.5em'
	// 					// 			}}
	// 					// 		>
	// 					// 			{React.cloneElement(child, {})}
	// 					// 		</Button>
	// 					// 	</RadioGroupPrimitive.Item>
	// 					// );
	// 				}
	// 				return child;
	// 			});
	// 		}

	// 		return children;
	// 	}, [children, selected]);

	return (
		<RadioGroupPrimitive.Root
			dir={direction}
			defaultValue={defaultValue}
			onValueChange={onOptionSelect}
			className={classNames(
				styles.root,
				styles[`spacing-${spacing}`],
				{
					[styles.fullWidth]: fullWidth,
					// [styles.bordered]: bordered,
					[styles.vertical]: orientation === 'vertical',
				},
				className,
			)}
			{...rest}
		>
			{/* {renderChildren()} */}
			{children}
		</RadioGroupPrimitive.Root>
	);
};

export default RadioGroup;
