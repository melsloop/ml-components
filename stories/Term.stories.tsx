import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import Term from '../src/components/Term';
import Text from '../src/components/Text';

const meta = {
	title: 'Term',
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
