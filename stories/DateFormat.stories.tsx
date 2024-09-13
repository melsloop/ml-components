import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DateFormat from '../src/components/DateFormat';

const meta = {
	title: 'Text/DateFormat',
	component: DateFormat,
	tags: ['autodocs'],
	args: {
		date: '2024-12-09',
		format: 'MM/dd/yy',
	},
	argTypes: {},
} satisfies Meta<typeof DateFormat>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: function Render(args) {
		return <DateFormat {...args} />;
	},
};
