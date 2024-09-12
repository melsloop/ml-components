import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Input from '../src/components/Input';

const meta = {
	title: 'Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: 'Input',
		name: 'name',
		required: true,
		icon: 'pencil',
		placeholder: 'Placeholder',
		type: 'text',
	},
	render: ({ label, name, icon, required, placeholder, type }) => (
		<Input
			label={label}
			name={name}
			icon={icon}
			required={required}
			placeholder={placeholder}
			type={type}
		/>
	),
};
