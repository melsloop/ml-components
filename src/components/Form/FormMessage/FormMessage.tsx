import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './FormMessage.module.css';
import * as FormPrimitive from '@radix-ui/react-form';

type FormFieldMessageProps = {
	match?:
		| 'badInput'
		| 'patternMismatch'
		| 'rangeOverflow'
		| 'rangeUnderflow'
		| 'stepMismatch'
		| 'tooLong'
		| 'tooShort'
		| 'typeMismatch'
		| 'valid'
		| 'valueMissing';
	className?: string;
};

const FormMessage = ({
	match,
	children,
	className,
}: PropsWithChildren<FormFieldMessageProps>) => (
	<FormPrimitive.Message
		className={classNames(styles.root, className)}
		match={match}
	>
		{children}
	</FormPrimitive.Message>
);

FormMessage.displayName = 'FormMessage';

export default FormMessage;
