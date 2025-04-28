import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { withForm } from './helpers/formUtils';
import TextField from '../src/components/TextField';
import { DotsHorizontalIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import TextFieldSlot from '../src/components/TextField/TextFieldSlot';
import { IconButton } from '@radix-ui/themes';

const meta = {
	title: 'Input/TextField',
	component: TextField,
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
		prefixSlot: false,
		suffixSlot: false,
	},
	argTypes: {
		prefixSlot: {
			control: { type: 'boolean' },
		},
		suffixSlot: {
			control: { type: 'boolean' },
		},
	},
} satisfies Meta<typeof TextField>;

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
		// @ts-ignore
		prefixSlot,
		// @ts-ignore
		suffixSlot,
	}) =>
		withForm(
			<TextField
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
			>
				{prefixSlot && (
					<TextFieldSlot slot="prefix">
						<MagnifyingGlassIcon
							height="16"
							width="16"
						/>
					</TextFieldSlot>
				)}
				{suffixSlot && (
					<TextFieldSlot slot="suffix">
						<DotsHorizontalIcon
							height="16"
							width="16"
						/>
					</TextFieldSlot>
				)}
			</TextField>,
		),
};
