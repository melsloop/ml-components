import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { withForm } from './helpers/formUtils';
import PasswordField from '../src/components/PasswordField';

const meta = {
	title: 'Input/PasswordField',
	component: PasswordField,
	args: {
		label: 'Label',
		placeholder: 'Placeholder',
		required: false,
		disabled: false,
		readOnly: false,
		bordered: true,
		messageValueMissing: 'Value missing',
		messageTypeMismatch: 'Type mismatch',
		messageTooShort: 'Too short',
		messageTooLong: 'Too long',
		size: 'md',
		fullWidth: false,
		minLength: 0,
	},
	argTypes: {},
} satisfies Meta<typeof PasswordField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({
		label,
		type,
		placeholder,
		required,
		disabled,
		readOnly,
		minLength,
		maxLength,
		size,
		radius,
		fullWidth,
		bordered,
		messageValueMissing,
		messageTypeMismatch,
		messageTooShort,
		messageTooLong,
	}) =>
		withForm(
			<PasswordField
				type={type}
				label={label}
				placeholder={placeholder}
				required={required}
				disabled={disabled}
				readOnly={readOnly}
				minLength={minLength}
				maxLength={maxLength}
				size={size}
				radius={radius}
				fullWidth={fullWidth}
				bordered={bordered}
				messageValueMissing={messageValueMissing}
				messageTypeMismatch={messageTypeMismatch}
				messageTooShort={messageTooShort}
				messageTooLong={messageTooLong}
			/>,
		),
};
