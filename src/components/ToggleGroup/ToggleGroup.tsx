import React, { PropsWithChildren, useMemo, useState } from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import classnames from 'classnames';
import styles from './ToggleGroup.module.css';

export type ToggleGroupProps = {
	defaultValue?: string;
	noEmptyValue?: boolean;
	fullWidth?: boolean;
	orientation?: 'horizontal' | 'vertical';
	dir?: 'ltr' | 'rtl';
	loop?: boolean;
	onSelect?: (val: string) => void;
	className?: string;
};

// single select
const ToggleGroup = ({
	defaultValue,
	noEmptyValue = true,
	fullWidth,
	children,
	onSelect,
	className,
	...props
}: PropsWithChildren<ToggleGroupProps>): JSX.Element => {
	const [selected, setSelected] = useState<string>(defaultValue || '');

	const onItemSelect = (val: string) => {
		setSelected(val);
		onSelect?.(val);
	};

	const items = useMemo(
		() =>
			React.Children.map(children, (child) => {
				if (React.isValidElement(child)) {
					const value = child.props['data-value'];
					const isSelected = value === selected;
					return (
						<ToggleGroupPrimitive.Item
							className={styles.item}
							value={value}
							asChild
							onClick={() => onItemSelect(value)}
							data-selected={isSelected}
						>
							{React.cloneElement(child)}
						</ToggleGroupPrimitive.Item>
					);
				}
			}),
		[children, defaultValue, noEmptyValue, selected],
	);

	return (
		<ToggleGroupPrimitive.Root
			type="single"
			defaultValue={defaultValue}
			data-full-width={fullWidth}
			className={classnames(styles.root, className)}
			{...props}
		>
			{items}
		</ToggleGroupPrimitive.Root>
	);
};

export default ToggleGroup;
