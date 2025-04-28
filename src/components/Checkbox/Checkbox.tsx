// import React, { forwardRef, useCallback, useMemo, type PropsWithChildren } from 'react';
// import type { ComponentSize, SpacingSize } from '../../theme/types';
// import Icon from '../Icon';
// import { CheckIcon } from '@radix-ui/react-icons';
// import classNames from 'classnames';
// import styles from './Checkbox.module.css';
// import BaseInput, { useInputValue, type BaseInputProps, type CheckboxRef } from './BaseInput';

// export type CheckboxProps = BaseInputProps;

// const Checkbox = forwardRef<CheckboxRef, PropsWithChildren<CheckboxProps>>(
// 	(
// 		{
// 			checked = false,
// 			disabled,
// 			readOnly,
// 			fullWidth,
// 			size,
// 			spacing,
// 			required,
// 			children,
// 			invalid,
// 			className,
// 			onClick,
// 			errorMessageValueMissing,
// 		},
// 		ref,
// 	): JSX.Element => {
// 		const [isChecked, setIsChecked] = useInputValue(checked, onClick);

// 	const handleClick = useCallback(() => {
// 		debugger
// 			if (!disabled && !readOnly) {
// 				setIsChecked(!isChecked);
// 			}
// 		}, [disabled, readOnly, isChecked, setIsChecked]);

// 		const checkboxElement = useMemo(
// 			() => (
// 				<div
// 					className={classNames(styles.input, {
// 						[styles.checked]: checked,
// 						[styles.disabled]: disabled,
// 						[styles.readonly]: readOnly,
// 					})}
// 				>
// 					<input
// 						type="checkbox"
// 						checked={checked}
// 						required={required}
// 						disabled={disabled}
// 						readOnly={readOnly}
// 						className={styles.inputElement}
// 					/>
// 					{checked && (
// 						<Icon className={styles.checkmark}>
// 							<CheckIcon />
// 						</Icon>
// 					)}
// 				</div>
// 			),
// 			[disabled, readOnly, required, isChecked],
// 		);

// 		return (
// 			<BaseInput
// 				ref={ref}
// 				checked={checked}
// 				disabled={disabled}
// 				readOnly={readOnly}
// 				fullWidth={fullWidth}
// 				size={size}
// 				spacing={spacing}
// 				required={required}
// 				invalid={invalid}
// 				className={className}
// 				onClick={onClick}
// 				errorMessageValueMissing={errorMessageValueMissing}
// 			>
// 				<span
// 					className={styles.wrapper}
// 					onClick={handleClick}
// 				>
// 					{checkboxElement}
// 					<span className={styles.label}>{children}</span>
// 				</span>
// 			</BaseInput>
// 		);
// 	},
// );

// Checkbox.displayName = 'Checkbox';

// export default Checkbox;

import React, {
	forwardRef,
	useState,
	useCallback,
	useEffect,
	useImperativeHandle,
	useRef,
	useMemo,
	type PropsWithChildren,
} from 'react';
import type { ComponentSize, SpacingSize } from '../../theme/types';
import Icon from '../Icon';
import { CheckIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
import styles from './Checkbox.module.css';
import BaseInput from '../BaseInput/BaseInput';
// import { createElementProperties } from '../../inputHelpers';

export type CheckboxProps = {
	checked?: boolean;
	disabled?: boolean;
	readOnly?: boolean;
	fullWidth?: boolean;
	spacing?: SpacingSize;
	size?: ComponentSize;
	required?: boolean;
	invalid?: boolean;
	children?: React.ReactElement;
	className?: string;
	onClick?: (checked: boolean) => void;
	errorMessageValueMissing?: string;
};

export type CheckboxRef = {
	value: boolean;
	setValue: (value: boolean) => void;
	validity: ValidityState;
	setCustomValidity: (message: string) => void;
};

// Type for the DOM element with our custom properties
interface CheckboxElement extends HTMLSpanElement {
	value: boolean;
	setValue: (value: boolean) => void;
	validity: ValidityState;
	setCustomValidity: (message: string) => void;
}

// Custom hook for value management
const useCheckboxValue = (
	initialValue: boolean,
	onChange?: (value: boolean) => void,
) => {
	const [value, setValue] = useState(initialValue);

	const updateValue = useCallback(
		(newValue: boolean) => {
			setValue(newValue);
			onChange?.(newValue);
		},
		[onChange],
	);

	return [value, updateValue] as const;
};

const Checkbox = forwardRef<CheckboxRef, PropsWithChildren<CheckboxProps>>(
	(
		{
			label,
			checked = false,
			disabled,
			readOnly,
			fullWidth,
			size,
			spacing,
			required,
			children,
			invalid,
			className,
			onClick,
			errorMessageValueMissing,
		},
		ref,
	): JSX.Element => {
		const rootRef = useRef<CheckboxElement>(null);
		const inputRef = useRef<HTMLInputElement>(null);

		const [isChecked, setIsChecked] = useCheckboxValue(checked, onClick);

		const handleClick = useCallback(() => {
			if (!disabled && !readOnly) {
				setIsChecked(!isChecked);
			}
		}, [disabled, readOnly, isChecked, setIsChecked]);

		const checkboxElement = useMemo(
			() => (
				<div
					className={classNames(styles.input, {
						// [styles.checked]: isChecked,
						// [styles.disabled]: disabled,
						// [styles.readonly]: readOnly,
					})}
				>
					{/* <input
						ref={inputRef}
						type="checkbox"
						checked={isChecked}
						required={required}
						disabled={disabled}
						readOnly={readOnly}
						className={styles.inputElement}
						// onChange={() => setDirty(true)}
					/> */}
					{isChecked && (
						<Icon className={styles.checkmark}>
							<CheckIcon />
						</Icon>
					)}
				</div>
			),
			[isChecked, disabled, readOnly, required],
		);
		return (
			<BaseInput
				label={label}
				type="checkbox"
				className={styles.root}
			>
				<span
					className={styles.wrapper}
					onClick={handleClick}
					ref={ref}
				>
					{checkboxElement}
				</span>
			</BaseInput>
		);
	},
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
