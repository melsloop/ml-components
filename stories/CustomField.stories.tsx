import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CustomField from '../src/components/CustomField';
import icons from './helpers/icons';

const meta = {
	title: 'Input/CustomField',
	component: CustomField,
	tags: ['autodocs'],
	args: {
		name: 'custom-field-name',
		label: 'Label',
		required: false,
		fullWidth: false,
		icon: 'FileIcon',
	},
	argTypes: {
		icon: {
			options: icons,
			control: 'select',
		},
	},
} satisfies Meta<typeof CustomField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<CustomField {...args}>
			<input placeholder="Placeholder" />
		</CustomField>
	),
};

export const Textarea: Story = {
	args: {
		name: 'name',
		label: 'Custom Field',
		required: true,
	},
	render: (args) => (
		<CustomField {...args}>
			<textarea />
		</CustomField>
	),
};
