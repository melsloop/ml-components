import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import CustomField from '../src/components/CustomField';
import { Pencil1Icon } from '@radix-ui/react-icons';

const meta = {
	title: 'CustomField',
	component: CustomField,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof CustomField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		name: 'custom-field-name',
		label: 'Label',
		required: false,
		fullWidth: false,
	},
	render: ({ ...args }) => (
		<CustomField
			icon="Pencil1Icon"
			{...args}
		>
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
