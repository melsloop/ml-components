import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DateFormat from '../src/components/DateFormat';

const meta = {
	title: 'Text/DateFormat',
	component: DateFormat,
	// tags: ['autodocs'],
	args: {
		value: '2024-12-09',
		template: 'MM/dd/yy',
	},
	argTypes: {},
} satisfies Meta<typeof DateFormat>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({ value, template }) => (
		<DateFormat template={template}>{value}</DateFormat>
	),
};
