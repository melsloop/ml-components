import React, { PropsWithChildren } from 'react';
import FormField, {
	type InputBaseProps,
	type InputMessages,
	type TextInputProps,
} from '../Form/FormField/FormField';
import { TextArea as TextAreaPrimitive } from '@radix-ui/themes';
import classNames from 'classnames';
import styles from './TextArea.module.css';
import type { ComponentSize } from '../../theme/types';

type TextAreaProps = InputBaseProps &
	InputMessages &
	TextInputProps & {
		size?: ComponentSize;
		type?:
			| 'date'
			| 'datetime-local'
			| 'email'
			| 'hidden'
			| 'month'
			| 'number'
			| 'password'
			| 'search'
			| 'tel'
			| 'text'
			| 'time'
			| 'url'
			| 'week';
	};

const TextArea = ({
	name = '',
	type = 'text',
	label,
	placeholder,
	required,
	disabled,
	readOnly,
	messageValueMissing,
	messageTypeMismatch,
	size,
	children,
	className,
}: PropsWithChildren<TextAreaProps>) => {
	return (
		<FormField
			name={name}
			label={label}
			messageValueMissing={messageValueMissing}
			messageTypeMismatch={messageTypeMismatch}
			required={required}
			size={size}
			className={classNames(styles.root, styles[`size-${size}`], className)}
		>
			<TextAreaPrimitive
				placeholder={placeholder}
				disabled={disabled}
				readOnly={readOnly}
				required={required}
				className={styles.inputWrapper}
			></TextAreaPrimitive>
		</FormField>
	);
};

TextArea.displayName = 'TextArea';

export default TextArea;
