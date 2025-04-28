export const initialValidityState: ValidityState = {
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

import { RefObject } from 'react';
import { ComponentSize, RadiusSize } from '../../theme/types';

export type ComponentProps = {
	size?: ComponentSize;
	radius?: RadiusSize;
	bordered?: boolean;
	fullWidth?: boolean;
};

export type InputValidation = {
	validity?: ValidityState | undefined;
};

export type InputValidationMessages = {
	messageValueMissing?: string;
	messageTypeMismatch?: string;
	messageTooShort?: string;
	messageTooLong?: string;
	messageBadInput?: string;
	messageRangeOverflow?: string;
	messageRangeUnderflow?: string;
	messageRangeCustomError?: string;
};

export type InputBaseProps = {
	name?: string;
	label?: string;
	placeholder?: string;
	required?: boolean;
	readOnly?: boolean;
	disabled?: boolean;
	minLength?: number;
	maxLength?: number;
	autoComplete?: string;
	className?: string;
	// inputRef?: RefObject<HTMLInputElement> | undefined;
	customInputRef?: RefObject<HTMLInputElement> | undefined;
};

export type InputProps = ComponentProps &
	InputBaseProps &
	InputValidation &
	InputValidationMessages;
