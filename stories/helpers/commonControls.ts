import type { ArgTypes } from 'storybook/internal/types';
import icons from './icons';

export const fullApiControls: ArgTypes = {
	fullApi: {
		name: 'Full API',
		control: 'boolean',
		if: { arg: 'fullApi', exists: true },
	},
};

export const customValidationMessageControls: ArgTypes = {
	customValidationMessage: {
		name: 'Custom Validation Message',
		control: 'boolean',
		if: { arg: 'customValidationMessage', exists: true },
	},
};

export const messageValueMissingControls: ArgTypes = {
	messageValueMissing: {
		name: 'Message: Value Missing',
		control: 'text',
		if: { arg: 'customValidationMessage', truthy: true },
	},
};

export const messageTypeMismatchControls: ArgTypes = {
	messageTypeMismatch: {
		name: 'Message: Type Mismatch',
		control: 'text',
		if: { arg: 'customValidationMessage', truthy: true },
	},
};

export const messageTooShortControls: ArgTypes = {
	messageTooShort: {
		name: 'Message: Too Short',
		control: 'text',
		if: { arg: 'customValidationMessage', truthy: true },
	},
};

export const messageTooLongControls: ArgTypes = {
	messageTooLong: {
		name: 'Message: Too Long',
		control: 'text',
		if: { arg: 'customValidationMessage', truthy: true },
	},
};

export const messageBadInputControls: ArgTypes = {
	messageBadInput: {
		name: 'Message: Bad Input',
		control: 'text',
		if: { arg: 'customValidationMessage', truthy: true },
	},
};

export const messageRangeOverflowControls: ArgTypes = {
	messageRangeOverflow: {
		name: 'Message: Range Overflow',
		control: 'text',
		if: { arg: 'customValidationMessage', truthy: true },
	},
};

export const messageRangeUnderflowControls: ArgTypes = {
	messageRangeUnderflow: {
		name: 'Message: Range Underflow',
		control: 'text',
		if: { arg: 'customValidationMessage', truthy: true },
	},
};

export const messageCustomErrorControls: ArgTypes = {
	messageCustomError: {
		name: 'Message: Custom Error',
		control: 'text',
		if: { arg: 'customValidationMessage', truthy: true },
	},
};

export const labelControls: ArgTypes = {
	label: {
		name: 'Label',
		control: 'text',
	},
};

export const placeholderControls: ArgTypes = {
	placeholder: {
		name: 'Placeholder',
		control: 'text',
	},
};

export const requiredControls: ArgTypes = {
	required: {
		name: 'Required',
		control: 'boolean',
	},
};

export const disabledControls: ArgTypes = {
	disabled: {
		name: 'Disabled',
		control: 'boolean',
	},
};

export const readOnlyControls: ArgTypes = {
	readOnly: {
		name: 'Read Only',
		control: 'boolean',
	},
};

export const autoCompleteControls: ArgTypes = {
	autoComplete: {
		name: 'Autocomplete',
		control: 'text',
	},
};

export const minLengthControls: ArgTypes = {
	minLength: {
		name: 'Min. Length',
		control: 'number',
	},
};

export const maxLengthControls: ArgTypes = {
	maxLength: {
		name: 'Max. Length',
		control: 'number',
	},
};

export const fullWidthControls: ArgTypes = {
	fullWidth: {
		name: 'Full Width',
		control: 'boolean',
	},
};

export const sizeControls: ArgTypes = {
	size: {
		name: 'Size',
		options: ['xs', 'sm', 'md', 'lg', 'xl'],
		control: { type: 'select' },
	},
};

export const shadowControls: ArgTypes = {
	shadow: {
		options: ['none', 'sm', 'md', 'lg'],
		control: 'select',
	},
};

export const radiusControls: ArgTypes = {
	radius: {
		name: 'Radius',
		options: ['none', 'sm', 'md', 'lg'],
		control: 'select',
	},
};

export const borderedControls: ArgTypes = {
	bordered: {
		name: 'Bordered',
		control: 'boolean',
	},
};

export const seoTitleControls: ArgTypes = {
	title: {
		control: 'text',
	},
};

export const buttonVariantControls: ArgTypes = {
	variant: {
		options: ['contained', 'outline'],
		control: { type: 'select' },
	},
};

export const buttonModeControls: ArgTypes = {
	mode: {
		options: ['primary', 'secondary'],
		control: { type: 'select' },
	},
};

export const textVariantControls: ArgTypes = {
	variant: {
		options: [
			'title',
			'subtitle1',
			'subtitle2',
			'subtitle3',
			'subtitle4',
			'subtitle5',
			'body1',
			'body2',
		],
		control: { type: 'select' },
	},
};

export const iconControls: ArgTypes = {
	icon: {
		options: [undefined, ...icons],
		control: 'select',
	},
};
