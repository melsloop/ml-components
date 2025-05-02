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
import classNames from 'classnames';
import styles from './BaseInput.module.css';

type InputValue = string;

export type BaseInputProps = {
	initialValue?: InputValue;
	label?: string;
	role?: 'input' | 'checkbox' | 'radio' | 'text' | 'textbox';
	type?: 'text' | 'checkbox' | 'radio';
	disabled?: boolean;
	readOnly?: boolean;
	fullWidth?: boolean;
	required?: boolean;
	invalid?: boolean;
	spacing?: SpacingSize;
	size?: ComponentSize;
	children?: React.ReactElement;
	className?: string;
	onClick?: (checked: InputValue) => void;
	errorMessageValueMissing?: string;
};

export type BaseInputRef = {
	value: InputValue;
	setValue: (value: InputValue) => void;
	validity: ValidityState;
	setCustomValidity: (message: string) => void;
};

// Type for the DOM element with our custom properties
interface InputElement extends HTMLSpanElement {
	value: InputValue;
	setValue: (value: InputValue) => void;
	validity: ValidityState;
	setCustomValidity: (message: string) => void;
}

// Custom hook for value management
export const useInputValue = (
	initialValue: InputValue,
	onChange?: (value: InputValue) => void,
) => {
	const [value, setValue] = useState<InputValue>(initialValue);

	const updateValue = useCallback(
		(newValue: InputValue) => {
			setValue(newValue);
			onChange?.(newValue);
		},
		[onChange],
	);

	return [value, updateValue] as const;
};

const createElementProperties = (
	value: InputValue,
	setValue: (value: InputValue) => void,
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

const initialValidityState: ValidityState = {
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
};

const BaseInput = forwardRef<BaseInputRef, PropsWithChildren<BaseInputProps>>(
	(
		{
			label,
			children,

			role,
			type,

			initialValue = '',

			disabled,
			readOnly,
			required,

			invalid,

			errorMessageValueMissing,

			fullWidth,
			size,
			spacing,
			className,
			onClick,
		},
		ref,
	): JSX.Element => {
		const rootRef = useRef<InputElement>(null);
		const inputRef = useRef<HTMLInputElement>(null);

		const [value, setValue] = useInputValue(initialValue, onClick);

		const [validityState, setValidityState] =
			useState<ValidityState>(initialValidityState);

		// const [dirty, setDirty] = useState(false);
		const [errors, setErrors] = useState('');

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
					return value;
				},
				setValue: setValue,
				validity: validityState,
				setCustomValidity,
			}),
			[value, setValue, validityState, setCustomValidity],
		);

		// Support DOM element properties
		const elementProperties = useMemo(
			() =>
				createElementProperties(
					value,
					setValue,
					validityState,
					setCustomValidity,
				),
			[value, setValue, validityState, setCustomValidity],
		);

		useEffect(() => {
			if (rootRef.current) {
				Object.defineProperties(rootRef.current, elementProperties);
			}
		}, [elementProperties]);

		const renderChildren = (child: React.ReactElement) => {
			return React.cloneElement(child, {
				required,
				readOnly,
				disabled,
				ref,
				onChange: (e) => {
					setValue(e.target.value);
				},
				...child.props,
			});
		};

		return (
			<>
				<span
					ref={rootRef}
					className={classNames(
						styles.root,
						styles[`size-${size}`],
						styles[`spacing-${spacing}`],
						{
							[styles.disabled]: disabled,
							[styles.readonly]: readOnly,
							[styles.required]: required,
							[styles.fullWidth]: fullWidth,
							[styles.invalid]: invalid || (errors && !validityState.valid),
							// [styles.invalid]: !validityState.valid
						},
						className,
					)}
					data-input-type={type}
					role={role}
					// aria-checked={value}
					aria-disabled={disabled}
				>
					<div className={styles.label}>{label}</div>
					<div className={styles.input}>{renderChildren(children)}</div>
					<input
						// ref={inputRef}
						value={value}
						type={type}
						// checked={type === 'checkbox' && initialValue === 'true'}
						required={required}
						disabled={disabled}
						readOnly={readOnly}
						className={styles.inputElement}
						onInput={() => {
							console.log('input ele changed');
						}}

						// onChange={() => setDirty(true)}
					/>
				</span>

				{errors && <div className={styles.validationMessager}>{errors}</div>}
			</>
		);
	},
);

BaseInput.displayName = 'BaseInput';

export default BaseInput;
