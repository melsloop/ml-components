import type { PropsWithChildren, SyntheticEvent } from 'react';

import React, { useMemo } from 'react';
import styles from './CustomField.module.css';
import classNames from 'classnames';
import Text from '../Text';
import Icon from '../Icon';
import type { ThemeComponentSize } from '../../theme/types';

export type InputProps = {
	name?: string;
	label?: string;
	placeholder?: string;
	required?: boolean;
	fullWidth?: boolean;
	icon?: string;
	invalid?: boolean;
	errorMessage?: string;
	size?: keyof ThemeComponentSize;
	onChange?: (e: SyntheticEvent) => void;
	onBlur?: (e: SyntheticEvent) => void;
	onFocus?: (e: SyntheticEvent) => void;
	className?: string;
};

const VALID_INPUTS = ['input', 'textarea'];

const CustomField = ({
	size,
	label,
	icon,
	required,
	invalid,
	errorMessage,
	children,
	fullWidth,
	className,
	...props
}: PropsWithChildren<InputProps>) => {
	const inputElement = useMemo(
		() =>
			React.Children.map(
				children,
				(child) =>
					React.isValidElement(child) &&
					VALID_INPUTS.includes(child.type.toString()) &&
					React.cloneElement(child, {
						...{ required, className: styles.inputElement },
						...props,
					}),
			),
		[children, props],
	);

	return (
		<div
			data-required={required}
			data-invalid={invalid}
			data-full-width={fullWidth}
			className={classNames(styles.root, className)}
		>
			<label className={styles.field}>
				<span className={styles.label}>
					{icon && (
						<Icon
							icon={icon}
							size={size}
							className={styles.icon}
						/>
					)}
					{label && (
						<Text
							variant="body1"
							size={size}
							className={styles.text}
						>
							{label}
							{required && <span className={styles.requiredIndicator}></span>}
						</Text>
					)}
				</span>
				{inputElement}
				{invalid && (
					<span className={classNames(styles.errorMessage)}>
						{errorMessage}
					</span>
				)}
			</label>
		</div>
	);
};

export default CustomField;
