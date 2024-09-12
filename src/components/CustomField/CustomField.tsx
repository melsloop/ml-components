import type { PropsWithChildren, SyntheticEvent } from 'react';

import React, { useMemo } from 'react';
import styles from './CustomField.module.css';
import classNames from 'classnames';
import Text from '../Text';
import Icon from '../Icon';

type CustomFieldProps = {
	name?: string;
	label?: string;
	required?: boolean;
	fullWidth?: boolean;
	icon?: React.ReactNode;
	isInvalid?: boolean;
	isValid?: boolean;
	errorMessage?: string;

	onChange?: (e: SyntheticEvent) => void;
	onBlur?: (e: SyntheticEvent) => void;

	className?: string;
};

const VALID_INPUTS = ['input', 'textarea'];

const CustomField = ({
	label,
	icon,
	required,
	isInvalid,
	isValid,
	errorMessage,
	children,
	fullWidth,
	className,
	...props
}: PropsWithChildren<CustomFieldProps>) => {
	const inputElement = useMemo(
		() =>
			React.Children.map(
				children,
				(child) =>
					React.isValidElement(child) &&
					VALID_INPUTS.includes(child.type.toString()) &&
					React.cloneElement(child, { ...{ required }, ...props }),
			),
		[children, props],
	);

	return (
		<div
			data-invalid={isInvalid}
			data-valid={isValid}
			data-full-width={fullWidth}
			className={classNames(styles.root, className)}
		>
			<label>
				<span className={styles.label}>
					<span className={styles.content}>
						{icon && (
							<Icon
								icon={icon}
								className={styles.icon}
							/>
						)}
						<Text
							variant="body1"
							size="sm"
							className={styles.text}
						>
							{label}
							{required && <span className={styles.requiredIndicator}></span>}
						</Text>
					</span>
				</span>

				<span className={classNames(styles.inputField)}>
					<span className={styles.inputFieldContainer}>
						{inputElement}
						{isInvalid && errorMessage && (
							<span
								className={classNames(
									styles.validation,
									isInvalid ? styles.showValidation : '',
								)}
							>
								{errorMessage}
							</span>
						)}
					</span>
				</span>
			</label>
		</div>
	);
};

export default CustomField;
export type { CustomFieldProps };
