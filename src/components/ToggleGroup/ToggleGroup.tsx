import React, {
	PropsWithChildren,
	ReactElement,
	useMemo,
	useState,
} from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import styles from './ToggleGroup.module.css';
import classNames from 'classnames';
import {
	ComponentSize,
	RadiusSize,
	ShadowSize,
	SpacingSize,
} from '../../theme/types';

export type ToggleGroupProps = {
	defaultValue?: string;
	noEmptyValue?: boolean;
	fullWidth?: boolean;
	orientation?: 'horizontal' | 'vertical';
	direction?: 'ltr' | 'rtl';
	loop?: boolean;
	bordered?: boolean;
	radius?: RadiusSize;
	shadow?: ShadowSize;
	size?: ComponentSize;
	spacing: SpacingSize;
	onSelect?: (val: string) => void;
	className?: string;
};

// single select
const ToggleGroup = ({
	defaultValue,
	noEmptyValue = true,
	fullWidth,
	direction,
	orientation,
	children,
	bordered,
	radius,
	shadow,
	spacing,
	size,
	onSelect,
	className,
	...rest
}: PropsWithChildren<ToggleGroupProps>): JSX.Element => {
	const renderChildren = () => {
		if (Array.isArray(children)) {
			return React.Children.map(children, (child) => {
				if (
					React.isValidElement<{ className?: string; 'data-value': string }>(
						child,
					)
				) {
					return (
						<ToggleGroupPrimitive.Item
							className={styles.item}
							asChild
							value={child.props['data-value']}
						>
							{React.cloneElement(child)}
						</ToggleGroupPrimitive.Item>
					);
				}
				return child;
			});
		}

		return children;
	};

	return (
		<ToggleGroupPrimitive.Root
			type="single"
			dir={direction}
			defaultValue={defaultValue}
			className={classNames(
				styles.root,
				styles[`size-${size}`],
				styles[`radius-${radius}`],
				styles[`shadow-${shadow}`],
				styles[`spacing-${spacing}`],
				{
					[styles.fullWidth]: fullWidth,
					[styles.bordered]: bordered,
					[styles.vertical]: orientation === 'vertical',
				},
				className,
			)}
			{...rest}
		>
			{renderChildren()}
		</ToggleGroupPrimitive.Root>
	);
};

export default ToggleGroup;
