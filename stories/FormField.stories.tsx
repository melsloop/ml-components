import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../src/components/Checkbox';
import { fullWidthControls, sizeControls } from './helpers/commonControls';
import { withForm } from './helpers/formUtils';
import FormLabel from '../src/components/Form/FormLabel';
import Form from '../src/components/Form';
import FormField from '../src/components/Form/FormField';

const meta = {
	title: 'Form/Fields/Generic',
	component: FormLabel,
	args: {
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
		type: {
			options: ['text', 'email', 'password', 'radio', 'checkbox'],
			control: 'select',
		},
		...sizeControls,
		...fullWidthControls,
	},
} satisfies Meta<typeof FormLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({ children, required, isRequired }) => {
		return (
			<Form>
				<FormField>
					<FormLabel isRequired={required}>{children}</FormLabel>
				</FormField>
			</Form>
		);
	},
};
