import React from 'react';
import CustomField, { type CustomFieldProps } from '../CustomField/CustomField';
import { getErrorMessage } from '../CustomField/helpers';
import { useInputValidation } from './useInputValidation';
import classNames from 'classnames';
import styles from './Input.module.css';

const Input = ({
	label,
	name,
	required,
	placeholder,
	type,
	value,
	className,
	...props
}: CustomFieldProps) => {
	const trErrorMessage = (validity: ValidityState) =>
		getErrorMessage({ validity });

	const { valid, invalid, errorMessage, validate } =
		useInputValidation(trErrorMessage);

	const CustomInput = type === 'textarea' ? 'textarea' : 'input';

	return (
		<CustomField
			name={name}
			label={label}
			type={type}
			required={required}
			placeholder={placeholder}
			value={value}
			className={classNames(styles.root, className)}
			isValid={valid}
			isInvalid={invalid}
			errorMessage={errorMessage}
			{...props}
		>
			<CustomInput
				onChange={validate}
				onBlur={validate}
			/>
		</CustomField>
	);
};

export default Input;
