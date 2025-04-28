import React from 'react';
import FormMessage from '../FormMessage';
import classNames from 'classnames';
import styles from './FormFieldValidationMessage.module.css';
import { InputMessages } from '../types';

type FormFieldValidationMessageProps = InputMessages & {
	validity?: ValidityState;
	className?: string;
};

const FormFieldValidationMessage = ({
	messageValueMissing,
	messageTypeMismatch,
	messageTooShort,
	messageTooLong,
	messageBadInput,
	messageRangeOverflow,
	messageRangeUnderflow,
	messageRangeCustomError,
	validity,
	className,
}: FormFieldValidationMessageProps) => {
	if (!validity || validity?.valid) {
		return null;
	}

	let message;

	if (validity.valueMissing) {
		message = messageValueMissing;
	} else if (validity.typeMismatch) {
		message = messageTypeMismatch;
	} else if (validity.tooShort) {
		message = messageTooShort;
	} else if (validity.tooLong) {
		message = messageTooLong;
	} else if (validity.badInput) {
		message = messageBadInput;
	} else if (validity.rangeOverflow) {
		message = messageRangeOverflow;
	} else if (validity.rangeUnderflow) {
		message = messageRangeUnderflow;
	} else if (validity.customError) {
		message = messageRangeCustomError;
	}

	return (
		<FormMessage className={classNames(styles.root, className)}>
			{message}
		</FormMessage>
	);
};

FormFieldValidationMessage.displayName = 'FormFieldValidatioMessage';

export default FormFieldValidationMessage;
