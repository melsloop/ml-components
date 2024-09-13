import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Term from '../src/components/Term';

const meta = {
	title: 'Text/Term',
	component: Term,
	tags: ['autodocs'],
	args: {
		children: 'Term',
	},
} satisfies Meta<typeof Term>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: function Render({ children, ...args }) {
		return <Term {...args}>{children}</Term>;
	},
};
