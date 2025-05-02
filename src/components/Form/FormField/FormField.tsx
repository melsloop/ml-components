import React, {
	cloneElement,
	isValidElement,
	PropsWithChildren,
	RefObject,
	useEffect,
	useRef,
	useState,
} from 'react';
import * as Form from '@radix-ui/react-form';
import FormLabel from '../FormLabel';
import FormControl from '../FormControl';
import classNames from 'classnames';
import FormFieldValidationMessage from '../FormFieldValidationMessage';
import styles from './FormField.module.css';
import { initialValidityState, InputProps } from '../types';

type FormFieldProps = InputProps & {
	customInputRef?: RefObject<HTMLInputElement> | undefined;
};

const FormField = ({
	name = '',
	label,
	size,
	radius,
	required,
	disabled,
	readOnly,
	minLength,
	maxLength,
	autoComplete,
	placeholder,
	fullWidth,
	children,
	customInputRef,
	className,
	messageValueMissing,
	messageTypeMismatch,
	messageTooShort,
	messageTooLong,
	messageBadInput,
	messageRangeOverflow,
	messageRangeUnderflow,
	messageCustomError,
}: PropsWithChildren<FormFieldProps>) => {
	const [validity, setValidity] = useState<ValidityState>(initialValidityState);
	const [focused, setFocused] = useState(false);
	const [hover, setHover] = useState(false);
	const inputRef = customInputRef || useRef<HTMLInputElement>();

	const inputPros = {
		required,
		disabled,
		readOnly,
		minLength,
		maxLength,
		placeholder,
		autoComplete,
		ref: inputRef,
	};

	useEffect(() => {
		const onFocus = () => setFocused(true);
		const onBlur = () => setFocused(false);

		if (inputRef.current) {
			inputRef.current.classList.add(styles.inputElement);
			inputRef.current.addEventListener('focus', onFocus);
			inputRef.current.addEventListener('blur', onBlur);
		}

		return () => {
			if (inputRef.current) {
				inputRef.current.removeEventListener('focus', onFocus);
				inputRef.current.removeEventListener('blur', onBlur);
			}
		};
	}, [inputRef]);

	const renderInput = () => {
		if (!isValidElement(children)) {
			return null;
		}

		return (
			<FormControl asChild>
				{cloneElement(children, { ...inputPros, ...children.props })}
			</FormControl>
		);
	};

	const renderWithValidation = (validity: ValidityState) => {
		useEffect(
			() => setValidity(validity || initialValidityState),
			[validity, setValidity],
		);
		return renderInput();
	};

	return (
		<Form.Field
			name={name}
			className={classNames(
				styles.root,
				'ml-FormFieldRoot',
				styles[`size-${size}`],
				styles[`radius-${radius}`],
				{
					[styles.fullWidth]: fullWidth,
					[styles.disabled]: disabled,
				},
				className,
			)}
			onMouseOver={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			data-disabled={disabled || undefined}
			data-focused={focused || undefined}
			data-hovered={hover || undefined}
		>
			<FormLabel
				className={classNames(styles.label)}
				isRequired={required}
			>
				{label}
			</FormLabel>
			<div className={classNames(styles.inputWrapper, 'ml-InputWrapper')}>
				<Form.ValidityState>{renderWithValidation}</Form.ValidityState>
			</div>
			<FormFieldValidationMessage
				validity={validity}
				messageValueMissing={messageValueMissing}
				messageTypeMismatch={messageTypeMismatch}
				messageTooShort={messageTooShort}
				messageTooLong={messageTooLong}
				messageBadInput={messageBadInput}
				messageRangeOverflow={messageRangeOverflow}
				messageRangeUnderflow={messageRangeUnderflow}
				messageCustomError={messageCustomError}
				className={styles.message}
			/>
		</Form.Field>
	);
};

FormField.displayName = 'FormField';

export default FormField;
