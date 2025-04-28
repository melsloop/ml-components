import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../src/components/Checkbox';
import { fullWidthControls, sizeControls } from './helpers/commonControls';
import { Text } from '../src';
import { withForm } from './helpers/formUtils';

const meta = {
	title: 'Input/Checkbox',
	component: Checkbox,
	// tags: ['autodocs'],
	args: {
		checked: false,
		disabled: false,
		readOnly: false,
		fullWidth: false,
		required: false,
		spacing: 'sm',
		size: 'md',
		// Story Props
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		label: 'Label',
		errorMessageValueMissing: 'Custom checkbox value missing error message',
	},
	argTypes: {
		checked: {
			control: 'boolean',
		},
		disabled: {
			control: 'boolean',
		},
		readOnly: {
			control: 'boolean',
		},
		required: {
			control: 'boolean',
		},
		invalid: {
			control: 'boolean',
		},
		errorMessageValueMissing: {
			control: 'text',
		},
		children: {
			control: 'text',
		},
		spacing: {
			options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
			control: 'select',
		},
		...sizeControls,
		...fullWidthControls,
	},
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({
		checked,
		disabled,
		readOnly,
		fullWidth,
		size,
		spacing,
		required,
		invalid,
		errorMessageValueMissing,
		// Story Props
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		label,
	}) => {
		return withForm(
			<Checkbox
				label={label}
				checked={checked}
				required={required}
				disabled={disabled}
				readOnly={readOnly}
				size={size}
				spacing={spacing}
				fullWidth={fullWidth}
				invalid={invalid}
				errorMessageValueMissing={errorMessageValueMissing}
				// onSelect={onClick}
			>
				{/* <Text variant="body2">{label}</Text> */}
			</Checkbox>,
		);
	},
};
