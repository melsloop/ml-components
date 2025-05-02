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

const createElementProperties = (
	value: string,
	setValue: (value: boolean) => void,
	validity: ValidityState,
	setCustomValidity: (errorMessage: string) => void,
) => ({
	value: {
		get: () => value,
		enumerable: true,
		configurable: true,
	},
	setValue: {
		value: setValue,
		enumerable: true,
		configurable: true,
	},
	validity: {
		get: () => validity,
		enumerable: true,
		configurable: true,
	},
	setCustomValidity: {
		value: setCustomValidity,
		enumerable: true,
		configurable: true,
	},
});

const Checkbox = forwardRef<CheckboxRef, PropsWithChildren<CheckboxProps>>(
	(
		{
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
		// const [dirty, setDirty] = useState(false);
		const [errors, setErrors] = useState('');
		const [validityState, setValidityState] = useState<ValidityState>({
			valid: true,
			valueMissing: false,
			typeMismatch: false,
			patternMismatch: false,
			tooLong: false,
			tooShort: false,
			rangeUnderflow: false,
			rangeOverflow: false,
			stepMismatch: false,
			badInput: false,
			customError: false,
		});

		const setCustomValidity = useCallback((message: string) => {
			setErrors(message);
			inputRef.current?.setCustomValidity(message);
		}, []);

		const updateCustomValidity = () => {
			if (validityState.valueMissing) {
				setCustomValidity(errorMessageValueMissing || 'Required');
				return;
			}

			setCustomValidity('');
		};

		// Sync validity state with input element
		useEffect(() => {
			if (inputRef.current) {
				const updateValidity = () => {
					if (inputRef.current) {
						setValidityState(inputRef.current.validity);
					}
				};

				const onInvalid = () => {
					updateCustomValidity();
				};

				const onChange = () => {
					console.log('change!');
					updateCustomValidity();
				};

				updateValidity();

				// Listen for validity changes
				inputRef.current.addEventListener('invalid', onInvalid);
				inputRef.current.addEventListener('change', onChange);

				return () => {
					inputRef.current?.removeEventListener('invalid', onInvalid);
					inputRef.current?.removeEventListener('change', onChange);
				};
			}
		}, [inputRef.current]);

		// Support React ref pattern
		useImperativeHandle(
			ref,
			() => ({
				get value() {
					return isChecked;
				},
				setValue: setIsChecked,
				validity: validityState,
				setCustomValidity,
			}),
			[isChecked, setIsChecked, validityState, setCustomValidity],
		);

		// Support DOM element properties
		const elementProperties = useMemo(
			() =>
				createElementProperties(
					isChecked,
					setIsChecked,
					validityState,
					setCustomValidity,
				),
			[isChecked, setIsChecked, validityState, setCustomValidity],
		);

		useEffect(() => {
			if (rootRef.current) {
				Object.defineProperties(rootRef.current, elementProperties);
			}
		}, [elementProperties]);

		const handleClick = useCallback(() => {
			if (!disabled && !readOnly) {
				setIsChecked(!isChecked);
			}
		}, [disabled, readOnly, isChecked, setIsChecked]);

		const checkboxElement = useMemo(
			() => (
				<div
					className={classNames(styles.input, {
						[styles.checked]: isChecked,
						[styles.disabled]: disabled,
						[styles.readonly]: readOnly,
					})}
				>
					<input
						ref={inputRef}
						type="checkbox"
						checked={isChecked}
						required={required}
						disabled={disabled}
						readOnly={readOnly}
						className={styles.inputElement}
						// onChange={() => setDirty(true)}
					/>
					{isChecked && (
						<Icon className={styles.checkmark}>
							<CheckIcon />
						</Icon>
					)}
				</div>
			),
			[isChecked, disabled, readOnly, required, validityState],
		);

		return (
			<span>
				<span
					ref={rootRef}
					className={classNames(
						styles.root,
						styles[`size-${size}`],
						styles[`spacing-${spacing}`],
						{
							[styles.disabled]: disabled,
							[styles.readonly]: readOnly,
							[styles.fullWidth]: fullWidth,
							[styles.required]: required,
							[styles.invalid]: invalid || (errors && !validityState.valid),
							// [styles.invalid]: !validityState.valid
						},
						className,
					)}
					data-input-type="checkbox"
					role="checkbox"
					aria-checked={isChecked}
					aria-disabled={disabled}
				>
					<span
						className={styles.wrapper}
						onClick={handleClick}
					>
						{checkboxElement}
						<span className={styles.label}>{children}</span>
					</span>
				</span>
				{errors && <div className={styles.validationMessager}>{errors}</div>}
			</span>
		);
	},
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
