import React from 'react';
import CustomField, { type InputProps } from '../CustomField/CustomField';
import classNames from 'classnames';
import styles from './TextAreaField.module.css';

const TextAreaField = ({
	size,
	name,
	required,
	placeholder,
	label,
	icon,
	invalid,
	fullWidth,
	errorMessage,
	onChange,
	onFocus,
	onBlur,
	className,
	...props
}: InputProps) => {
	return (
		<CustomField
			size={size}
			label={label}
			icon={icon}
			fullWidth={fullWidth}
			required={required}
			invalid={invalid}
			errorMessage={errorMessage}
			onChange={onChange}
			onFocus={onFocus}
			onBlur={onBlur}
			className={classNames(styles.root, className)}
			// errorMessage={errorMessage}
			{...props}
		>
			<textarea
				name={name}
				required={required}
				placeholder={placeholder}
			/>
		</CustomField>
	);
};

export default TextAreaField;
